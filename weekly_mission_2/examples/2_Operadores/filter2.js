var numbers = [1,2,3,4,5,6,7,8,9,1,11,24,35,584];

function check(number){
    if ((number%2)==0 )
        console.log("El numero " + number +" es par")
}

var filtrados = numbers.filter(check);
