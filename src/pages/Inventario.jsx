import { Link } from 'react-router-dom'
import {
  Alert,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { useInventario } from '../context/InventarioContext'

const formatoPrecio = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
})

function Inventario() {
  const { productos } = useInventario()

  return (
    <main className="contenedor">
      <h1>Inventario de productos</h1>

      <p>Total de artículos registrados: {productos.length}</p>

      <Button
        component={Link}
        to="/agregar-articulo"
        variant="contained"
        color="success"
        sx={{ mb: 3 }}
      >
        Agregar artículo
      </Button>

      {productos.length === 0 ? (
        <Alert severity="info">
          Todavía no hay artículos en el inventario.
        </Alert>
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="Inventario de productos">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Marca</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell align="right">Precio</TableCell>
                <TableCell align="right">Stock</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {productos.map((producto) => (
                <TableRow key={producto.id}>
                  <TableCell component="th" scope="row">
                    {producto.nombre}
                  </TableCell>
                  <TableCell>{producto.marca}</TableCell>
                  <TableCell>{producto.tipo}</TableCell>
                  <TableCell align="right">
                    {formatoPrecio.format(producto.precio)}
                  </TableCell>
                  <TableCell align="right">
                    {producto.stock} unidades
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </main>
  )
}

export default Inventario