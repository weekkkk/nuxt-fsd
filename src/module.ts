import type { ComponentsDir } from "nuxt/schema";
import type { TModuleOptions } from "./types";
import { addComponentsDir, addImportsDir, createResolver, defineNuxtModule } from "@nuxt/kit";
import fg from "fast-glob";
import { DEFAULT_MODULE_OPTIONS } from "./defaults";

export default defineNuxtModule<TModuleOptions>({
  meta: {
    name: "nuxt-fsd",
    configKey: "fsd",
  },
  defaults: DEFAULT_MODULE_OPTIONS,
  async setup(_options, _nuxt) {
    const getSuffixComponentDir = (path: string): ComponentsDir => ({
      path,
      pathPrefix: false,
      pattern: `**/*.${_options.autoImportVueSuffix}.vue`,
      extensions: ["vue"],
      extendComponent(component) {
        component.pascalName = component.pascalName.replace(/([A-Z][a-z0-9]*)$/, "");
        return component;
      },
    });

    const layers = {
      ...DEFAULT_MODULE_OPTIONS.layers,
      ..._options.layers,
    };

    const resolver = createResolver(import.meta.url);
    const absRootDir = resolver.resolve(_nuxt.options.rootDir, _options.rootDir);

    const patterns: string[] = [];

    for (const [name, { hasSlices }] of Object.entries(layers)) {
      addComponentsDir(
        getSuffixComponentDir(`${absRootDir}/${name}`),
      );

      const layerPattern = `**/${name}`;

      patterns.push(`${layerPattern}/**/*.${_options.autoImportTSSuffix}.ts`);
      if (hasSlices) {
        patterns.push(`${layerPattern}/*/index.${_options.autoImportTSSuffix}.ts`);
      }
      else {
        patterns.push(`${layerPattern}/index.${_options.autoImportTSSuffix}.ts`);
      }
    }

    const pathes = await fg(patterns, {
      cwd: absRootDir,
      onlyFiles: true,
      absolute: true,
    });

    const importDirs = Array.from(new Set(pathes));

    for (const dir of importDirs) {
      addImportsDir(dir);
    }
  },
});
