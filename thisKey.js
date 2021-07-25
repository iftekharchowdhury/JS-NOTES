// var printPlayerName = function(name){
//     console.log(name);
// }

// printPlayerName("sakib");

// var shakib = {
//     name: 'sakib',
//     age: 35,
//     printPlayerName: function(){
//         console.log(this.name);
//     }
// }
// shakib.printPlayerName();

var printPlayerNameFunction = function (obj){
    obj.printPlayerName = function (){
        console.log(this.name)
    }
}

var play1 = {
    name: 'player one',
    age: 35,
};

var play2 = {
    name: 'Player two',
    age: 40,
};


// console.log(printPlayerNameFunction(play1));

// console.log(printPlayerNameFunction(play2));

// console.log(play1.printPlayerName());
// console.log(play2.printPlayerName());

// explicit 
v1 = 'good'
v2 = 'coder'

function player3(v1,v2, level){
    
    console.log(`${this.name} age is ${this.age} and he is ${v1}, ${v2} ${level}`)
}

var play3 = {
    name: 'joy',
    age: 20,
    version: "v1"
};



// explicitly calling player3 function using call function

// player3.call(play3, v1, v2)

// if we want to pass an array, call func can't take array

var level = [1,2,3]

player3.apply(play3, level);

// constructor function
// new binding
function place(name, address, road){
    this.name = name;
    this.address = address;
    this.road = road;
    console.log(`${this.name} ${this.address} ${this.road}`);
    if (this.name == 'ctg'){
        this.name = 'Chittagong';
    }
    console.log(`${this.name} ${this.address} ${this.road}`);
}

var p1 = new place('ctg', 'medical', 'm ali road');
p1;

console.log(typeof(p1));