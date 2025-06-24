// @ts-check
import antfu from "@antfu/eslint-config";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  antfu({
    type: "lib",

    stylistic: {
      indent: 2,
      quotes: "double",
      semi: true,
    },

    typescript: true,
    vue: {
      a11y: true,
    },

    jsonc: false,
    yaml: false,

    formatters: {
      css: true,
      html: true,
      markdown: "prettier",
    },
  }),
);
