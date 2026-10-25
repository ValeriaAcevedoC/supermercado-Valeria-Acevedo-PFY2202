import { NavLink } from 'react-router-dom'

function MenuInferior() {
  return (
    <footer className="pie-pagina">
      <nav className="menu-inferior" aria-label="Navegación principal">
        <NavLink to="/" end>
          Inicio
        </NavLink>

        <NavLink to="/quienes-somos">
          Quiénes somos
        </NavLink>

        <NavLink to="/contacto">
          Contáctanos
        </NavLink>

        <NavLink to="/preguntas-frecuentes">
          Preguntas frecuentes
        </NavLink>
      </nav>

      <p>Supermercado La Canasta · Proyecto académico</p>
    </footer>
  )
}

export default MenuInferior