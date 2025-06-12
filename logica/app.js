let counter = 0;
const username = prompt("Hola, ingresa tu nombre de usuario: ");
const age = prompt ("Ahora ingresa tu edad: ");
const favoriteMovies = [];
alert("A continuación te vamos a pedir tus 5 peliculas favoritas");
for (let i = 1; i <= 5; i++){
    //los strings dentro de ``se conocen como string literal,concatenar variables y texto de una forma más sencilla y elgible
    favoriteMovies.push(prompt(`Ingresa la pelicula numero ${i}: `));
    //equivalente a ingresa la pelicula número
}
console.log(`Hola soy ${username} tengo ${age} años y mis peliculas favoritas son: `);

while(counter < favoriteMovies.length){
    console.log(`Mi pelicula favorita ${counter+1} es: ${favoriteMovies [counter]}`);
    counter++; //es el que incrementara 1 a cada vuelta hasta llegar al cinco 
    //comprueba 
//mientras ( contador < longitud arreglo)
//0<5 = verdadero
//1<5 = verdadero
//2<5 = verdadero
//3<5 = verdadero
//4<5 = verdadero
//5<5 = falso  por eso se usa el counter ++
   
}