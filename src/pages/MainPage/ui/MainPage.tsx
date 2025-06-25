import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next'

function MainPage() {
  const { t } = useTranslation('main');
  return (
    <div>
      {t('Главная')}
      <Counter/>
    </div>
  )
}

export default MainPage