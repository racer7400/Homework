const Acc1 = {
    balance:150
};
const Acc2 = {
    balance:100
};
function addInterest(intamount, print){
    let x=0;
    let returnArray = [];
    intamount.forEach(intamount => {
        returnArray[x]= (1+intamount)*this.balance;
        x++;
    });
    if(print){
        console.log(print);
    }
    return returnArray;
}
console.log(addInterest.call(Acc1,[1,2]));
console.log(addInterest.apply(Acc1,[[1,2,3],{hi:'hi'}]));
const aI = addInterest.bind(Acc2,[1,3]);
console.log(aI());