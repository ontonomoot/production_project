import { createContext } from "react";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void; //функция принимает новую тему - ничего не возвращает
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme';
