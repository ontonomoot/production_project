import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode // то что телепортируем
  element?: HTMLElement // куда телепортируем
}

export const Portal = (props: PortalProps) => {
  const {
    children,
    element // по умолчанию, если не указан элемент куда телепортировать 
  } = props
  return createPortal(children, element)
}
