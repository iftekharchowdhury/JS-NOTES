'use strict';
var printName = function(){
    console.log(this);
    console.log(this.name); // undefined
}
var shakib = {
    name: 'sakib',
};

printName();