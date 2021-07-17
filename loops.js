// FOR LOOP 

for (let i = 0; i < 10; i++){
    if (i == 2){
        console.log('2 is my favorite number');
        continue;
    }
    if (i === 5){
        console.log('stop the loop')
        break;
    }
    console.log('number '+i);
}


// WHILE LOOP

let i = 0;

while(i<10){
    console.log('Number '+i);
    i++;

}

// DO WHILE

let i = 0;

do {
    console.log('Number '+i);
    i++;
}while(i<10);



const cars = ['Ford', 'Chevy', 'Honda', 'Toyota']

for (let i = 0; i < cars.length; i++){
    console.log(cars[i]);

}
// ForEach

cars.forEach(function(car){
    console.log(car);
});

// MAP

const users = [
    {id:1, name: 'JOHN'},
    {id:2, name: 'Sara'},
    {id:3, name: 'Karen'},
    {id:4, name: 'JOHN'},

];

const ids = users.map(function(user){
    return user.id, user.name;
})

console.log(ids)

// FOR IN LOOP

const info = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for (let x in user){
    console.log(`${x}: ${user[x]}`);
}