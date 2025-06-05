import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    // абсолютные пути в приоритете, настройка для webpack
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles : ['index'],
    alias: {},
  }
}