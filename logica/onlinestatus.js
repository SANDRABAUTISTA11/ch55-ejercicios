/*Online status
 
Display online status for a list of users.
 
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.*/

/*let user1 = "mocking99";
let user2 = "J0eyPunch";
let user3 = "glassedFer";
console.log(`${user1}, ${user2}, ${user3}`)*/
//usando un array

/*function onlineStatus(users){
    let count = users.length;//me muestra cuantos usuarios hay
    if (count === 0){
        return "nobody online";//si no hay nadie conectado
    }
    else if (count=== 1){
        return`${users[0]}online`
    }
    else if (count === 2){
        return`${users[0]} and ${users[1]} online`;
    }
    else {
        return `${users[0]}, ${users[1]} and ${count -2} more online`;
    }
}
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));*/
//si dejo vacios los corchetes me da el resulatdo delif 0, si dejo un caracter me da el resultado del if 1
/*Array of Multiples
Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
1. crear dos funciones con los parametros numero base y la longitud
2.hacer el return con sort*/
/*function arrayMultiplos (numero, cantidad){
    let resultado = [];
    for (let i=1; i<=cantidad; i++){
    resultado.push(numero*i);
}
return resultado;
}
let multiplos = arrayMultiplos(2,6);
console.log(multiplos);
/*primero se estableci la funcion que fue arrayMultiplos y se le dio dos 
// valores que son(numero cantidad), luego se inicializo la variable 
// resultado vacia para que se le asigne un valor se realizo el for para 
//determinar que la variable i vale 1, mientras i sea menor o igaul que el 
valor designado en cantidad va a continuar hasta que llegue al tope del 
numero que vale cantidad, hara un push multiplicando el valro de numero 
por i osea la cantidad que ya se fijo, y nos dará el resultado , luego 
designe la bvariable multiplos que contiene los valores de la funcion arrayMultiplos
y finalmente me imprime multiplos*/

/*function ArrayMultiplos (numero, largo){
    let resultado = [];
    for(let i=1; i<=largo; i++){
        resultado.push(numero*i);
    }
    return resultado;
}
let varios = ArrayMultiplos(4,10);
console.log(varios); */

/*Positive dominance in Array
Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
1. escribir una funcion que determine si un array es dominantemente positivo
esto sucede cuando la mayoria de los elementos son positivos y si es asi debe decir positivo si no es asi negativo*/
function nDominante(numeros){ //el nuombre de la función es nDominante el valor lo guarda numeros y lo declaro hasta abajo 
    let positivos = 0;// es para iniciar mi contador
    for (let i = 0; i < numeros.length; i++){//comienzo mi for declaro la variable i con valor de cero comeinzo a recorrer mi array numeros hasta que llego al final de el.
        if (numeros [i] > 0){// si ya que recorri el array, veo que numeros que comienza en el primero numero de mi array es mayor a 0 eso quiere decir que es positivo 
            positivos++;
        }
    }
    if (positivos > numeros.length /2){//si mis numeros positivos son mayoria en mi lista de array entonces toda esa cantidad de numeros la dividire entre dos para ver si los positivos son mayoria si en efecto son mayoria  imprimire true
        return"TRUE";

    }else{
        return "FALSE";// si detecto que son minoria imprimire false
    } 
    
          
}
console.log(nDominante ([-1, -3, -5, 4, 6767])); // aqui imprimire si los valores que estan dentro de mi fncion son en mayoria positvos o negativos 
console.log(nDominante ([ 1, 2, 3, -1, -2]));// aqui imprimire si los valores que estan dentro de mi fncion son en mayoria positvos o negativos 

 /*User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.*/
/*let counter = 0 //inicio mi contador en cero que parara cuando llegue a 2 porque solo preguntare de dos peliculas
const username = prompt("Dime tu nombre");// declaro mi constante que no cambiara como username
const age = prompt("Qué edad tienes?");// declaro mi constante que no cambiara como age
const movies = [] // declaro mi constante que no cambiara como movies la cual dejo vacia porque el usuario le dará valor agregando los nombres de sus peliculas
alert ("Dime tus 2 peliculas favoritas");// hago la alerta que pedira alusuario la inf
for (let i = 0; i == 2 ; i++);// hago mi for que me permitira preguntar hasta dos veces y se parara al llegar a 2
    movies.push(prompt("Cual es tu primer pelicula favorita?"))// pregunto con push para que el valor que me de el usuario se ponga en forma de lista una tras otra
    movies.push(prompt("Cuál es tu segunda pelicula favorita?"));
console.log(`Hola ${username}, de ${age} años, ${movies} son tus peliculas favoritas`);*/
/*Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers*/
//1. escribir una constante con prompt que me pregunte 10 numeros
//2. hacer el for que me permita pregunatr hasta 10 veces
//3. hacer la salida que me muestre el numero mas grande de todos esos numeros dentro del for poner un if que pase por todos y  cada uno de esos numeros evaluando cual es el mayor ya que lo encunetre que lo imprima o retunr

/*const numNumeros = []; // declaro mi constante numNumeros vacia porque el valor lo metera el usuario
 alert ("Te voy a pedir diez números"); // hago mialaerta para avisar que pedire datos
 for (let i = 0; i < 10; i++ ){// abro mi for para determinar que pedire dame tus numeros hasta diez veces
    let numero = prompt("Dame tus numeros");
    numero = Number (numero);//convierto el valor que inhresa el usuario en numeros 
    numNumeros.push(numero);}// con push guardare un numero tras otro
    let mayor = numNumeros[0];// delcaro mi variable mayor que seleccionara el mayor de todos los numeroo que se guarde en esa constante 
    for (let i = 1; i < numNumeros.length; i++ ){//abro mi for para que pase a lo largo de todos los numeros que me de el usuario 
        if (numNumeros [i] > mayor){// a lolargo del for analizare cual es el valor mas grande qu eme dio el usuario 
            mayor = numNumeros [i];// entonces dare el titulo de mayor al numero mas grande de mi array    
    }
 } alert("el numero mas alto es" + mayor);// imprimire el valor del numeor mas grande de mi array
 //if (numNumeros [i] < 10)   
 /*Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.*/
//1. puedo declarar una variable que se llame segundos y ahi meto le prompt  que le pido al usuario que me de la cantdad de segundos 1.2 convertir el numeor que me de el usario en numero porque lo recibo en texto 1.3 declaro otra variable que se llama mensaje y con prompt le pregunte al usuario que emnsaje quiere que le muetre2.puedo usar un set ime out su estructura es esta no hay que meter cadenas de texto ni strings unicamenet numeros para dalr valor y exactitud a los segunfos  debo poner mi variable segundos porque es el valor qu eme dará el usuario y multiplicarlopor mil paraq eu en efecto aparezca el mensaje en ese tiempo
// setTimeout(() => {
  //console.log("aqui pongo el texto que diga cuantos segundos pasaron.");
//}, 1000);
/*var segundos = Number(prompt("Dime cuantos segundos quieres que pasen para que suene la alarma"));//declaro mi variable segundos odnde recibire el valor de los segundos que esperare para que suene mi alrmam esta el numberporque el texto que recibo lo convierto a numero
var mensaje = prompt("Qué mensaje quiere que te muestre cuando se cumplan los segundos");// aqui recibo el mesjae que el usuario quiere que aparezca en la alarma
setTimeout(() => {// tiempo fuera 
console.log(`hola te dejo tu mensaje que es; ${mensaje}.`);// aqui me aparece el mensaje que el usuariome dio 
}, segundos * 1000);// aqui multplico el numero que me io el usuario por mil para transformalo en segundos*/
/*Palindrome = es una palabra que se lee igual de derecha a izquiera
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.*/
/* 1. hacer una function que se llame wordPalindrome que me guarde el valor de la palabra y un prompt qu eme pregunte lapalabra que va a evaluar 1.2 esa oracion la teng que convertir en un array hag una variable que se llame en reversa y que valga el valor de oracion con split que sirve para devolverme el array. la estructura segun web docs para hacer un palindrme es esta
Dar la vuelta a una cadena usando split()
var str = "asdfghjkl";
var strReverse = str.split("").reverse().join(""); // 'lkjhgfdsa'
split() retorna un array en el cual reverse() y join() pueden ser aplicados*/
var wordPalindrome = prompt("dime una palabra"); // declaro la variable wordPalindrome y uso prompt pars olicitar el valor qu etemndra esa variable
var wordPalindromeReverse = wordPalindrome.split("").reverse().join("");// en la variable reverse doy la vuelta aña variable wordpalindrome con split la convierto en un array con reverse la volteo y con join aplico el reverse
if(wordPalindrome===wordPalindromeReverse){// si el valor que me da el usuario se lle igual al reves emtonces me imprime que si es palindrome 
    console.log("si es palindrome");
}else(console.log("no es palindrome"));// y si no me dice que no lo es
/*Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
1. declaro una variable con prompt para que me pregunte un numero
2.abro un if para que me compare si el numero que me dio el usuario es mayyor o igual a 1 
3.si lo es que me imprima el numero que me dio el usuario
4.hago la funcion factorial n 
5.declaro el caso si el numero factorial es igual a 1 me imprime 1
6.si no, me imprime el valor del numero queme dio el usuario  por el mismo numero pero reduciendo a 1
1. declaro una fundcion lamada n 
2.hago un for donde que me llame a n hasta que sea igual a cero*/
let numeroN = Number(prompt("Dame un numero"));
if(numeroN >= 1 ){
    console.log(factorialN(numeroN));
    function  factorialN (n){
        if(n === 1){
            return 1
            
        }else{
            return n * factorialN(n - 1)
        }

    }
}


















 






