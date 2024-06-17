import globals from "globals";
import js from "@eslint/js";
import vue from "eslint-plugin-vue"

export default [
  js.configs.recommended,
  ...vue.configs["flat/recommended"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      "vue/multi-word-component-names": "off"
    }
  }
]