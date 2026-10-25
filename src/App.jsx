import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import QuienesSomos from './pages/QuienesSomos'
import Contacto from './pages/Contacto'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes'
import MenuInferior from './components/MenuInferior'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="aplicacion">
        <header className="cabecera">
          <p>Supermercado La Canasta</p>
        </header>

        <Routes>
          <Route path="/" element={<Inicio />} />

          <Route
            path="/quienes-somos"
            element={<QuienesSomos />}
          />

          <Route path="/contacto" element={<Contacto />} />

          <Route
            path="/preguntas-frecuentes"
            element={<PreguntasFrecuentes />}
          />

          <Route
            path="*"
            element={
              <main className="contenedor">
                <h1>Página no encontrada</h1>
                <p>Usa el menú inferior para volver al sitio.</p>
              </main>
            }
          />
        </Routes>

        <MenuInferior />
      </div>
    </BrowserRouter>
  )
}

export default App