const buscarPorDni = (dni,callback) => {
    //conecto a BD
    //hago la cosult aDNI
    //retorno la informacion de la persona
  
    let nombreEncontrado = "-------";
setTimeout(function () {
    console.log("Buscando en la base de datos " );
   nombreEncontrado = "Jorge Perez Gomes";
   callback(nombreEncontrado);
}, 2000);

};

 buscarPorDni("409567841", (nombre) => {console.log(nombre);});
