const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address:{
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 1987;
    }

}

let val;

val =person;
// Get specific value
val = person.firsName
val = person['lastName']
val = person.age;
val = person.hobbies;
val = person.address.state
val = person.getBirthYear();
val = person.address.city;
console.log(val);