// TASK 1
let numbers = [];
function sumNumbers(arr){
    if(arr.length === 0){
        return 0;
    }
    let sum = 0;
    for(num of numbers){
        sum += num;
    }
    return sum;
}
let input = "";
while(input !== "."){
    input = prompt("Enter number or enter . to end: ");
    if(Number.isNaN(Number(input))){
        console.log("Invalid input");
        continue;
    }
    numbers.push(Number(input));
}
console.log(sumNumbers(numbers));

// TASK 2
// works for ints
function printNumberDigits(num){
    if(!Number.isFinite(num)){
        console.log("Invalid input");
        return;
    }
    while(parseInt(num) !== 0){
        console.log(parseInt(num%10));
        num/=10;
    }
    return;
}
printNumberDigits(1234);
// works with floats too
function printNumberDigitsFloat(num){
    if(!Number.isFinite(num)){
        console.log("Invalid input");
        return;
    }
    num = num.toString();
    num = num.split("");
    for(char of num){
        // uncomment if to remove . from floats
        // if(char === "."){
        //     continue;
        // }
        console.log(char);
    }
}
printNumberDigitsFloat(0);

// TASK 3?
let numArr = [4, -9, -98, -1, 444, 3, -555];
function changeNegativeNumber(arr){
    let newArr = [];
    for(num of arr){
        if(!Number.isFinite(num)){
            console.log("found invalid value");
            continue;
        }
        if(num < 0 || num === -0){
            newArr.push(num*-1);
            continue;
        }
        newArr.push(num);
    }
    return newArr;
}
console.log(changeNegativeNumber(numArr));

// TASK 4
const givenArr = [12, 45, 88, 1, 567, 3, 91];
let filteredArray = givenArr.filter(num => num%2!==0);
console.log(filteredArray);

// TASK 5
const givenVarArr = [12, 45, 88, 1, 567, 3, "12", 91, "Hi", true, Infinity, 0, false, "", undefined, null, NaN];
let newArr = givenVarArr.filter(item => typeof(item)==="number" && Number.isFinite(item));
console.log(newArr);