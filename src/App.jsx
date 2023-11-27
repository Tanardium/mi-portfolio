import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
// Páginas:
import Home from './pages/Home'
import Projects from './pages/projects'
import Favorites from './pages/favorites'
import { FavoritosProvider } from './context/FavoritosContext'; // Asegúrate de la ruta correcta


function App() {
  return (
    <FavoritosProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/Favorites" element={<Favorites />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </FavoritosProvider>
  )
}

export default App;