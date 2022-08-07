// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function myFunction(arr){
    return arr.reduce((a, acc) => {
        return (a + acc)
    }, 0) / arr.length;
}

console.log(myFunction([-50,0,50,200]));
