var numero=0;
var numeroaleatorio=0;

const abecedario="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const matriz =[
[-3,-3,2,-3,3,-2,-2,1,2,0,2,0,1],
[2,3,'I',-1,-1,3,2,0,-3,-3,2,2,1],
[1,-3,-3,2,3,1,3,3,2,1,-2,-2,3],
[0,0,3,0,3,-3,-2,-3,0,2,2,1,1],
[2,-1,-1,-3,3,3,0,-3,1,-2,2,0,1],
[0,3,-1,1,-1,-2,2,-2,2,-1,-2,-3,0],
[0,3,2,0,1,1,2,3,-1,-3,0,0,-2],
[3,3,-3,-2,3,-3,-1,-3,3,-2,2,-2,-1],
[-2,-2,1,0,-1,0,3,0,0,-2,2,-3,-1],
[-3,3,0,-1,-3,1,2,-3,2,-3,0,2,-2],
[-3,-3,-3,3,-2,0,-2,-3,1,0,1,-1,-2],
[-1,0,1,2,1,0,'F',0,-3,3,3,-2,-1],
[1,-3,1,0,1,2,3,1,-2,3,3,0,3]
]
let cantidadFilas=matriz.length;
let cantidadColumnas=matriz[0].length;


j=0;
let posicion=[] //almacenara la posisicion mediante renglon,columna.
function detectarPosicionI(){
    for(let i=0;i<abecedario.length;i++){ //iterará por cada una de las letras (porque puede crecer el array)
      if(matriz[j][i]=="I"){
        posicion.push(j);
        posicion.push(i);
        console.log("imprimiendo posicion[renglon,columna]: "+posicion);
        break;
      }
      if(i==cantidadColumnas){ //esto se cumple cuando se llega a la ultima columna.
        j++; //pasar a la siguiente fila
        detectarPosicionI();
      }
    }//concluye for general
}//concluye detectarColumnaNumero()

detectarPosicionI();

let a=posicion[0]; //a almacenará la posicion del renglon
let b=posicion[1]; //b almacenará la posicion de la column
//posicion[renglon][columna]

//Formulitas para desplazarnos en base a la posicion de renglon y columna
let arriba=a-1;
let abajo=a+1;
let izquierda=b-1;
let derecha=b+1;

let valores=[]; //aqui guardaremos los numeros de del numero arriba,abajo,izquierda y derecha de la posicion.
let menorNumero=0; //variable que almacenará el numero mas pequeño de las 4 posiciones
let valoresBoolean=[true,true,true,true];

function guardarCuatroValores(){

  valores.push(matriz[arriba][b]);
  valores.push(matriz[abajo][b]);
  valores.push(matriz[a][izquierda]);
  valores.push(matriz[a][derecha]);

  
  menorNumero=Math.min(valores[0],valores[1],valores[2],valores[3]);
  console.log("El menor numero es: "+menorNumero);

  for(i=0;i<valores.length;i++){
    if(valores[i]==menorNumero){
      valoresBoolean[i]=false;
      console.log("imprimiendo valoresBoolean despues de identificar numero menor: "+valoresBoolean);
    }
  }

  //guardar el indice, para en el otro array, activar bandera en el mismo indice.
}

guardarCuatroValores();

/*IDEAS GENERALES DE COMO RESOLVERLO
-Lograr algoritmo que identifique tanto la columna, como la fila en la que esta un elemento.
-Con ayuda del indicador de filas y columnas, una vez identificada la fila y columna del
inicio, hay que diseñar un pequeño algoritmo para las posiciones de arriba, abajo, izquierda, derecha:
ARRIBA=[-1][0]
ABAJO=[+1][0]
IZQUIERDA=[0][-1]
DERECHA=[+1][0]
-Con ayuda del algoritmo anterior, el cual es para desplazarnos, almacenaremos en un array
el valor de las cuatro posiciones [0,1,2,3], y luego ocupamos un algoritmo para determinar
cual de estos 4 numeros, es el mas pequeño (y otra funcion para el mas grande). POr medio
de banderas, activaremos la bandera de hacia donde nos moveremos, para que en el siguiente 
movimiento, ignoremos dicha direccion (pues no queremos regresarnos, sino buscar un camino
  diferente.)

*/