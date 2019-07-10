// crear los arreglos
let corredores=[1,2,3,4,5,6,7,8,9,10];
//
let carreraUno=[3,2.4,3,4.0,5.0,3,5,23,45,32];
let carreraDos=[10,2,30,4,58,5.0,3,5,23,45];
let carreraTres=[17,27,3,48,5,5.0,3,5,23,45];
let carreraCuatro=[1,28,38,4,5,5.0,3,5,23,45];
let carreraCinco=[16,2,36,46,5,5.0,3,5,23,45];

//Solución
//let promedio=[carreraUno[0],carreraDos[0],carreraTres[0],carreraCuatro[0],carreraCinco[0]];
//let a=PromedioDeCorredor(promedio,carreraUno,carreraDos,carreraTres,carreraCuatro,carreraCinco);
//crear funcion
//function PromedioDeCorredor(promedio,carreraUno,carreraDos,carreraTres,carreraCuatro,carreraCinco){
let nombreCorredores = [" "," "," "," "," "," "," "," "," "," "];
//alert("nombre" + nombreCorredores)
nombreCorredores[0] = prompt("Nombre del corredor 1") 


let prom=[0,0,0,0,0,0,0,0,0,0];
   for(i=0; i < 10; i++){
       
    prom[i]=(carreraUno[i]+carreraDos[i]+carreraTres[i]+carreraCuatro[i]+carreraCinco[i])/5; 
    console.log("prueba " + i);
   }
   //return prom1;
   
//}
console.log(prom);