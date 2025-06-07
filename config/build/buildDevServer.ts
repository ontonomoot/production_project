import { BuildOptions } from "./types/config"; 
// чтобы не совпало configuration из webpack
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true, /* автоматическое открытие в браузере */
    // позволяет проксировать запросы через корневую страницу - обновление некорневой стриницы
    // не выбрасывает на cannot get/
    historyApiFallback: true,
    hot: true
  }
}