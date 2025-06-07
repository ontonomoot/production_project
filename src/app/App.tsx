import './styles/index.scss'
import { classNames } from "../shared/lib/helpers/classNames"
import { useTheme } from "app/providers/ThemeProvider"
import { AppRouter } from "./providers/router"
import { Navbar } from "widgets/Navbar"
import { Sidebar } from 'widgets/Sidebar/ui'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

function App() {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App