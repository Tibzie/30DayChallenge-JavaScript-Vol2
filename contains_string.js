// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
function myFunction(a, b) {
    return a.includes(b) ? b.concat(a) : a.concat(b);
}

console.log(myFunction('cheese', 'cake'));