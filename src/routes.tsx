import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import CardapioPage from './pages/CardapioPage'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/cardapio',
      element: <CardapioPage />
    }
  ],
  {
    basename: '/efood'
  }
)
