import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Layout from '@/components/layout/Layout/Layout'
import Home from '@/pages/Home/Home'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
