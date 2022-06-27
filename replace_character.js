// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
function myFunction(a, b) {
    // if string includes %, then replace it with ''
    let newA = a.includes('%') ? a.replace('%', '') : a;
    let newB = b.includes('%') ? b.replace('%', '') : b;
    // capitalising string + removing that string's first letter
    // because of capitalise and adding second modified string in reverse
    return newA.charAt(0).toUpperCase() + newA.slice(1) + newB.split('').reverse().join('');
}

console.log(myFunction('down', 'nw%ot'));