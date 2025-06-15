/*Secret Society
 

Find the name of a secret society based on the first letter of each member's name.
 

Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
1.Recibimos un array que tiene nombres
1.1 estos nombres empiezan en mayus
1.2 ordenar el array en orden alfabetico 
2. inicializar una variable para guardar las iniciales
3.utilizar un ciclo para recorrer el array
4. obtener la primera letra de cada nombre utilizando la notación de corchetes
5.pegar la inicial de cada nombre para
retornar el nombre de la sociedad secreta basado en la primera letra de cada nombre
*/
/*let nombre = "sandra";
console.log(nombre[4]); con esto imprimimos cualquier letra del string*/
const secretName = function(namesArray){
    let societyName = "";
    const sortedNames = namesArray.toSorted();
    sortedNames.forEach((name) => societyName = societyName +name [0]);
    return societyName;
}
console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
console.log(secretName(['Harry', 'Ron', 'Hermione']));