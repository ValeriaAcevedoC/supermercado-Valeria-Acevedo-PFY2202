import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import Inicio from './pages/Inicio'
import QuienesSomos from './pages/QuienesSomos'
import Contacto from './pages/Contacto'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes'
import AgregarArticulo from './pages/AgregarArticulo'
import Inventario from './pages/Inventario'
import MenuInferior from './components/MenuInferior'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="aplicacion">
        <header className="cabecera">
          <p>Supermercado La Canasta</p>
        </header>

        <Box
          component="nav"
          aria-label="Gestión de inventario"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 2,
            p: 2,
            backgroundColor: '#e8f5e9',
          }}
        >
          <Button
            component={NavLink}
            to="/agregar-articulo"
            variant="outlined"
            color="success"
            sx={{
              '&.active': {
                backgroundColor: '#c8e6c9',
              },
            }}
          >
            Agregar artículo
          </Button>

          <Button
            component={NavLink}
            to="/inventario"
            variant="outlined"
            color="success"
            sx={{
              '&.active': {
                backgroundColor: '#c8e6c9',
              },
            }}
          >
            Inventario
          </Button>
        </Box>

        <Routes>
          <Route path="/" element={<Inicio />} />

          <Route path="/quienes-somos" element={<QuienesSomos />} />

          <Route path="/contacto" element={<Contacto />} />

          <Route
            path="/preguntas-frecuentes"
            element={<PreguntasFrecuentes />}
          />

          <Route
            path="/agregar-articulo"
            element={<AgregarArticulo />}
          />

          <Route path="/inventario" element={<Inventario />} />

          <Route
            path="*"
            element={
              <main className="contenedor">
                <h1>Página no encontrada</h1>
                <p>Usa el menú para volver al sitio.</p>
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