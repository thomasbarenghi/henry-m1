
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.
var juan = 25;
juan = "hola";

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); //PRIMERO
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);
```

```javascript
console.log(bar); //PRIMERO
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); //PRIMERO
```

```javascript
var instructor = "Tony";
console.log(instructor); //PRIMERO
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);
```
```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //PRIMERO SI IF ES TRUE
    console.log(pm);
}
console.log(instructor);
console.log(pm);
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //NaN
7 / 0 //Undefined
{}[0]
parseInt("09") //9
5 && 2  //2
2 && 5 //5
5 || 0 //5
0 || 5 //0
[3]+[3]-[10]
3>2>1
[] == ![]
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);//Undefined
   console.log(foo()); //2
/*A es undefined xq se hace conslog antes de declararla y la funcion termina en foo xq se realiza un return y se termina la funcion*/
   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
//se genera el return snack pero la consola queda vacia
```
//La variable global snack se declara fuera de cualquier función o bloque, por lo tanto su ámbito es global, es accesible desde cualquier parte del código. Sin embargo, cuando se declara una variable con el mismo nombre dentro de una función, se crea una variable local con el mismo nombre y esta variable local tiene prioridad sobre la variable global en su ámbito.

En el ejemplo dado, dentro de la función getFood se declara una variable local snack y esta variable no tiene ningún valor asignado, por lo tanto al llamar a la función con getFood(false) no se retorna ningun valor.//

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); /*Primero: Aurelio de la rosa. //xq el contexto de obj*/

var test = obj.prop.getFullname;

console.log(test()); //Segundo: Juan perez.// xq el contexto es global
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
/*1,4,3,2*/
/*primero 1 xq es el primero, segundo 4 xq no tiene sTout, tercero 3, xq el retardo es 0 y cuarto 2
xq tiene 1seg de reatardo*/

/*La función printing() se ejecuta de forma secuencial, por lo que el primer log será "1" y el segundo será "4".

El método setTimeout() es una función asíncrona que ejecuta una función después de un tiempo determinado (en este caso, 1000 milisegundos o 1 segundo para el primer setTimeout(), y 0 milisegundos para el segundo). Esto significa que la ejecución de la función no bloquea la ejecución del resto del código. Por lo tanto, después de que se imprimen "1" y "4", el código sigue ejecutándose y se imprime "3".

Finalmente, después de 1 segundo, se imprime "2".*/
```
