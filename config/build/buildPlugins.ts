import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

// функция которая возвращает плагины - для декомпозиции - вызываем ее в основном конфиге
// WebpackPluginInstance - специальный тип в вебпаке для плагингов
export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      // расположение файлов
      filename: 'css/[name].[contetnhash:8].css',
      // для ассинхронной подгрузки чанков
      chunkFilename:'css/[name].[contenthash:8].css'
    })


  ]
}