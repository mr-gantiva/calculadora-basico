
## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas:

- ¿Qué es una variable y para qué sirve?
Son espacios en memoria donde podemos guardar información dependiendo de los tipos de datos y estructuras de datos que soporte nuestro lenguaje.

- ¿Cuál es la diferencia entre declarar e inicializar una variable?
Declarar es cuando le decimos a JavaScript que vamos a crear una variable con el nombre que se indique. Mientras que inicializar es asignarle un valor a esa variable.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
- ¿Cuál operador me permite sumar o concatenar?

El operador que nos permite sumar o concatenar es +. Este operador nos permite sumar números cuando lo usamos con tipos de datos number, pero cualdo usamos Strings, lo que hace es unir (concatenar) ambos Strings.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre : string
- Apellido: string
- Nombre de usuario en Platzi: string
- Edad: number
- Correo electrónico: string
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
```
let nombre = 'Iván';
let apellido = 'Vargas';
let username = 'mr-gantiva';
let edad = 34;
let mail = 'ivaganva@gmail.com';
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

let nombre = 'Iván';
let apellido = 'Vargas';
let nombreCompleto = nombre + " " + apellido;
let dineroAhorrado = 1000;
let deudas = 100;
let dineroReal = dineroAhorrado - deudas;

console.log('Hola mi nombres es ' +  nombreCompleto + ' y mi cantidad de dinero real es ' + dineroReal  )


## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
Las funciones son un conjunto de instrucciones que realizan una tarea que realizan una tarea, en JavaScript son fundamentales para la construcción de un código. 

- ¿Cuándo me sirve usar una función en mi código?
Sirve cuando tenemos variables o bloques de código muy parecidos (con cambios que podrían ser parámetros y argumentos) que podemos encapsultar para reutilizar más de una vez en el futuro.

También nos sirve para ordenar y mejorar la legibilidad de nuestro código.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
- Las funciones reciben parámetros cuando las creamos y les enviamos argumentos cuando las ejecutamos.

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```js
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```
```js
let name;
let lastname;
let nickname;

function nombreCompleto(name, lastName){
  return name + ' ' + lastName
}

function saludo(name, lastname, nickname){
  const completeName = nombreCompleto(name, lastname);

  console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}
saludo('Tobby','Mackenzie','Principe');
```

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?
Son la forma en que ejecutamos un bloque de código u otro dependiente de alguna condición o validación

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
IF (else y else if), Switch
El condicional if (con else y else if) nos permite hacer validaciones completamente distintas (si así queremos) en cada validación o condicional. En cambio, en el switch todos los cases se comparan con la misma variable o condición que definimos en el switch.

- ¿Puedo combinar funciones y condicionales?
Si, las funciones pueden encapsular cualquier bloque de código.

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```js
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

```js
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == 'Free'){
  console.log("Solo puedes tomar cursos gratis");
}
if (tipoDeSuscripcion == 'Basic'){
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion == 'Expert'){
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion == 'ExpertDuo'){
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```

Con funcion
```js
function consultarTipoDeSuscripcion(suscripcion) {
  if (suscripcion == 'Free') {
    console.log("Solo puedes tomar cursos gratis");
    return;
  }
  if (suscripcion == 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    return;
  }
  if (suscripcion == 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    return;
  }
  if (suscripcion == 'ExpertDuo') {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    return;
  }

  console.warn('Este tipo de suscripción no existe');
}

consultarTipoDeSuscripcion('Free')
```

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

```js
const tipoSuscripciones = {
    free: 'Solo puedes tomar cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
};
function consultarTipoDeSuscripcion(suscripcion) {
  if (tipoSuscripciones[suscripcion]) {
      console.log(tipoSuscripciones[suscripcion]);
      return;
  }

  console.warn('Este tipo de suscripción no existe');
}

consultarTipoDeSuscripcion('lalala')
```

## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
La forma de ejecutar un bloque de código hasta que se cumpla cierta condición.

- ¿Qué tipos de ciclos existen en JavaScript?
While, for, do while

- ¿Qué es un ciclo infinito y por qué es un problema?
Es cuando la validación de nuestros condicionales nunca se cumple y termina colapsando (dañando) la aplicación.

- ¿Puedo mezclar ciclos y condicionales?
Si, a pesar de que los ciclos son en cierta manera condicionales, nada nos impide agregar más condicionales.

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```js
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
```
Respuesta
```js
let i = 0;
while (i<5){
  console.log("El valor de i es: " + i);
  i++;
}
```js
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```
Respuesta

let i = 10;
```js
while (i>=2){
  console.log("El valor de i es: " + i);
  i--;
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

Respuesta
```js
let respuesta;

while (respuesta != '4'){
  let pregunta = prompt(' Cuanto es 2 + 2');
  respuesta = pregunta;
}
```

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
Es una lista de elementos.

```js
const array = [1, 'java', true, false];
```

- ¿Qué es un objeto?
Es una lista de elementos solo que cada elemento tiene un nombre clave con el cual podemos buscarlo con mayor facilidad sin necesidad de realizarlo por su posición.

```js
const obj = {
    nombre : 'Fulanito',
    edad: 25,
};
```


- ¿Cuándo es mejor usar objetos o arrays?
Arrays cuando lo que se realizará en un elemento es en todos los demás, aunque esta regla se puede incumplir en ocasiones. Mientras que un objeto cuando los bombres de cada elemento son importantes para nuestro algoritmo.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Si, los arrays pueden guardar objetos, y estos pueden guardar arrays entre sus propiedades.

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```js
function printFirstElement(arr){
  console.log(arr[0]);
}

printFirstElement(['Juanita','Rigoberto'])
```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```js
function printByElement(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

printByElement(['Juanita','Rigoberto','Natilla']);
```


### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```js
const obj = {
  name: 'Fulanito',
  age: 29,
  favoriteFoods: ['Pollo frito', 'Vegetales'],
};

function printObjectByElement(obj){
  const arr = Object.values(obj);
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}
printObjectByElement(obj);
```

1. Los ciclos while primero ejecutan y después validan su condicional. Mientras que los ciclos do while primero validan su condición y luego sí ejecutan su bloque de código.

Falso

1. Tienes un condicional if dentro de una función. Si tu condicional se cumple, el resto de tu función NO se debe ejecutar. ¿Cómo lo harías?

Agregando un return; antes de que termine mi condicional.

3. Tienes el siguiente bloque de código: console.log("Juanita"). ¿Qué es "Juanita" para la función console.log?

Un argumento.

4. ¿Qué palabra reservada usarías para crear una variable que nunca pueda cambiar su valor?

const

🏆


