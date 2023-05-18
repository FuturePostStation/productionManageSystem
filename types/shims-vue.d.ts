/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-16 19:43:35
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-18 11:49:14
 */
declare module "*.vue" {
  import { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "*.scss" {
  const scss: Record<string, string>
  export default scss
}


declare module 'vue/types/vue' {
  import VueRouter from 'vue-router'
  interface Vue {
    $router: VueRouter
  }
}