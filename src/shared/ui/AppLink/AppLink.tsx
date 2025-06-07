import { classNames } from 'shared/lib/helpers/classNames'
import cls from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'
import { FC } from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

// тип LinkProps - встроенный тип компонента Link, его можно вытащить наружу)
interface AppLinkProps extends LinkProps {
  className?: string,
  theme?: AppLinkTheme,
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props; // если нужны еще другие пропсы - разворачиваем ...otherProps
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
