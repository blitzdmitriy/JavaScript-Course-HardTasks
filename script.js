let num = 266219;
let mult = 1;

for (let el of num.toString()) {
    mult *= +el;
}
console.log(mult);

let res = mult **3;
console.log(res.toString().slice(0,2));