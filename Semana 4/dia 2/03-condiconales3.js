//hacer un programa que indique , ingresar la usuario 
//las 3 primeras letras de un dia de la semana y que el programa complete el dia d ela semansa o lo imprima
let ingreso =prompt(" ingrese las tres priker aletras del dia a la semana(min) (MAYUS)");
if (ingreso === "lun" || ingreso === "LUN") {
    console.log("El día es Lunes");
  } else if (ingreso === "mar" || ingreso === "MAR") {
      console.log("El día es Martes");
    } else if (ingreso === "mie" || ingreso === "MIE") {
        console.log("El día es Miércoles");
      } else if (ingreso === "jue" || ingreso === "JUE") {
          console.log("El día es Jueves");
        } else {
          if (ingreso === "vie" || ingreso === "VIE") {
            console.log("El día es Viernes");
          } else {
            if (ingreso === "sab" || ingreso === "SAB") {
              console.log("El día es Sábado");
            } else {
              if (ingreso === "dom" || ingreso === "DOM") {
                console.log("El día es Domingo");
              }
            }
          }
        }
      }
    }
  }