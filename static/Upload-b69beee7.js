var e=Object.defineProperty,i=(i,s,l)=>(((i,s,l)=>{s in i?e(i,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[s]=l})(i,"symbol"!=typeof s?s+"":s,l),l);import{ai as s,i as l,f as t,X as a,aj as o,A as c,ak as d,al as u,q as n,am as r}from"./index-4a918107.js";import{P as p}from"./PageBase-d1889d10.js";const m={upload:"_upload_6cupy_1",icon:"_icon_6cupy_16",img:"_img_6cupy_24",mediaItem:"_mediaItem_6cupy_25",close:"_close_6cupy_30",videoIcon:"_videoIcon_6cupy_38",disabled:"_disabled_6cupy_49",videoBox:"_videoBox_6cupy_53"},h=new class extends p{constructor(){super(),i(this,"props",{modelValue:String,accept:{type:String,default:"image/*, video/*, application/pdf"},mime:{type:String,default:"image"},disabled:{type:Boolean,default:!1},uploadLimit:{type:Number,default:1},previewList:{type:Array,default:()=>[]},postHandler:Function}),i(this,"emits",["change","clear","success","update:modelValue"]),i(this,"upload",null),i(this,"curFile",null),i(this,"localMime","image"),i(this,"showPreview",!1)}created(){this.mimeWatch=s((()=>{this.localMime=this.mime||"image"}))}unmounted(){var e;null==(e=this.mimeWatch)||e.call(this)}render(){return l("div",null,[this.body(),l(t("el-dialog"),{class:m.videoBox,title:"预览",visible:this.showPreview,width:"50%","before-close":this.close,"append-to-body":!0,"modal-append-to-body":!1,onClosed:this.close},{default:()=>[l("video",{ref:"videoPlayer",controls:!0,autoplay:!0,src:this.modelValue},null),a(l("span",{class:"dialog-footer"},[l(t("el-button"),{onClick:this.close,size:"default"},{default:()=>[c("关 闭")]})]),[[o("slot"),"footer"]])]})])}body(){return this.disabled&&this.content(),l(t("el-upload"),d({ref:"upload",class:[m.upload,this.disabled&&m.disabled],accept:this.accept,disabled:this.disabled,"before-upload":this.beforeUpload,headers:{"X-Access-Token":u()},"show-file-list":!1,multiple:this.uploadLimit>1,limit:this.uploadLimit},{props:{onSuccess:this.handleSuccess}}),{default:()=>[this.modelValue?this.content():l(t("el-icon"),{class:m.icon},{default:()=>[l(r,null,null)]})]})}content(){let e;return e=this.localMime.includes("pdf")?l("img",{class:m.mediaItem,src:"/static/images/pdf.jpg",alt:"",onClick:()=>window.open(this.modelValue)},null):this.accept.includes("vnd.android.package-archive")?l("img",{class:m.mediaItem,src:"/static/images/apk.png",alt:""},null):this.localMime.includes("video")?l("div",{onClick:this.preview},[l("i",{class:["el-icon-video-play",m.videoIcon]},null),l("video",{class:[m.mediaItem,m.video],src:this.modelValue},null)]):l(t("el-image"),{class:m.mediaItem,src:this.modelValue,"preview-src-list":this.previewList},{default:()=>[a(l("i",{class:"el-image__error el-icon-picture-outline"},null),[[o("slot"),"error"]])]}),l("div",{onClick:n((()=>{}),["stop"])},[!this.disabled&&l("i",{class:["el-icon-error",m.close],onClick:n(this.onClear,["stop"])},null),e])}close(){this.showPreview=!1}preview(){this.showPreview=!0}beforeUpload(e){const i=this.getMime(e);if(!["image","video","pdf","vnd.android.package-archive"].find((e=>i.includes(e))))return this.$message.error("请上传图片 视频或PDF"),!1;this.curFile=e}handleSuccess(e,i,s){if(!s.some((e=>"success"!=e.status&&"fail"!=e.status))&&(null==e?void 0:e.success)){const l=this.getMime(i.raw);1==s.length&&(this.localMime=l,this.$emit("update:modelValue",e.message),this.postHandler&&this.postHandler(l));const t=[];s.forEach((e=>{"success"==e.status&&(t.push({path:e.response.message,mime:l}),l.includes("image")&&this.previewList.push(e.response.message))})),this.$emit("change",t),this.$emit("success",this.curFile),this.upload.clearFiles()}}getMime(e){return e.type}onClear(){this.localMime="",this.$emit("clear"),this.$emit("update:modelValue",""),this.curFile=null}};export{h as U};
