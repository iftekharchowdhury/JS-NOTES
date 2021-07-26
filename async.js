const processOrder = (customer) => {
    console.log(`processing order for customer 1`);
    
    setTimeout(done, 3000);

    console.log(`order processed for customer 1`);
};

function done(){
    console.log(`cooking completed`);
}

console.log(`take order for customer 1`);
processOrder();
console.log(`completed order for customer 1`);