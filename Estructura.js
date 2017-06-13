// Vamos a usar estos tests para probar si nuestro código funciona bien.

var assert = require('assert');

// # Arreglos - Estadísticas

var array = [15, 47, 14, 42, 31,
81, 4, 14, 77, 82,
25, 13, 18, 14, 33,
10, 64, 43, 41, 5,
59, 31, 15, 80, 26,
66, 50, 35, 77, 46,
98, 26, 42, 8, 76,
60, 81, 78, 45, 86,
69, 37, 75, 76, 20,
32, 78, 4, 55, 8,
89, 62, 50, 13, 74,
94, 86, 51, 36, 42,
87, 17, 42, 25, 35,
90, 57, 77, 60, 29,
14, 60, 57, 81, 26,
46, 99, 47, 65, 61,
63, 15, 72, 38, 71,
67, 29, 72, 25, 33,
70, 63, 23, 33, 84,
91, 26, 31, 59, 1];

function min(array) {
  var minimo = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i]<minimo) {
        minimo = array[i]
      }
    }
  return minimo
}

var minValue = min(array);
console.log(minValue);
assert.equal(minValue, 1, 'Minimo no coincide');

function max(array) {
  var maximo = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i]>maximo) {
        maximo = array[i]
      }
    }
  return maximo
}

var maxValue = max(array);
console.log(maxValue);
assert.equal(maxValue, 99, 'Maximo no coincide');

function total(array){
  var resultado=0;
  for (var i = 0; i < array.length; i++) {
    resultado+=array[i]
  }
  return resultado
}

var totalValue = total(array);
console.log(totalValue);
assert.equal(totalValue, 4850, 'Total no coincide');

function promedio(array){
  var suma=0;
  var prom
  for (var i = 0; i < array.length; i++) {
    suma+=array[i]
  }
  var resultado = (suma/array.length)
  return resultado
}

// Promedio
var avgValue = promedio(array);
console.log(avgValue);
assert.equal(avgValue, 48.50, 'Avg no coincide');

function varianza(array){
  var prom = promedio(array);
  var suma=0;
  var x = 0;
  for (var i = 0; i < array.length; i++) {
    x = Math.pow(array[i]-prom,2);
    suma+=x
  }
  var resultado = Math.pow(suma/(array.length),0.5)
  console.log(resultado);
  return resultado
}

//Desviacion Standart
var stdValue = varianza(array);
assert.ok((stdValue - 26.392233706149238) < 0.1, 'Std Deviation no coincide');

function desviacion(array){
  var prom = promedio(array);
  var suma=0;
  var x = 0;
  for (var i = 0; i < array.length; i++) {
    x = Math.pow(array[i]-prom,2);
    suma+=x
  }
  var resultado = suma/(array.length)
  console.log(resultado);
  return resultado
}

// Desviacion Standart
var stdValue = desviacion(array);
assert.ok((stdValue - 696.55) < 0.1, 'Variance Deviation no coincide');
