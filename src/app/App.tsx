import './styles/index.scss'
import { classNames } from "../shared/lib/classNames/classNames"
import { useTheme } from "app/providers/ThemeProvider"
import { AppRouter } from "./providers/router"
import { Navbar } from "widgets/Navbar"
import { Sidebar } from 'widgets/Sidebar/ui'
import { Suspense, useEffect } from 'react'
import { PageLoader } from 'widgets/PageLoader'

function App() {
  const { theme } = useTheme();

  // useEffect(() => {
  //   throw new Error();
  // },[])
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