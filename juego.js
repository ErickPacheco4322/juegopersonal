let palabra1, opcion,palabra2, numeroPalabras = 0;

do{
    numeroPalabras = prompt("Ingresa el maximo de palabras:");

palabra1 = prompt("Ingresa tu palabra inicial:");

for( let i= 0; i< numeroPalabras; i++){
    
    palabra2 = prompt("Ingresa tu siguiente palabra:");


    if(palabra1[0] == palabra2[0] ){
 palabra1 = palabra2;

 console.log(palabra1);
 if(i == numeroPalabras){
     console.log("Has ganado")
 }

}
}if(palabra1[0]!=palabra2[0]){
opcion = prompt("Has perdido, ¿deseas jugar de nuevo?\n 1.Si\n2.No");
}
}while(opcion == 1);