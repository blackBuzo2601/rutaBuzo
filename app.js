var numero=0;
var numeroaleatorio=0;

const abecedario="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                //0123456789...

const matriz =[
[-3,-3,2,-3,3,-2,-2,1,2,0,2,0,1],
[2,3,4,-1,-1,3,2,0,-3,-3,2,2,1],
[1,-3,-3,2,3,1,3,3,2,1,-2,-2,3],
[0,0,3,0,3,-3,-2,-3,0,2,2,1,1],
[2,-1,-1,-3,3,3,0,-3,1,-2,2,0,1],
[0,3,-1,1,-1,-2,2,-2,2,-1,-2,-3,0],
[0,3,2,0,1,1,2,3,-1,-3,0,0,-2],
[3,3,-3,-2,3,-3,-1,-3,3,-2,2,-2,-1],
[-2,-2,1,0,-1,0,3,0,0,-2,2,-3,-1],
[-3,3,0,-1,-3,1,2,-3,2,-3,0,2,-2],
[4,-3,4,3,-2,0,-2,-3,1,0,1,-1,-2],
[-1,0,1,2,1,0,'F',0,-3,3,3,-2,5],
[3,-3,4,0,1,2,3,1,-2,3,3,0,3]
]
let cantidadFilas=matriz.length; //13
let cantidadFilasMenos1=cantidadFilas-1; //tuve problemas de notANumber, por eso lo cree.

let cantidadColumnas=matriz[0].length; //13
let cantidadColumnasMenos1=cantidadColumnas-1; //mismo caso que cantidadFilasMenos1
let a=0; //almacenará el renglon
let b=0; //almacenará la columna
j=0; //valor para la posicion de las filas
let posicion=[] //Declaramos un array que almacenará la posicion como [renglon],columna]

let valores=[]; //aqui guardaremos los numeros de arriba,abajo,izquierda y derecha de la posicion.
let menorNumero=0; //variable que almacenará el numero mas pequeño de las 4 posiciones

//variables que juegan un papel importante al momento de calcular alrededor de la posicion.
let arriba=0
let abajo=0
let izquierda=0
let derecha=0

//En las siguientes variables guardamos las coordenadas de los valores de alrededor de la posicion.
let coordenadaArriba=[]; //De igual forma solo tendran dos posiciones, haciendo referencia al renglon y columnaa
let coordenadaAbajo=[];
let coordenadaIzquierda=[];
let coordenadaDerecha=[];

//░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

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
        a=posicion[0]; //variable a, almacenará la posicion del renglon
        b=posicion[1]; //variable b, almacenará la posicion de la columna
        //posicion[renglon][columna]  
        break;
      }else{
        if(i==cantidadColumnas){ //esto se cumple cuando se llega a la ultima columna (Letra)
          j++; //incrementar j (que su numero indica en renglon) Pasamos al siguiente renglon
          detectarPosicionI();
        }
      }
      
    }//concluye for general
}//concluye detectarColumnaNumero()

function detectarCuatroValores(){
  valores=[]; //reiniciar array cada que se llame a la función.
  //formulitas en base a la posicion del renglon (a)  y columna (b) para desplazarnos por el arreglo.
  arriba=a-1;
  abajo=a+1;
  izquierda=b-1;
  derecha=b+1;
  
  //Reiniciar coordenadas.
  coordenadaArriba=[];
  coordenadaAbajo=[];
  coordenadaIzquierda=[];
  coordenadaDerecha=[];

  //tomamos como referencia la posicion con las variables a(renglon) y b(columna) para acceder
  //a la matriz y detectar los valores cercanos de la posición.

  if(posicion[0]==0){
    console.log("Limite alcanzado hacia arriba.")
  }else{
    valores.push(matriz[arriba][b]); //valores[0]
    coordenadaArriba[0]=a-1; //renglon
    coordenadaArriba[1]=b; //columna
    console.log("Prueba de coordenadas de arriba: "+coordenadaArriba);
  }

  if(posicion[0]==cantidadFilasMenos1){
    console.log("Limite alcanzado hacia abajo.")
  }else{
    valores.push(matriz[abajo][b]);  //valores[1]
    coordenadaAbajo[0]=a+1;
    coordenadaAbajo[1]=b;
    console.log("Prueba de coordenadas de abajo: "+coordenadaAbajo);
  }

  if(posicion[1]==0){
    console.log("Limite alcanzado hacia la izquierda")
  }else{
    valores.push(matriz[a][izquierda]);//valores[2]
    coordenadaIzquierda[0]=a;
    coordenadaIzquierda[1]=b-1;
    console.log("Prueba de coordenadas de izquierda: "+coordenadaIzquierda);
  }

  if(posicion[1]==cantidadColumnasMenos1){
    console.log("Limite alcanzado hacia la derecha");
  }else{
    valores.push(matriz[a][derecha]); //valores[3]
    coordenadaDerecha[0]=a;
    coordenadaDerecha[1]=b+1;
    console.log("Prueba de coordenadas de derecha: "+coordenadaDerecha)
  }
  
  //usamos el objeto Math y usamos el método min para devolver el numero mas pequeño.
  menorNumero=Math.min(...valores); //Operador de propagación.
  /*
  Operador de Propagación (...): Este operador "expande" 
  los elementos del arreglo, permitiendo que Math.min los reciba 
  como una lista de argumentos individuales en lugar de un solo argumento, el cual
  sería el array, lo que daría error de nAn. (Not a number) */
  console.log("Valores encontrados alrededor de la posicion: "+valores);
  console.log("El valor más pequeño de las cuatro posiciones es: "+menorNumero);

}//concluye funcion detectarCuatroValores

function moverPosicionSiguiente(){
  console.log("prueba de la funcion: "+valores.indexOf(menorNumero));
}

detectarPosicionI();
detectarCuatroValores();
moverPosicionSiguiente();


/*IDEAS GENERALES DE COMO RESOLVERLO

 
Activaremos la bandera de hacia donde nos moveremos, para que en el siguiente 
movimiento, ignoremos dicha direccion (pues no queremos regresarnos, sino buscar un camino
  diferente.)

*/