'use strict';

function BinarioADecimal(num) {

     //Declaramos la variable para guardar el valor decimal
     let decimal = 0;
     //Recibimos el dato numero binario, lo convertimos en array y lo invertimos
     var numArr = num.split("").reverse();
 
     //Iteramos sobre el array que creamos, y realizamos formula
     for (let i = 0; i < numArr.length; i++) {
         decimal += numArr[i] * Math.pow(2, i);
     }
 
     //Retornamos la funcion con el valor decimal
     return decimal;

}

function DecimalABinario(num) {

   let binario = "";
   let number = num;

   do {
       binario = (number % 2) + binario;
       console.log(binario)
       number = Math.floor(number / 2);
   } while (number > 0);

   //binario = binario.split("").join("");
   return binario;

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
