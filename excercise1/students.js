// class Student {
//     constructor(firstName, lastName, birthYear, academy, grades){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthYear = birthYear;
//         this.academy = academy;
//         this.grades = grades;
//     }
//     getAge(){
//         if(!this.birthYear){
//             return "No Birth year";
//         }
//         let currentYear = new Date().getFullYear();
//         return currentYear - this.birthYear;
//     }

//     getInfo(){
//         return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}`;
//     }

//     getGradesAverage(){
//         if(!this.grades || this.grades.length === 0){
//             return "No Grades";
//         }
//         let sum = 0;
//         for(let item of this.grades){
//             sum += item;
//         }
//         return sum / this.grades.length;
//     }
// }

// const database = [];
// database.push(new Student("Kristijan", "Jankuloski", 1997, "SEDC", [9,9,9,9]));
// database.push(new Student("John", "Doe", 1999, "SEDC", [9,9,8,8,7]));
// database.push(new Student("Bob", "Joe", 1995, "Finki", [6,7,8,9,7]));


// console.log(database);

// function pythagorasInRange(start, end){
//     if(start < 0 || end < 0){
//         return "Invalid range";
//     }
//     if(end <= start){
//         return "Invalid range";
//     }
//     let output = [];
//     for(let a = start; a <= end; a++){
//         for(let b = start; b <= end; b++){
//             for(let c = start; c <= end; c++){
//                     if((a*a) + (b*b) === (c*c)){
//                     output.push([a,b,c]);
//                 }
//             }
//         }
//     }
//     return output;
// }

// console.log(pythagorasInRange(1,15));

function reverseNumber(num){
    let reversed = 0;
    while(num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return reversed;
}

function findPalindrome(start, end){
    let output = [];
    for(i=start; i <=end; i++){
        if(i === reverseNumber(i)){
            output.push(i);
        }
    }
    return output;
}

console.log(findPalindrome(150, 10000));