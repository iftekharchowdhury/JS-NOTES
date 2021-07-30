// destructuring assignment


let a, b;

// Rest pattern

[a,b] = [100,200];

[d,e, ...rest] = [300,400, 5,6,7,9];
({f,g} = {f:1, g:3, l:9, k:99});
({f,g, ...rest} = {f:1, g:3, l:9, k:99});

// array destructuring
const people = ['JOHN', 'Beth', 'Mike']

const [p1,p2,p3] = people;


// obj destructuring 

const info = {
    name: 'joy',
    address: 'ctg',
    phone: '01704139391',
    gender: 'O'
}

const {name, address, phone, gender} = info

console.log(name, address, phone, gender);

console.log(p1,p2,p3);

console.log(a,b);
console.log(rest);

console.log(f,g);

console.log(p1,p2,p3);