class Student {
    constructor(firstName, lastName, age, email){
        this.firstName = firstName? firstName : "unnamed";
        this.lastName = lastName? lastName : "unnamed";
        this.age = age;
        this.email = !email? "No Email": email;
    }
    getInfo(){
        return `This is student ${this.firstName} ${this.lastName} age:${this.age} contact email:${this.email}`;
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