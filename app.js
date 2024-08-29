var numero=0;
var numeroaleatorio=0;

const abecedario="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                //0123456789...

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

j=0; //valor para la posicion de las filas
let posicion=[] //Declaramos un array que almacenará la posicion como [renglon],columna]

function detectarPosicionI(){ //buscamos que esta funcion sea reutilizable desde el INICIO del algoritmo.
    for(let i=0;i<abecedario.length;i++){ //este for iterará por cada letra del abecedario

      if(matriz[j][i]=="I"){ //empieza por el renglon 0 y recorre cada columna, luego sigue al renglon 1
        //y recorre cada columna, luego sigue al renglon 2 y recorre cada columna, hasta encontrar "I"

        posicion.push(j); //guardar en posicion[]primero la fila = posicion[0]=fila
        posicion.push(i); //guardar en posicion[]despues la columna=posicion[1]=columna
        console.log("POSICION INICIAL[renglon,columna]: "+posicion);
        //para el renglon no hay pierde, pues es nomas el valor de posicion0 del array posicion[], 
        //pero para la columna, estamos hablando de letras, entonces el numero de la columna debe
        //referirse a una letra, entonces accedemos a la posicion del abecedario indicando la posicion
        //de la columna:
        console.log("La posicion Inicial está en el renglon: "+posicion[0]+" y en la columna: "+abecedario[posicion[1]]);
        break;
      }else{
        if(i==cantidadColumnas){ //esto se cumple cuando se llega a la ultima columna (Letra)
          j++; //incrementar j (que su numero indica en renglon) Pasamos al siguiente renglon
          detectarPosicionI();
        }
      }
      
    }//concluye for general
}//concluye detectarColumnaNumero()

let valores=[]; //aqui guardaremos los numeros de arriba,abajo,izquierda y derecha de la posicion.
let menorNumero=0; //variable que almacenará el numero mas pequeño de las 4 posiciones

function detectarCuatroValores(){
  //tomamos como referencia la posicion con las variables a(renglon) y b(columna) para acceder
  //a la matriz y detectar los valores cercanos de la posición.
  valores.push(matriz[arriba][b]); //valores[0]
  valores.push(matriz[abajo][b]);  //valores[1]
  valores.push(matriz[a][izquierda]);//valores[2]
  valores.push(matriz[a][derecha]); //valores[3]
  
  //usamos el objeto Math y usamos el método min para devolver el numero mas pequeño. 
  menorNumero=Math.min(valores[0],valores[1],valores[2],valores[3]);
  //console.log("El valor más pequeño de las cuatro posiciones es: "+menorNumero);
  console.log("De los cuatro valores, el menor numero es: "+menorNumero);
}//concluye funcion detectarCuatroValores


detectarPosicionI();
let a=posicion[0]; //variable a, almacenará la posicion del renglon
let b=posicion[1]; //variable b, almacenará la posicion de la columna
//posicion[renglon][columna]

//Formulitas para desplazarnos en base a la posicion de renglon y columna
let arriba=a-1;
let abajo=a+1;
let izquierda=b-1;
let derecha=b+1;

detectarCuatroValores();


/*IDEAS GENERALES DE COMO RESOLVERLO

 
Activaremos la bandera de hacia donde nos moveremos, para que en el siguiente 
movimiento, ignoremos dicha direccion (pues no queremos regresarnos, sino buscar un camino
  diferente.)

*/