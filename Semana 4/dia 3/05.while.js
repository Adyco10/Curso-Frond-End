let numeros = [0, 25,-9, -8,0,0,28,7464,-958,9,-9,0];
let contador=0;
let positivo= 0;
let negativos=0;
let ceros;
while (contador < numeros.length){
    if ( numeros[contador]>0){
        //numero positivo
        positivo++;
    }else if (numeros[contador] < 0){
        //numeor negativo
negativos ++;
    }else {
        //numero 0
        ceros++;
    }
    contador+=1
}
console.log(`Positivos ${positivo}`);
console.log(`Positivos ${negativos}`);
console.log(`Positivos ${ceros}`);