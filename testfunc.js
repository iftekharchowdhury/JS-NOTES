// empty param

function showName(){

    return 'iftekhar';
}



// function with param
function addTwoNumbers(num1, num2){
    sum = num1+num2;
    return sum;
}


// Default param
function multiplication(num1=2, num2=3){
    total = num2 * num1
    return total;
}

// property methods

const todo  = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.add();
todo.edit(1);

console.log(multiplication());
console.log(addTwoNumbers(1,2));
console.log(showName())
