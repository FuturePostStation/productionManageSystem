import { PageBase } from "@/components/tsx/PageBase"
import { getToken } from "@/utils/cache/cookies"
import { Plus } from "@element-plus/icons-vue"
import ElUpload, { UploadFile, UploadFiles } from "element-plus/es/components/upload"
import { ComponentObjectPropsOptions, PropType, WatchStopHandle, watchEffect, withModifiers } from "vue"
import style from "./Upload.module.scss"

export default new (class Upload extends PageBase<IProps, IEvent> {
  constructor() {
    super()
  }

  protected props: ComponentObjectPropsOptions<IProps> = {
    modelValue: String,
    accept: { type: String, default: "image/*, video/*, application/pdf" },
    mime: { type: String, default: "image" },
    disabled: { type: Boolean, default: false },
    uploadLimit: { type: Number, default: 1 },
    previewList: { type: Array, default: () => [] },
    postHandler: Function as PropType<(mime: string) => Promise<any>>
  }
  public emits: (keyof IEvent)[] = ["change", "clear", "success", "update:modelValue"]

  private upload: InstanceType<typeof ElUpload> = null as any
  private curFile: File = null as any
  private localMime = "image"
  private showPreview = false
  private mimeWatch?: WatchStopHandle

  public created() {
    this.mimeWatch = watchEffect(() => {
      this.localMime = this.mime || "image"
    })
  }

  public unmounted() {
    this.mimeWatch?.()
  }

  public render(): JSX.Element {
    return (
      <div>
        {this.body()}
        <el-dialog
          class={style.videoBox}
          title="预览"
          visible={this.showPreview}
          width={"50%"}
          before-close={this.close}
          append-to-body
          modal-append-to-body={false}
          onClosed={this.close}
        >
          <video ref="videoPlayer" controls autoplay src={this.modelValue} />
          <span v-slot="footer" class="dialog-footer">
            <el-button onClick={this.close} size="default">
              关 闭
            </el-button>
          </span>
        </el-dialog>
      </div>
    )
  }

  private body() {
    if (this.disabled) this.content()
    return (
      <el-upload
        ref="upload"
        class={[style.upload, this.disabled && style.disabled]}
        accept={this.accept}
        disabled={this.disabled}
        // action={CONFIG.baseUrl + CONFIG.uploadUrl}
        // data={{ biz: userStore.auth.userInfo.id, jeditor: 1 }}
        before-upload={this.beforeUpload}
        headers={{ "X-Access-Token": getToken() }}
        show-file-list={false}
        multiple={this.uploadLimit > 1}
        limit={this.uploadLimit}
        {...{ props: { onSuccess: this.handleSuccess } }}
      >
        {this.modelValue ? (
          this.content()
        ) : (
          <el-icon class={style.icon}>
            <Plus />
          </el-icon>
        )}
      </el-upload>
    )
  }

  private content() {
    let child
    if (this.localMime.includes("pdf")) {
      child = (
        <img class={style.mediaItem} src="/static/images/pdf.jpg" alt="" onClick={() => window.open(this.modelValue)} />
      )
    } else if (this.accept.includes("vnd.android.package-archive")) {
      child = <img class={style.mediaItem} src="/static/images/apk.png" alt="" />
    } else if (this.localMime.includes("video")) {
      child = (
        <div onClick={this.preview}>
          <i class={["el-icon-video-play", style.videoIcon]}></i>
          <video class={[style.mediaItem, style.video]} src={this.modelValue}></video>
        </div>
      )
    } else {
      child = (
        <el-image class={style.mediaItem} src={this.modelValue} preview-src-list={this.previewList}>
          <i v-slot="error" class="el-image__error el-icon-picture-outline"></i>
        </el-image>
      )
    }
    return (
      <div onClick={withModifiers(() => {}, ["stop"])}>
        {!this.disabled && (
          <i class={["el-icon-error", style.close]} onClick={withModifiers(this.onClear, ["stop"])}></i>
        )}
        {child}
      </div>
    )
  }

  private close() {
    this.showPreview = false
  }

  private preview() {
    this.showPreview = true
  }

  private beforeUpload(file: File) {
    const mime = this.getMime(file)
    if (!["image", "video", "pdf", "vnd.android.package-archive"].find((item) => mime.includes(item))) {
      this.$message.error("请上传图片 视频或PDF")
      return false
    }
    this.curFile = file
  }

  private handleSuccess(res: any, file: UploadFile, fileList: UploadFiles) {
    const isWait = fileList.some((item) => item.status != "success" && item.status != "fail")
    if (!isWait) {
      if (res?.success) {
        const mime = this.getMime(file.raw!)
        if (fileList.length == 1) {
          this.localMime = mime
          this.$emit("update:modelValue", res.message)
          if (this.postHandler) this.postHandler(mime)
        }
        const successList: Array<UploadMedia> = []
        fileList.forEach((item) => {
          if (item.status == "success") {
            successList.push({
              path: (item as any).response.message,
              mime: mime
            })
            if (mime.includes("image")) this.previewList.push((item as any).response.message)
          }
        })
        this.$emit("change", successList)
        this.$emit("success", this.curFile)
        this.upload.clearFiles()
      }
    }
  }

  private getMime(file: File) {
    // const index = file.name.lastIndexOf(".")
    return file.type
  }

  private onClear() {
    this.localMime = ""
    this.$emit("clear")
    this.$emit("update:modelValue", "")
    this.curFile = null as any
  }
})()

interface IProps {
  modelValue: any
  mime: string
  accept: string
  disabled?: boolean
  uploadLimit: number
  previewList: Array<string>
  postHandler?: (mime: string) => Promise<any>
}

interface IEvent {
  "update:modelValue": (val: any) => void
  change: (val: Array<UploadMedia>) => void
  clear: () => void
  success: (file: File) => void
}
export interface UploadMedia {
  path: string
  mime: string
}
