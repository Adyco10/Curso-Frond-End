//funciones 
//1.funciu9nes q no retornan valor ni reciben parametros
//declarando funcion
function imprimirFecha(){
let fecha = new Date();
console.log(fecha);

}




//2. Funciones que retornan valor y no reciben parametreos 
function retornarFecha() {
    let fecha = new Date();
    console.log(fecha);
    return fecha;

    
}
//3. Funciones que reciben  parametros y retornan valor
/**
 *Funcion que recibe dos numeros y calcula el binomio cuadrado perfecto de ambos 
 * @param {Number} a primer numero para el binomio 
 * @param {Number} b  segundo numero
 * @return {number} el resultrado del binomio 
 */
function RetornarBinomio(a,b) {
let rpta = a*a + (2*a*b)+( b*b);
return rpta;
    
}
//4. Funciones que no retornan valor y que reciben parametrosfun
function imprimirPares(numeros){
for (let i = 0; i< numeros.length; i++) {
  if (numeros[i]%2 === 0) {
console.log(numeros[i]);
    
  }
    }

}

//llamando o invocando aun funcion 
imprimirFecha();
let nuevafecha = retornarFecha();
console.log(nuevafecha);
//invocando a la funcion 3
let resultadoBinomio = RetornarBinomio(8,5);
console.log(resultadoBinomio);
//invocndo a la funcion 4

let arreglo= [4,28,1,0,5,63,98];
imprimirPares(arreglo);