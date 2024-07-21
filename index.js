// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}


function destructivelyPrependCat(name) {
    // Add cat to the beginning of the array
    cats.unshift(name); 
}
function destructivelyRemoveLastCat(){
    //we use pop() method to remove item
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    //spread operator
    return [...cats, name];
}

function prependCat(name){
    return [name, ...cats];
}
function removeLastCat(){
    return cats.slice(0, -1);
}

function removeFirstCat(){
    return cats.slice(1);
}

module.exports = {
    cats,
    destructivelyAppendCat,
    destructivePrependCat,
    destructivelyRemoveFirstCat,
    destructivelyRemoveLastCat,
    appendCat,
    prependCat,
    removeLastCat,
    removeFirstCat
};
