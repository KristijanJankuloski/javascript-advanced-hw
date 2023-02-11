class User {
    constructor(name){
        this.name = name;
    }
}

let newUser = new User("Kiko");

console.log(newUser);
// ???
setTimeout(() => {
    newUser.lastName = "JJ";
    console.log(newUser);
}, 1000);