// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function myFunction(a){
    return a.filter(negative => {
        return negative < 0;
    })
}

console.log(myFunction([1,-2,2,-4]));