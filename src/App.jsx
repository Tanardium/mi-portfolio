import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
// Páginas:
import Home from './pages/Home'
import Projects from './pages/projects'
import Favorites from './pages/favorites'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/favorites" element={<Favorites />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;