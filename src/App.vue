<!--
 * @Author: pengwenlei pwl330109371@gmail.com
 * @Date: 2023-05-16 14:31:41
 * @LastEditors: pengwenlei pwl330109371@gmail.com
 * @LastEditTime: 2023-05-16 14:44:20
-->
<script lang="ts" setup>
// import { h } from "vue"
import { useTheme } from "@/hooks/useTheme"
// import { ElNotification } from "element-plus"
import zhCn from "element-plus/lib/locale/lang/zh-cn"

const { initTheme } = useTheme()

/** 初始化主题 */
initTheme()
/** 将 Element Plus 的语言设置为中文 */
const locale = zhCn

// ElNotification({
//   title: "Hello",
//   message: h("a"),
//   duration: 0,
//   position: "bottom-right"
// })
</script>

<template>
  <ElConfigProvider :locale="locale">
    <router-view />
  </ElConfigProvider>
</template>
