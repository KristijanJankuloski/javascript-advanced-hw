(async()=>{
    response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json");
    data = await response.json();

    let allStudentsAvg3 = data.filter(student => student.averageGrade > 3);
    console.log(`---------------------------------`);
    console.log(`All students with an average grade higher than 3:`);
    console.log(allStudentsAvg3);
    console.log(`---------------------------------`);
    
    let allFemaleStudentsAvg5 = data.filter(student => student.gender === "Female" && student.averageGrade === 5);
    allFemaleStudentsAvg5 = allFemaleStudentsAvg5.map(student => student.firstName);
    console.log(`---------------------------------`);
    console.log(`All female student names with an average grade of 5:`);
    console.log(allFemaleStudentsAvg5);
    console.log(`---------------------------------`);
    
    let allMaleStudentsSkopje18 = data.filter(student => student.gender === "Male" && student.age >= 18 && student.city === "Skopje");
    allMaleStudentsSkopje18 = allMaleStudentsSkopje18.map(student => `${student.firstName} ${student.lastName}`);
    console.log(`---------------------------------`);
    console.log(`All male student full names who live in Skopje and are over 18 years old:`);
    console.log(allMaleStudentsSkopje18);
    console.log(`---------------------------------`);
    
    let femaleGrades24 = data.filter(student => student.gender === "Female" && student.age >= 24);
    femaleGrades24 = femaleGrades24.map(student => student.averageGrade);
    console.log(`---------------------------------`);
    console.log(`The average grades of all female students over the age of 24:`);
    console.log(femaleGrades24);
    console.log(`---------------------------------`);
    
    let malesWithB = data.filter(student => student.gender === "Male" && student.averageGrade > 2 && student.firstName.includes("B"));
    console.log(`---------------------------------`);
    console.log(`All male students with a name starting with B and average grade over 2:`);
    console.log(malesWithB);
    console.log(`---------------------------------`);
})();