import { classNames } from 'shared/lib/helpers/classNames'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

export enum ThemeButton {
  CLEAR = 'clear'
}

// унаследование от типа ButtonHTMLAttributes для использования встроенных пропсов
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  theme?: ThemeButton,
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props;
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
