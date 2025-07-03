import type { TModuleOptions } from "../types";
import { DEFAULT_LAYERS } from "./layers";

export const DEFAULT_MODULE_OPTIONS: TModuleOptions = {
  rootDir: "src",
  autoImportTSSuffix: "public",
  autoImportVueSuffix: "public",
  layers: DEFAULT_LAYERS,
};
