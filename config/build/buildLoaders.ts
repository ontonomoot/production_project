import MiniCssExtractPlugin, { loader } from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

// RuleSetRule -тип для правил, лоадеров вебпака
export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            // для читабельности стилей: в прод - сгенерированные для МОДУЛЬНЫХ КЛАССОВ,
            // для обычных классов - без генерации названия
            //  в дев МОДУЛЬНЫЕ - читабельные простые 
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          }
        }
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  // порядок, при котром лоадры возвращаются в массиве - имеет значение, поэтому сохраняем в переменную
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          ["i18next-extract", {
            locales: ['ru', 'en'],
            keyAsDefaultValue: true
          }],
        ]
      },
    }
  }
  // важна очередность!!
  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader,
  ]
}