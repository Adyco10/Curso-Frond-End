let objTienda = {
  nombre: "Capricho", categoria: "Postres",
  descripcion: "Tienda de postres Arequipeños",
  sucursales:[{
      nombre: "Capricho Mercaderes",
      telefono: "98454555"
   },
    {nombre: "Capricho Lambramani",
    telefono: "9344555"

     },
    { nombre: "Capricho EEUU",
    telefono: "9845677"

    }]
};
console.log(`------CAPRICHO-----`);
console.log(`Nombre: ${objTienda.nombre} `);
console.log(`Nombre: ${objTienda.categoria} `);
console.log(`Nombre: ${objTienda.descripcion} `);
console.log(`Suscursales`);
for (let i = 0; i < objTienda.sucursales.length; i++) {
    console.log(`---------------`);
    console.log(`Sucursal ${i+1}`);
    console.log(`Nombre: ${objTienda.sucursales[i].nombre}`);
    console.log(`Nombre: ${objTienda.sucursales[i].telefono}`);
}