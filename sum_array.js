// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers
function myFunction(a){
    var sum = 0;
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}

console.log(myFunction([10,100,40]))