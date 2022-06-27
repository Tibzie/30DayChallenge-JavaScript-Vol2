// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
function myFunction(str) {
    let word = '';
    for(let i = 0; i < str.length; i++) {
        word += String.fromCharCode(str[i].charCodeAt(0) + 1);
    }
    return word;
    
}

console.log(myFunction('bgddrd'));