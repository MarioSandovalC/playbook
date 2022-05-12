// Map funciona como un forEach con la diferencia que este crea un segundo arreglo
// para trabajar con los datos del mismo sin modificar al original

const numbers =[2, 3, 4, 5, 6, 7, 8];

var double = numbers.map(function(x){
    return x*2;
});
console.log("Arreglo Original [" + numbers + "]");
console.log("Arreglo con los elementos multiplicados por 2 [" + double + "]");

var numbers2 = [1, 3, 5, 7, 9];
var read = numbers.map(function(num){
    return Math.sqrt(num);
});


console.log("Arreglo Original [" + numbers2 + "]");
console.log("Arreglo con los elementos elevados al cuadrado [" + read + "]");