class User{
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    }
    // method
    increaseAge(){
        this.age +=1;
    }
    // static method
    static staticMethod(){
        console.log("I am a static method");
    }
    // getter and setter method
    get name(){ return this._name}
    set name (newName) {this._name = newName};
}

class Administrator extends User {
    constructor(name, age, email, role){
        super(name, age, email);
        this._role = role;
    }
    get role(){ return this._role};
    set role(newRole) {this._role = newRole};
}

const adminLotif = new Administrator("lotif", 09, "lo@ex.com", "admin");












const jeff = new User("Jeff", 30, "jeff@gmail.com");
jeff.increaseAge();

jeff.name = 'joiy'
console.log(jeff.name);
const jeff = new User("sara", 30, "sara@gmail.com");

const jeff = new User("dsa", 30, "saf@gmail.com");




















