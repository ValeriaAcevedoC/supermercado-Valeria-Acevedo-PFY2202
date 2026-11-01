import { createContext, useContext, useState } from 'react'

const InventarioContext = createContext(null)

const productosIniciales = [
  {
    id: 1,
    nombre: 'Arroz 1 kg',
    marca: 'Tucapel',
    tipo: 'Abarrotes',
    precio: 1590,
    stock: 30,
  },
  {
    id: 2,
    nombre: 'Leche 1 litro',
    marca: 'Colun',
    tipo: 'Lácteos',
    precio: 1190,
    stock: 25,
  },
  {
    id: 3,
    nombre: 'Manzanas 1 kg',
    marca: 'La Canasta',
    tipo: 'Frutas',
    precio: 1990,
    stock: 18,
  },
  {
    id: 4,
    nombre: 'Pan de molde',
    marca: 'Ideal',
    tipo: 'Panadería',
    precio: 2290,
    stock: 12,
  },
]

export function InventarioProvider({ children }) {
  const [productos, setProductos] = useState(productosIniciales)

  function agregarProducto(producto) {
    const nuevoProducto = {
      ...producto,
      id: crypto.randomUUID(),
    }

    setProductos((productosActuales) => [
      ...productosActuales,
      nuevoProducto,
    ])
  }

  return (
    <InventarioContext.Provider value={{ productos, agregarProducto }}>
      {children}
    </InventarioContext.Provider>
  )
}

export function useInventario() {
  const contexto = useContext(InventarioContext)

  if (contexto === null) {
    throw new Error(
      'useInventario debe utilizarse dentro de InventarioProvider',
    )
  }

  return contexto
}