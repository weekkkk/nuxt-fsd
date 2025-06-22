import { defineNuxtModule, createResolver, addComponentsDir, addImportsDir } from "@nuxt/kit";
import type { ComponentsDir } from "nuxt/schema";
import fg from "fast-glob";

export type ModuleOptions = {
  baseDir: string;
  autoImportTSSuffix: string;
  autoImportVueSuffix: string | false;
  layers: {
    name: string;
    hasSlices?: boolean;
    suffix?: string;
    prefix?: string;
  }[];
};

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-fsd",
    configKey: "fsd",
  },
  defaults: {
    autoImportVueSuffix: "public",
    autoImportTSSuffix: "public",
    baseDir: "src",
    layers: [
      {
        name: "shared",
        prefix: "UI",
      },
      {
        name: "entities",
        hasSlices: true,
      },
      {
        name: "features",
        suffix: "Feature",
        hasSlices: true,
      },
      {
        name: "widgets",
        suffix: "Widget",
        hasSlices: true,
      },
      {
        name: "pages",
        suffix: "Page",
        hasSlices: true,
      },
    ],
  },
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

    const getIndexComponentDir = (path: string, prefix: string = "", suffix: string = ""): ComponentsDir => ({
      path,
      pattern: `**/index.vue`,
      extensions: ["vue"],
      extendComponent(component) {
        component.pascalName = `${prefix}${component.pascalName.replaceAll("Ui", "")}${suffix}`;
        return component;
      },
    });

    const resolver = createResolver(import.meta.url);
    const rootDir = resolver.resolve(_nuxt.options.rootDir, _options.baseDir);

    const patterns: string[] = [];
    if (_options.autoImportVueSuffix === false) {
      for (const layer of _options.layers) {
        addComponentsDir(
          getIndexComponentDir(`${rootDir}/${layer.name}`, layer.prefix, layer.suffix),
        );
      }
    }
    else {
      for (const layer of _options.layers) {
        addComponentsDir(
          getSuffixComponentDir(`${rootDir}/${layer.name}`),
        );
      }
    }

    for (const layer of _options.layers) {
      const layerPattern = `**/${layer.name}`;

      patterns.push(`${layerPattern}/**/*.${_options.autoImportTSSuffix}.ts`);
      if (layer.hasSlices) {
        patterns.push(`${layerPattern}/*/index.ts`);
      }
      else {
        patterns.push(`${layerPattern}/index.ts`);
      }
    }

    const pathes = await fg(patterns, {
      cwd: rootDir,
      onlyFiles: true,
      absolute: true,
    });

    const importDirs = Array.from(new Set(pathes));

    for (const dir of importDirs) {
      addImportsDir(dir);
    }
  },
});
