import { useInventario } from '../context/InventarioContext'

const formatoPrecio = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
})

function Inicio() {
  const { productos } = useInventario()

  return (
    <main className="contenedor">
      <h1>Bienvenidos a Supermercado La Canasta</h1>

      <p>Consulta nuestros productos y su disponibilidad en inventario.</p>

      <h2>Inventario de productos</h2>

      <div className="tabla-contenedor">
        <table>
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Marca</th>
              <th scope="col">Tipo</th>
              <th scope="col">Precio</th>
              <th scope="col">Stock</th>
            </tr>
          </thead>

          <tbody>
            {productos.length === 0 ? (
              <tr>
                <td colSpan={5}>
                  Todavía no hay artículos en el inventario.
                </td>
              </tr>
            ) : (
              productos.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.nombre}</td>
                  <td>{producto.marca}</td>
                  <td>{producto.tipo}</td>
                  <td>{formatoPrecio.format(producto.precio)}</td>
                  <td>{producto.stock} unidades</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Inicio