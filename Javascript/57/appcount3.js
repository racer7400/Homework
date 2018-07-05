for (let i = 0; i < 10; i++) {
    app.utils.addCounter();
}
console.log("counter1: " + app.utils.print());

let counter2A = app.utils.multcounter();
let counter2B = app.utils.multcounter();

for (let i = 0; i < 5; i++) {
    counter2A.addCounter();
}
console.log("counter2A: " + counter2A.print());

for (let i = 0; i < 15; i++) {
    counter2B.addCounter();
}
console.log("counter2B: " + counter2B.print());