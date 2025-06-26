import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const { t } = useTranslation();
  const onToggleAuth = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [isAuthModal])
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        onClick={onToggleAuth}
        className={cls.links}
        theme={ButtonTheme.CLEAR_INVERTED}
      >
        {t("Войти")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleAuth}>
        PIU PIUPIU PIU
        PIUPIU PIUPIU
        PIUPIU PIUPIU PIUPIU PIUPIU PIUPIU PIU
      </Modal>
    </div>
  )
}







