let semaforo =true;
let notas = [];
do{
    let nota = +prompt("ingrese una nueva nota");
    if (nota ===-1){
        semaforo = false;

    }else{
        notas.push(nota);
        suma+=nota;
    
    }
    

}while( semaforo === true);

console.log(`Promedio de notas ${notas}`);