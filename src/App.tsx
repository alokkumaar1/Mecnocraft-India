import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { SolutionsPage } from './pages/SolutionsPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'

export default function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/web3', element: <Navigate to="/" replace /> },
        { path: '/services', element: <ServicesPage /> },
        { path: '/solutions', element: <SolutionsPage /> },
        { path: '/about', element: <AboutPage /> },
        { path: '/contact', element: <ContactPage /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

