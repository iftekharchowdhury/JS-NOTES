document.getElementById('customer').addEventListener('click', loadData);

function loadData(e){
    console.log(1);
    xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function(){
        if (this.status === 200){
            const customer = JSON.parse(this.response)

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