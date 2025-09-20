import { PageRoutes } from 'app/lib/routes'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import 'shared/config/fonts/fonts.css'
import 'shared/config/global.css'

const EditorPage = lazy(() => import('./editor'))
const NotFoundPage = lazy(() => import('./not-found'))

export default function Routing() {
  return (
    <Routes>
        <Route path={`${PageRoutes.editor}`} element={<EditorPage />} />
        <Route path={`${PageRoutes.notFound}`} element={<NotFoundPage />} />
    </Routes>
  )
}
