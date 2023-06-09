/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-18 18:26:34
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-06-09 21:41:50
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/eslint-config-typescript"
    // unplugin-auto-import 自动生成的文件
    // "./types/.eslintrc-auto-import.json"
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  rules: {
    // TS
    "@typescript-eslint/no-explicit-any": "off",
    "no-debugger": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-useless-catch": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }
    ],
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }
    ],
    "@typescript-eslint/no-unnecessary-type-constraint": "off",
    // Vue
    "vue/no-v-html": "off",
    "vue/require-default-prop": "off",
    "vue/require-explicit-emits": "off",
    "vue/multi-word-component-names": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always"
        },
        svg: "always",
        math: "always"
      }
    ],
    "vue/no-mutating-props": [
      "error",
      {
        shallowOnly: true
      }
    ],
    // Prettier
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ]
  }
}
