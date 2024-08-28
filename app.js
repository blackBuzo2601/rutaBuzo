var numero=0;
var numeroaleatorio=0;

const abecedario="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const matriz = [
    [-3,-3,2,-3,3,-2,-2,1,2,0,2,0,1],
    [2,3,"I",-1,-1,3,2,0,-3,-3,2,2,1],
    [1,-3,-3,2,3,1,3,3,2,1,-2,-2,3],
    [0,0,3,0,3,-3,-2,-3,0,2,2,1,1],
    [4,-1,-1,-3,3,3,0,-3,1,-2,2,0,1],
    [2,-1,-1,-3,3,3,0,-3,1,-2,2,0,1],
    [3,-1,-1,-3,3,3,0,-3,1,-2,2,0,1],
    [2,-1,-1,-3,3,3,0,-3,1,-2,2,0,1],
    [1,-1,-1,-3,3,3,0,-3,1,-2,2,0,1],
    [2,-1,-1,-3,3,3,0,-3,1,-2,2,0,1],
    [5,-1,-1,-3,3,3,0,-3,1,-2,2,0,1],
    [7,-1,-1,-3,3,3,0,-3,1,-2,2,0,1],
    [5,-1,-1,-3,3,3,0,-3,1,-2,2,0,1],
    [1,-1,-1,-3,3,3,0,-3,1,-2,2,0,1],
    [4,-1,-1,-3,3,3,0,-3,1,-2,2,0,1],
  ];
let cantidadFilas=matriz.length;

function detectarColumna(j){
    for(let i=0;i<abecedario.length;i++){ //iterará por cada una de las letras (porque puede crecer el array)
      if(matriz[j][i]==undefined){
        break;
      }
      console.log("El valor: "+matriz[j][i]+ " está en la columna "+abecedario[i]);
    }//concluye for general
}//concluye detectarColumnaNumero()

function detectarFila(j){
  for(i=0;i<cantidadFilas;i++){
    if(matriz[i][j]==undefined){
      break;
    }
    console.log("El valor "+matriz[i][j]+ " está en la fila: "+i);
  }
}//concluye detectarFila();
function combinacion(){
  detectarColumna(j);
  detectarFila(j);
}

j=0;

for(let l=0;l<15;l++){
  combinacion();
  j++;
}
