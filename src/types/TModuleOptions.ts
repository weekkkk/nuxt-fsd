import type { TLayers } from "./TLayers";

export interface TModuleOptions {
  rootDir: string;
  autoImportTSSuffix: string;
  autoImportVueSuffix: string;
  layers: TLayers;
}
