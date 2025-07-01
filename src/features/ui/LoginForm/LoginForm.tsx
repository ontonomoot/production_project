import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { LabelValueProps } from 'shared/ui/Input/Input'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        autofocus
        type="text"
        className={cls.input}
        labelValue={LabelValueProps.EMAIL}
      />
      <Input
        type="text"
        className={cls.input}
        labelValue={LabelValueProps.PASSWORD}
      />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  )
}
