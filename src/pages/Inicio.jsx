function Inicio() {
  const productos = [
    { id: 1, nombre: 'Arroz 1 kg', categoria: 'Abarrotes', precio: 1590, stock: 30 },
    { id: 2, nombre: 'Leche 1 litro', categoria: 'Lácteos', precio: 1190, stock: 25 },
    { id: 3, nombre: 'Manzanas 1 kg', categoria: 'Frutas', precio: 1990, stock: 18 },
    { id: 4, nombre: 'Pan de molde', categoria: 'Panadería', precio: 2290, stock: 12 },
  ]

  const formatoPrecio = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  })

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
              <th scope="col">Categoría</th>
              <th scope="col">Precio</th>
              <th scope="col">Stock</th>
            </tr>
          </thead>

          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td>{producto.categoria}</td>
                <td>{formatoPrecio.format(producto.precio)}</td>
                <td>{producto.stock} unidades</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Inicio