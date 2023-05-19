<script lang="ts" setup>
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import { useUserStore } from "@/store/modules/user"
// import { AESEncrypt, RSAencrypt, Base64Decrypt } from "@/utils/secret" // 加密 解密
import { User, Lock, Key, Picture, Loading } from "@element-plus/icons-vue"
import ThemeSwitch from "@/components/ThemeSwitch/index.vue"
import { type FormInstance, FormRules } from "element-plus"
import { getLoginCodeApi } from "@/api/login"
// import { getCode } from "@/api/user"
import { type ILoginRequestData } from "@/api/login/types/login"

const router = useRouter()
const loginFormRef = ref<FormInstance | null>(null)

/** 登录按钮 Loading */
const loading = ref(false)
/** 验证码图片 URL */
const codeUrl = ref("")
// const uuid = ref("")
/** 登录表单数据 */
const loginForm: ILoginRequestData = reactive({
  username: "admin",
  password: "12345678",
  code: ""
})
/** 登录表单校验规则 */
const loginFormRules: FormRules = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 8, max: 16, message: "长度在 8 到 16 个字符", trigger: "blur" }
  ],
  code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
}
// 获取uuid
// const getUuid = () => {
//   const s: AnyArray = []
//   const hexDigits = "0123456789abcdef"
//   for (let i = 0; i < 36; i++) {
//     s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
//   }
//   s[14] = "4" // bits 12-15 of the time_hi_and_version field to 0010
//   s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
//   s[8] = s[13] = s[18] = s[23] = "-"
//   const uuid = s.join("")
//   return uuid
// }

// 获取图片验证码
// const getCodeFunction = async () => {
//   //获取验证码图片
//   uuid.value = getUuid()
//   await getCode(uuid.value)
//     .then((res) => {
//       codeUrl.value = window.URL.createObjectURL(res)
//     })
//     .catch((error) => {
//       console.log(error)
//       // Handle the error here
//     })
// }
/** 登录逻辑 */
const handleLogin = () => {
  loginFormRef.value?.validate((valid: boolean) => {
    if (valid) {
      loading.value = true
      useUserStore()
        .login({
          username: loginForm.username,
          password: loginForm.password,
          code: loginForm.code
        })
        .then(() => {
          router.push({ path: "/" })
        })
        .catch(() => {
          createCode()
          loginForm.password = ""
        })
        .finally(() => {
          loading.value = false
        })
    } else {
      return false
    }
  })
}

// interface ReqData {
//   password: string
//   userName: string
//   code: string
//   device: string
//   applyId: string
//   uuid: string
// }

// 登录
// const handleLoginClick = () => {
//   loginFormRef.value?.validate((valid: boolean) => {
//     if (valid) {
//       loading.value = true

//       useUserStore()
//         .getAesPublicRsaPublicAesIV()
//         .then((e) => {
//           const rsaPublicKey = Base64Decrypt(e.data.RSA_PUBLIC_KEY) // rsa公钥
//           const aesPublicKey = Base64Decrypt(e.data.AES_KEY) // aes公钥
//           const aesIvs: string = Base64Decrypt(e.data.AES_IV) // aes偏移量
//           const aesEncrypt = AESEncrypt(loginForm.password.trim(), aesPublicKey, aesIvs) // AES加密方法

//           const reqData: ReqData = {
//             userName: loginForm.username,
//             password: RSAencrypt(aesEncrypt, rsaPublicKey), // RSA加密方法
//             code: loginForm.code,
//             device: "1",
//             applyId: "018a554259875f9790ef4f7f749fff23", // 系统id
//             uuid: getUuid()
//           }
//           useUserStore()
//             .Login(reqData)
//             .then(() => {
//               loading.value = false
//             })
//             .catch(() => {
//               loading.value = false
//             })
//         })
//     } else {
//       return false
//     }
//   })
// }
/** 创建验证码 */
const createCode = () => {
  // 先清空验证码的输入
  loginForm.code = ""
  // 获取验证码
  codeUrl.value = ""
  getLoginCodeApi().then((res) => {
    codeUrl.value = res.data
  })
}
/** 初始化验证码 */
createCode()
</script>

<template>
  <div class="login-container">
    <ThemeSwitch class="theme-switch" />
    <div class="login-card">
      <div class="title">
        <img src="@/assets/layout/logo-text-2.png" />
      </div>
      <div class="content">
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" @keyup.enter="handleLogin">
          <el-form-item prop="username">
            <el-input
              v-model.trim="loginForm.username"
              placeholder="用户名"
              type="text"
              tabindex="1"
              :prefix-icon="User"
              size="large"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model.trim="loginForm.password"
              placeholder="密码"
              type="password"
              tabindex="2"
              :prefix-icon="Lock"
              size="large"
              show-password
            />
          </el-form-item>
          <el-form-item prop="code">
            <el-input
              v-model.trim="loginForm.code"
              placeholder="验证码"
              type="text"
              tabindex="3"
              :prefix-icon="Key"
              maxlength="7"
              size="large"
            >
              <template #append>
                <el-image :src="codeUrl" @click="createCode" draggable="false">
                  <template #placeholder>
                    <el-icon><Picture /></el-icon>
                  </template>
                  <template #error>
                    <el-icon><Loading /></el-icon>
                  </template>
                </el-image>
              </template>
            </el-input>
          </el-form-item>
          <el-button :loading="loading" type="primary" size="large" @click.prevent="handleLogin"> 登 录 </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  .theme-switch {
    position: fixed;
    top: 5%;
    right: 5%;
    cursor: pointer;
  }
  .login-card {
    width: 480px;
    border-radius: 20px;
    box-shadow: 0 0 10px #dcdfe6;
    background-color: #fff;
    overflow: hidden;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
      img {
        height: 100%;
      }
    }
    .content {
      padding: 20px 50px 50px 50px;
      :deep(.el-input-group__append) {
        padding: 0;
        overflow: hidden;
        .el-image {
          width: 100px;
          height: 40px;
          border-left: 0px;
          user-select: none;
          cursor: pointer;
          text-align: center;
        }
      }
      .el-button {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
}
</style>
