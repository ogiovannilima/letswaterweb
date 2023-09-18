import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* DIFF LAYOUT ROUTES */}
      {/* <Route path="/admin" element={<AdminLayout />}>
        <Route path="/users" />
      </Route> */}
    </Routes>
  )
}
