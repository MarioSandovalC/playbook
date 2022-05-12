 var toConvert =[ 
     {id:1, value: 10},
     {id:1, value:20},
     {id:3, value:30}
 ];

 var converted = toConvert.map(function(obj){
     var rObj = {};
     rObj[obj.id] = obj.value;
     return rObj;
 }) 
 
console.log("Arreglo para convertir: ");
console.log(toConvert);
console.log("Areglo convertido");
console.log(converted);