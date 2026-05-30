import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import CardapioPage from './pages/CardapioPage'
import { Pagina404 } from './pages/Pagina404'
import { GlobalCSS } from './styles'

function App() {
  return (
    <>
      <GlobalCSS />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<CardapioPage />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
