import React from 'react'
import { useTranslation } from 'react-i18next'
import cls from './AboutPage.module.scss'
function AboutPage() {
  const {t} = useTranslation('about');
  return (
    <div className={cls.AboutPage}>
      {t('О сайте')}
    </div>
  )
}

export default AboutPage