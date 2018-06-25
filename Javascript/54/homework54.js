let letters = ['Y','R','f','s','E'];

function ourSome (array,  callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]))
        return true;
    }
    return false;
}
function ifUpper (letter) {
    if (letter === letter.toUpperCase()){
        return true;
    }
}
function ifLower (letter) {
    if (letter === letter.toUpperCase()){
        return true;
    }
}
console.log("ourSome upper:" + ourSome(letters, ifUpper));
console.log("ourSome lower:" + ourSome(letters, ifLower));
console.log(".some upper:" + letters.some(ifUpper));
console.log(".some lower:" + letters.some(ifLower));

function onlyIf(array,test,action){
    for (let i = 0; i < array.length; i++) {
        test(array[i]);
        action();
    }
}
function print () {
    console.log("awesome!!");
}

onlyIf(letters, ifUpper, print);
onlyIf(letters, ifLower, print);

letters.filter(ifUpper).forEach(print);
letters.filter(ifLower).forEach(print);
