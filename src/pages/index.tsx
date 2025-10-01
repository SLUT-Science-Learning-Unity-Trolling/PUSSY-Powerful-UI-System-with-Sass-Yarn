import { PageRoutes } from 'app/lib/routes'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import 'shared/config/fonts/fonts.scss'
import 'shared/config/global.scss'

const HomePage = lazy(() => import('./home'))
const NotFoundPage = lazy(() => import('./not-found'))

export default function Routing() {
  return (
    <Routes>
        <Route path={`${PageRoutes.home}`} element={<HomePage />} />
        <Route path={`${PageRoutes.notFound}`} element={<NotFoundPage />} />
    </Routes>
  )
}
