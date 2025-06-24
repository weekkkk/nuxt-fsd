import type { TLayerOptions } from "./TLayerOptions";
import type { TLayerType } from "./TLayerType";

export type TLayers = Record<TLayerType, TLayerOptions> & Record<string, TLayerOptions>;
