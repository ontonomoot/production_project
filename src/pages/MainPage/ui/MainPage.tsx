import { useTranslation } from 'react-i18next'
import cls from './MainPage.module.scss'
import { Counter } from '../../../entities/Counter/ui/Counter';
import { Input, LabelValueProps } from 'shared/ui/Input/Input';
import { useState } from 'react';

function MainPage() {
  const { t } = useTranslation('main');
  const [val, setVal] = useState('');
  const onChange = (val: string) => {
    setVal(val)
  }
  return (
    <div className={cls.MainPage}>
      {t('Главная')}
      <Counter />
      <Input
        value={val}
        onChange={onChange}
        labelValue={LabelValueProps.EMAIL}
      />
      <span>value: {val}</span>
    </div>
  )
}

export default MainPage