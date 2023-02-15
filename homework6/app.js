class Academy {
    constructor(name, start, end, students, subjects){
        this.name = name;
        this.startDate = start;
        this.endDate = end;
        this.students = students? students: [];
        this.subjects = subjects? subjects: [];
        // if this should not be settable then it should be a method
        this.numberOfClasses = this.subjects.length * 10;
    }
    printStudents(){
        if(!this.students){
            console.log("no students in the academy");
            return;
        }
        this.students.forEach(student => {
            console.log(`${student.firstName} ${student.lastName} ${student.age}`);
        });
    }
    printSubjects(){
        if(!this.subjects){
            console.log("no subjects in the academy");
            return;
        }
        this.subjects.forEach(subject => {
            console.log(subject.title);
        })
    }
    // like this
    getNumberOfClasses(){
        if(!this.subjects){
            return null;
        }
        return this.subjects.reduce((acc, current) => acc.numberOfClasses += current.numberOfClasses);
    }
    // a method to add subjects is needed to make interaction easier
    addSubject(subject){
        if(!(subject instanceof Subject)){
            console.log("Please enter valid subject");
            return;
        }
        this.subjects.push(subject);
    }
}

class Subject{
    constructor(title, isElective, academy, students){
        this.title = title;
        this.isElective = isElective;
        this.academy = academy;
        this.students = students? students: [];
    }
    overrideClass(classNumber){
        if(classNumber < 3){
            console.log("cannot be less than 3");
            return;
        }
        this.numberOfClasses = classNumber;
    }
}

class Student{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.completedSubjects = [];
        this.academy = null;
        this.currentSubject = null;
    }
    startAcademy(academy){
        if(!(academy instanceof Academy)){
            console.log("please send a valid academy");
            return;
        }
        this.academy = academy;
        this.academy.students.push(this);
    }
    startSubject(subject){
        if(!(subject instanceof Subject)){
            console.log("please enter valid subject");
            return;
        }
        if(!this.academy){
            console.log("the student does not have an academy");
            return;
        }
        if(!this.academy.subjects.find(sub => sub.title === subject.title)){
            console.log("no subject was found in the academy");
            return;
        }
        if(this.currentSubject){
            this.completedSubjects.push(this.currentSubject);
        }
        this.currentSubject = subject;
        this.currentSubject.students.push(this);
    }
}

let newAcademy = new Academy("sedc", new Date("2022-10-01"), new Date("2023-12-01"));
let newSubject = new Subject("advanced js", true, newAcademy);
let secondSubject = new Subject("basic js", true, newAcademy);
newAcademy.addSubject(newSubject);
newAcademy.addSubject("Hello Kiko");
newAcademy.addSubject(secondSubject);
console.log(newAcademy);
let newStudent = new Student("Kristijan", "Jankuloski", 25);
newStudent.startAcademy(newAcademy);
newStudent.startSubject(newSubject);
let secondStudent = new Student("John", "Doe", 23);
secondStudent.startAcademy(newAcademy);
secondStudent.startSubject(secondSubject);
newStudent.startSubject(secondSubject);

newAcademy.printStudents();
newAcademy.printSubjects();