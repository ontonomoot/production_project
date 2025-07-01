import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import { InputHTMLAttributes, memo, useEffect, useState } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export enum LabelValueProps {
  EMAIL = 'email:',
  PASSWORD = 'password:'
}
interface InputProps extends HTMLInputProps {
  className?: string,
  value?: string,
  labelValue?: LabelValueProps,
  onChange?: (value: string) => void,
  autofocus?: boolean,
}


export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    labelValue = '',
    autofocus,
    ...otherProps // стандартные пропсы инпута или другого элемента
  } = props

  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
    }
  }, [autofocus])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      <div>
        {labelValue}
      </div>
      <input
        className={cls.inputBlock}
        value={value}
        type={type}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div >
  )
})
