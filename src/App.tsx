import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { GlobalCSS } from './styles'

function App() {
  return (
    <>
      <GlobalCSS />
      <RouterProvider router={router} />
    </>
  )
}

export default App