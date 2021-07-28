document.getElementById('button1').addEventListener('click', loadData);
document.getElementById('button2').addEventListener('click', loadCustomerData);

function loadData(e){
    console.log(1);
    xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function(){
        if (this.status === 200){
            const customer = JSON.parse(this.response)
            console.log(typeof customer);

          

            const output = `
                <ul>
                    <li>${customer.firstName}</li>
                    <li>${customer.lastName}</li>
                    <li>${customer.age}</li>
                    <li>${customer.address}</li>
                </ul>
            `
            document.getElementById('customer').innerHTML = output;
        }
    }
    xhr.send();
}

function loadCustomerData(e){

    xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    

    xhr.onload = function(){
        if (this.status === 200){
            const customers = JSON.parse(this.response)
            
            let output = ''
            customers.forEach(function(customer)  {
                output += `
                <ul>
                    <li>ID:${customer.id}</li>
                    <li>Name:${customer.name}</li>
                    <li>District:${customer.district}</li>
                    
                </ul>
            `;
                
            });
          
            document.getElementById('customers').innerHTML = output;
        }
    }
    xhr.send();
}

