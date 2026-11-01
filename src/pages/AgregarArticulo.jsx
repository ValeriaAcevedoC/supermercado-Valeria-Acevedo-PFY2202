import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Alert,
  Box,
  Button,
  Stack,
  TextField,
} from '@mui/material'
import { useInventario } from '../context/InventarioContext'

const formularioInicial = {
  nombre: '',
  marca: '',
  tipo: '',
  precio: '',
  stock: '',
}

function AgregarArticulo() {
  const { agregarProducto } = useInventario()
  const [formulario, setFormulario] = useState(formularioInicial)
  const [error, setError] = useState('')
  const [exito, setExito] = useState('')

  function manejarCambio(evento) {
    const { name, value } = evento.target

    setFormulario((actual) => ({
      ...actual,
      [name]: value,
    }))

    setError('')
    setExito('')
  }

  function manejarEnvio(evento) {
    evento.preventDefault()
    setError('')
    setExito('')

    const nombre = formulario.nombre.trim()
    const marca = formulario.marca.trim()
    const tipo = formulario.tipo.trim()
    const precio = Number(formulario.precio)
    const stock = Number(formulario.stock)

    if (
      !nombre ||
      !marca ||
      !tipo ||
      formulario.precio.trim() === '' ||
      formulario.stock.trim() === ''
    ) {
      setError('Completa todos los campos.')
      return
    }

    if (!Number.isSafeInteger(precio) || precio <= 0) {
      setError('El precio debe ser un número entero mayor que cero.')
      return
    }

    if (!Number.isSafeInteger(stock) || stock < 0) {
      setError('El stock debe ser un número entero igual o mayor que cero.')
      return
    }

    agregarProducto({
      nombre,
      marca,
      tipo,
      precio,
      stock,
    })

    setFormulario(formularioInicial)
    setExito(`El producto "${nombre}" fue agregado al inventario.`)
  }

  return (
    <main className="contenedor">
      <h1>Agregar artículo</h1>
      <p>Ingresa los datos del nuevo producto.</p>

      <Box
        component="form"
        onSubmit={manejarEnvio}
        noValidate
        sx={{ maxWidth: 550, mt: 3 }}
      >
        <Stack spacing={3}>
          {error && <Alert severity="error">{error}</Alert>}
          {exito && <Alert severity="success">{exito}</Alert>}

          <TextField
            label="Nombre del producto"
            name="nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
            required
            fullWidth
          />

          <TextField
            label="Marca"
            name="marca"
            value={formulario.marca}
            onChange={manejarCambio}
            required
            fullWidth
          />

          <TextField
            label="Tipo de producto"
            name="tipo"
            helperText="Por ejemplo: Abarrotes, Lácteos o Frutas."
            value={formulario.tipo}
            onChange={manejarCambio}
            required
            fullWidth
          />

          <TextField
            label="Precio en pesos chilenos"
            name="precio"
            type="number"
            value={formulario.precio}
            onChange={manejarCambio}
            slotProps={{
              htmlInput: { min: 1, step: 1 },
            }}
            required
            fullWidth
          />

          <TextField
            label="Stock"
            name="stock"
            type="number"
            value={formulario.stock}
            onChange={manejarCambio}
            slotProps={{
              htmlInput: { min: 0, step: 1 },
            }}
            required
            fullWidth
          />

          <Button type="submit" variant="contained" color="success">
            Agregar al inventario
          </Button>

          <Button component={Link} to="/inventario" color="success">
            Ver inventario
          </Button>
        </Stack>
      </Box>
    </main>
  )
}

export default AgregarArticulo