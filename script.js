// Первое усложнённое задание
let message

const isNumber = function(num){
    return !isNaN(parseFloat(num)) && isFinite(num) && num.toString().trim() === num.toString()
}

do {
    message = prompt("Введите число")
} while (!isNumber(message)) 




// Второе усложнённое задание (1)
let arr = ['123685325', '24689535', '49635875', '698532147', '5555555555555555', '12332112321', '444444444444']
arr.forEach(num => {
    if (num[0] === '2' || num[0] === '4') console.log(num);
})




// Второе усложнённое задание (2)
for (let i = 2; i <= 100; i++) {
    let k = 0
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            k += 1
            break
        }
    }

    if (k === 0) {
        console.log(i, `Делители этого числа: 1 и ${i}`);
    }
}