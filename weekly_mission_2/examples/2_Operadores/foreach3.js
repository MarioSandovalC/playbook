//Inicializar variables
function counter(){
    this.sum = 0;
    this.count =0;
}

//Recorrido de los elementos del arreglo
counter.prototype.add = function(array) {
    array.forEach(function(entry){
        //Suma de cada elemento del arreglo almacenando cada resultado en entry
        this.sum +=entry;
        //Contabilizacion de los elementos del arreglo
        ++this.count;
    }, this);
};
//intanciar funcione counter
var obj = new counter();

//agregar elementos al arreglo
obj.add([2, 5, 9]);

//Cuenta el numero de elementos que existen en el arreglo
obj.count;
console.log(obj.count);

//Suma cada uno de los elementos del arreglo
obj.sum;
console.log(obj.sum);