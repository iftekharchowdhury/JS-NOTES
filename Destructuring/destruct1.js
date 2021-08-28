/* eslint-disable no-var */
// let name = "joy";
// let age = 29;
// let profession = "Bekar";

// const {name, age, profession} = everything

// Destructuring argument object

var savedFiled = {

    extension: "jpg",
    name: "repost",
    size: 14040,
};

// eslint-disable-next-line space-before-blocks
function fileSummary({ name, extension, size }, { color }){
    // eslint-disable-next-line indent
    // eslint-disable-next-line indent
    return `The file ${name} ${extension} is of size ${size} ${color}`;
}

// Destructuring arrays

// const companies = [
//   "Google",
//   "Facebook",
//   "Uber",
// ];

// const [ a, b, ...rest] = companies;

// const companies = [
//     {name: 'Google', location: 'Mountain View'},
//     {name:'Facebook', location: 'Menlo park'},
//     {name: 'Uber', location:'San Fran'}

// ]

// const [{location}] = companies;

// console.log(companies, rest, a, b);
// console.log(fileSummary(savedFiled, {color:'red'}));

// console.log(everything);

function signup({
    username, password, email, dob, city,
}) {
    return `username: ${username}, email: ${email}, dob: ${dob}, city: ${city}`;
}
const user = {

    username: "joy",
    password: "joy",
    email: "joy@gmail.com",
    dob: "1/1/1990",
    city: "Dhaka",

};
console.log(signup(user));
