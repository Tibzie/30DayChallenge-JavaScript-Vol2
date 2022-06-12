// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
function myFunction(a)  {
    let splitA = a.toString().split('');
    return splitA.includes('.') ? false : true;
}

console.log(myFunction(3.14));
