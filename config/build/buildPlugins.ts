import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import { BuildOptions } from "./types/config";


// функция которая возвращает плагины - для декомпозиции - вызываем ее в основном конфиге
// WebpackPluginInstance - специальный тип в вебпаке для плагингов
export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      // расположение файлов
      filename: 'css/[name].[contetnhash:8].css',
      // для ассинхронной подгрузки чанков
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    // для прокидывания в webpack глобальные переменные - см. доку
    // присваиваем значение isDev - теперь она доступна в корне
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin()
  ]
}