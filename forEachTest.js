// array string 

var colors = ['red','iftekhar', 30]

//  for (let i = 0; i< colors.length; i++){
//      console.log(colors[i]);
//  }


// for each = used with array -> inside forEach block need to declare a annonymous function 

// colors.forEach(function (color) {console.log(color)})

let area = 'nikunjo'
let block = '1/b'
let district = 'Dhaka'
let full_address = [block, area,district]

full_address.forEach((color, index)=>{console.log(`Your address: ${color}`)})

let numbers = [1,2,3,4,5,6]

let sum = 0;

numbers.forEach( (number) => {
    sum += number;

})
// console.log(sum);

// console.log(full_address);
// map helper method return an array

first_arr = [1,32,3,2,3]
double_arr = first_arr.map( num => {return num *2});

var cars = [
    {model: 'Buick', price: 'CHEAP'},
    {model: 'Camaro', price: 'expensive'}
];
var prices = cars.map( car => {return car.price;})


console.log(prices);
// console.log(double_arr);

// Filter method
products = [
    {item: 'Banana', type: 'fruit', quantity: 0, price: 1},
    {item: 'celery', type: 'veg', quantity: 10, price: 15},
    {item: 'orange', type: 'fruit', quantity: 30, price: 14},
    {item: 'grapes', type: 'fruit', quantity: 3, price: 5},
    {item: 'celery', type: 'veg', quantity: 3, price: 5},
    {item: 'spinach', type: 'veg', quantity: 3, price: 1},
]

const p = products.filter( product => {return product.type === 'veg' && product.quantity>0 && product.price <10})
console.log(p);


// console.log(typeof(cars));
// console.log(cars[0].model);
















