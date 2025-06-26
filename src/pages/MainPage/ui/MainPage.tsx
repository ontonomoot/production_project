import { useTranslation } from 'react-i18next'
import cls from './MainPage.module.scss'
import { Counter } from '../../../entities/Counter/ui/Counter';

function MainPage() {
  const { t } = useTranslation('main');
  return (
    <div className={cls.MainPage}>
      {t('Главная')}
      <Counter/>
    </div>
  )
}

export default MainPage