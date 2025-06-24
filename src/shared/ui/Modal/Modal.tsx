import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false)
  const timeRef = useRef<ReturnType<typeof setTimeout>>()
  const ANIMATION_DELAY = 100
  const {
    className,
    children,
    isOpen,
    onClose
  } = props

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' || 'Space') {
      closeHandler();
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  return (
    // <Portal element={document.body}>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    // </Portal>
  )
}
