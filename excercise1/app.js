// let divBy3 = [];
// let evenBy4 = [];
// let lastDigit = [];

// for(let i = 1; i <= 1000; i++){
//     if(i % 3 === 0){
//         divBy3.push(i);
//     }
//     if(i % 4 === 0){
//         evenBy4.push(i);
//     }
//     if(i % 10 === 1){
//         lastDigit.push(i);
//     }
// }

// console.log(`Divisible by 3: ${divBy3}`);
// console.log(`Divisible by 4: ${evenBy4}`);
// console.log(`Ends in 1: ${lastDigit}`);

// const test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

// function cleanArrayButStrings(array){
//     let output = [];
//     for(let i=0; i<array.length; i++){
//         if(typeof(array[i]) === 'string')
//             output.push(array[i]);
//     }
//     return output;
// }

// function cleanArrayButNumbers(array){
//     let output = [];
//     for(let item of array){
//         if(typeof(item) === 'number')
//             output.push(item);
//     }
//     return output;
// }

// function truthyValuesArray(array){
//     let output = [];
//     for(let item of array){
//         if(item)
//             output.push(item);
//     }
//     return output;
// }

// console.log(truthyValuesArray(test));

class Student {
    constructor(firstName, lastName, age, email){
        this.firstName = !firstName? "no Name" : firstName;
        this.lastName = !lastName? "no Last Name" : lastName;
        this.age = !age? "No age" : age;
        this.email = !email? "No Email": email;
    }
}

const database = [];

document.querySelector('#student-form').addEventListener('submit', event => {
    event.preventDefault();
    let studentName = document.querySelector("#name").value;
    let studentLastName = document.querySelector("#surname").value;
    let age = Number(document.querySelector("#age").value);
    let email = document.querySelector("#email").value;
    let newStudent = new Student(studentName, studentLastName, age, email);
    database.push(newStudent);
    event.target.reset();
    console.log(database);
});