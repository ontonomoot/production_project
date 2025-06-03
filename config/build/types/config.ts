//файл для описания опций сборки
// для описания development | production

export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}