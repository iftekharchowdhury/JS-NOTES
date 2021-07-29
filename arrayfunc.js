// function name(){
//     console.log('this is name func');

// }



// const name = () => console.log('arrow function name');
// const age = () => console.log('age');
// // one line return

// const who = () => ({ok: 'ok'})

// // multiple param

// const fullName = (firstName, lastName) => console.log( `Hello ${firstName}${lastName}`);
// fullName('joy', 'iftekhar');

// const arr = ['a', 'ift', 'Number']
// const namelength = arr.map(v => ({len: v.length, dir: console.log(v)}))

// let bob = a => a+ 100;

let age = prompt("what is your age?", 18);

let welcome = (age < 18) ?
    () => alert("hello"):
    () => alert('Greetings');

welcome();
// sayHi();



// console.log(bob(1));

// age();
// name()
// name()
// console.log(who());
// console.log(namelength);