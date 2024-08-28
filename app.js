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
let posicion=[]
function detectarColumna(){
    for(let i=0;i<abecedario.length;i++){ //iterará por cada una de las letras (porque puede crecer el array)
      if(matriz[j][i]=="I"){
        console.log("El valor Inicial esta en la columna: "+abecedario[i]);
        posicion.push(j);
        posicion.push(i);
        console.log("imprimiendo posicion[renglon,columna]: "+posicion);
        break;
      }
      if(i==cantidadColumnas){ //esto se cumple cuando se llega a la ultima columna.
        j++; //pasar a la siguiente fila
        detectarColumna();
      }
    }//concluye for general
}//concluye detectarColumnaNumero()


detectarColumna();
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