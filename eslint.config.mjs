// @ts-check
import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

// Run `npx @eslint/config-inspector` to inspect the resolved config interactively
export default createConfigForNuxt({
  features: {
    // Rules for module authors
    tooling: true,
    // Rules for formatting
    stylistic: {
      semi: true,
      quotes: "double",
      indent: 2,
    },
  },
  dirs: {
    src: [
      "./",
    ],
  },
})
  .append(
    {
      rules: {
        "vue/multi-word-component-names": "off",
      },
    },
    // your custom flat config here...
  );
