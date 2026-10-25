function PreguntasFrecuentes() {
  return (
    <main className="contenedor">
      <h1>Preguntas frecuentes</h1>
      <p>Resuelve tus dudas sobre Supermercado La Canasta.</p>

      <section>
        <h2>¿Cómo consulto los productos disponibles?</h2>
        <p>
          En la página Inicio encontrarás el inventario con el nombre,
          categoría, precio y stock de cada producto.
        </p>
      </section>

      <section>
        <h2>¿Qué significa el stock?</h2>
        <p>
          Es la cantidad de unidades disponibles de un producto.
          Si el stock es cero, el producto está agotado.
        </p>
      </section>

      <section>
        <h2>¿Puedo comprar directamente desde este sitio?</h2>
        <p>
          Este sitio permite consultar el inventario. Por el momento,
          no incluye compras ni pagos en línea.
        </p>
      </section>

      <section>
        <h2>¿Dónde encuentro la información de contacto?</h2>
        <p>
          En la página Contáctanos puedes consultar el correo,
          la dirección y los horarios de atención.
        </p>
      </section>
    </main>
  )
}

export default PreguntasFrecuentes