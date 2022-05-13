var map = Array.prototype.map;
var valores = map.call('Hello World', function(char){ 
    return char.charCodeAt(0);});

console.log(valores)