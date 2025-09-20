import { PageRoutes } from 'app/lib/routes'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import 'shared/config/fonts/fonts.css'
import 'shared/config/global.css'

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
