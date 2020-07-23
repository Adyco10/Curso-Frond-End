//un objeto es un lementyo que abstrae caracteristicas
//o atributotos en comiun o que guardan relacion

//como se crea?
let objPersona = {
  nombre: " Juan",
  apellido: " Perez",
  edad: 28,
  peso: 72,
  casado: false,
};
//forma 1 de ACCEDEER  A LAS las carCTERISTCAS O ATRIBUTOS
console.log(objPersona.nombre, objPersona.edad);
// Forma 2 de acceder a los Atributos
console.log(objPersona["apellido"]);
console.log(objPersona["edad"]);

//Forma 1 de modificar un atributo
objPersona.casado = true;
objPersona.peso = 68;
console.log(objPersona);
// Forma 1  de crear nuevos atributos a un objeto
objPersona.platosFavoritos = ["Cebiche", "Pastel de Papa", "Rocoto Relleno"];
console.log(objPersona);

for (let i = 0; i < objPersona.platosFavoritos.length; i++) {
  console.log(objPersona.platosFavoritos[1]);
}

// --------------------------//
let productos = [
  { nombre: "TV Samsung  50 ", precio: 8000, codigo: "10101",coloresDisponibles:["Azul","Plomo","Blanco"]},
  { nombre: "TV Samsung 42", precio: 7000, codigo: "10102",coloresDisponibles:["Blanco"] },
  { nombre: "TV Samsung 29 ", precio: 5000, codigo: "10103",coloresDisponibles:["Azul","Plomo"] },
  { nombre: "TV Samsung 25 ", precio: 4000, codigo: "10104",coloresDisponibles:[] },
];
for (let i = 0; i < productos.length; i++) {
  console.log(`----Producto ${i + 1}---`);
  console.log(`Nombre ${productos[i].nombre}`);
  console.log(`Precio ${productos[i].precio}`);
  console.log(`Codigo ${productos[i].codigo}`);
  console.log(`Colores Disponbles :`);
  for (let j = 0; j < productos[i].coloresDisponibles.length; j++) {
    // console.log(`${productos[i].coloresDisponibles[j]}`); igual funciona 
     console.log(productos[i].coloresDisponibles[j]);
      
  }
}
