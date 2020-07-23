let frase = "anita lava la tina";

for (let i = 0; i < frase.length; i++) {
  console.log(`${i} => ${frase[i]}`);
}

console.log("----------------");

/**
 * Función que retorna la cantidad de palabras que tiene
 * una cadena de texto
 * @param {*} cadena
 */
const contadorDePalabras = (cadena) => {
  let contadorPalabras = 0;
  let cadenaArreglada = cadena.trim();

  if (cadenaArreglada === "") {
    return 0;
  }

  for (let i = 0; i < cadenaArreglada.length; i++) {
    if (cadenaArreglada[i] === " ") {
      contadorPalabras++;
    }
  }
  return contadorPalabras + 1;
};

let resultado = contadorDePalabras("los del grupo 2 son los engreidos");
console.log(`Palabras: ${resultado}`);

// 2
/**
 * Funcion que recibe una cadena de texto , le quita los espacios
 * en blanco
 * una nueva  capitalflokloricadelmundo
 * retorno Punocapitalfolkloricadelmundo
 * @param{*} cadena
 *
 */
const quitarEspacios = (cadena) => {
  let cadenaNueva = "";
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] !== " ") {
      cadenaNueva = cadenaNueva + cadena[i];
    }
  }
  return cadenaNueva;

};
let respuesta = quitarEspacios("anita lava la tina")
console.log(respuesta);
//-------------------
//3
/**
 * Funcion que retorna true o false en caso que una cadena sea un palindromo
 * ejem: Anita lava la tina (es palindormo)
 * ejem: oso ( es palindromo)
 * @param {*}
 */
const esPalindromo = (cadena) => {
 let cadenaUnida = cadena.toLowerCase();
 cadenaUnida = quitarEspacios(cadenaUnida);

 let cadenaReves = " ";
 for (let i = cadenaUnida.length - 1; i >= 0; i--) {
   cadenaReves = cadenaReves+cadenaUnida[i];
   
 }
 if (cadenaReves === cadenaUnida){
  return true;
}
 return false;
 };
 let rptaPalindromo = esPalindromo ("oso");
console.log(rptaPalindromo);
  


