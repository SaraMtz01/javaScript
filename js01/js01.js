/* let x=1;
console.log(x);

let marcaAutomovil = "Volkswagen";

let miEdad = 22;

let sum;
let num1 = 38;
let num2 = 14;
sum = num1 + num2;
console.log(sum);

/* Esta sentencia se recomienda cuando hay una lista amplia de variables por declarar */
/* let art1 = "shampoo", art2 = "toallas sanitarias", art3 = "cloro";
 */ 


/* clase con lili

Datos:

a) Primitivos: no tienen atributos ni metodos, son inmutables
- str
- number
- boolean
- null
- undefinded
- bigint
- symbol

b) 
- object
- array
_________________________________________________________________________

1. Strings

- representan datos en forma de text
- entre comillas "" o '' 
- pueden contener numeros del 0 al  9
*/
let miNombre="sara";
let miNombre2= 'Sara';
let concatenar= miNombre+ miNombre2;
console.log(concatenar);
/* string template: forma flexible de trabajar con cadenas de texto */
let numeroDias = "27"
let mensaje=`Faltan ${numeroDias} días para navidad
`
console.log(mensaje)

/* 2. Number
representa info de tipo numerico con el que se hacen operaciones matemáticas
decimales o enteros
positivos o negativos
NaN: not a number (también es de tipo number)
 */

let añoNacimiento = 2001;
let añoActual=2024;
console.log(`Sara tiene ${añoActual-añoNacimiento} años`);
console.log(100/"apple");
console.log(100/"2");
console.log("10"/"5") /* js convierte el tipo de dato para poder hacer la operación */
const maxNumber = Math.pow(10,1000);
if (maxNumber===Infinity){
    console.log("en efecto es infinity")
}

/* 3. Bigint
cantidades numéricas muy grandes */
let bigExample = 980980808543535n;

/* 4. Boolean
Para evaluar condiciones: si/no, encendido/apagado, true/false*/

let namePerson= "Moi", hasBici= true; isItRaining= false; typeAnimalTibio= "cat"; 
if (typeAnimalTibio=="cat"){
    animalTibio=true;
}
console.log(`resultado de si tibio es un gato: ${animalTibio}`)

/* 5. Undefined y Null 
- Undefined: indica que una variables no está definida, Cuando se declara una varible, pero no se le asigna valor*/
let exampleUndefined;
console.log(exampleUndefined);

/*- Null: se utiliza para representar vacío*/
let curpExample = null;
console.log(curpExample);

/* Type of  */
console.log( exampleUndefined);
console.log(animalTibio);
console.log(concatenar);










 

