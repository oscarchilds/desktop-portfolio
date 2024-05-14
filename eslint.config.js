import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue"

export default [
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
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