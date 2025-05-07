const ventas = [
    {
      cliente: 'Juan',
      productos: [
        { nombre: 'smartphone', cantidad: 1, precio: 350 },
        { nombre: 'laptop', cantidad: 1, precio: 800 },
      ],
    },
    {
      cliente: 'Ana',
      productos: [
        { nombre: 'smartphone', cantidad: 2, precio: 350 },
        { nombre: 'cámara', cantidad: 1, precio: 250 },
      ],
    },
    {
      cliente: 'Pedro',
      productos: [
        { nombre: 'laptop', cantidad: 1, precio: 800 },
        { nombre: 'cámara', cantidad: 2, precio: 250 },
      ],
    },
  ];
    //Debes calcular el subtotal de cada venta, el total de las ventas, 
  // extraer todos los productos vendidos y calcular la cantidad de productos vendidos 
  // por categoría 
  // (smartphones, laptops y cámaras).
  function procesarVentas(ventas) {
    let totalVentas = 0;
    let productosVendidos = [];
    let cantidadPorCategoria = {
      smartphone: 0,
      laptop: 0,
      cámara: 0
    };
  
    ventas.forEach(venta => {
      let subtotal = 0;
  
      venta.productos.forEach(producto => {
        const subtotalProducto = producto.precio * producto.cantidad;
        subtotal += subtotalProducto;
        totalVentas += subtotalProducto;
  
        productosVendidos.push({
          cliente: venta.cliente,
          ...producto
        });
  
        if (cantidadPorCategoria.hasOwnProperty(producto.nombre)) {
          cantidadPorCategoria[producto.nombre] += producto.cantidad;
        }
      });
  
      console.log(`Subtotal de la venta de ${venta.cliente}: $${subtotal}`);
    });
  
    console.log('Total de todas las ventas:', totalVentas);
    console.log('Productos vendidos:', productosVendidos);
    console.log('Cantidad de productos vendidos por categoría:', cantidadPorCategoria);
  }

  procesarVentas(ventas);