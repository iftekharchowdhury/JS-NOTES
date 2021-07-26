document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    // create an xhr object
    const xhr = new XMLHttpRequest();
    // open
    xhr.open('GET', 'data.txt', true);

    xhr.onload = function(){
        if (this.status === 200){
            // console.log(this.responseText);
            // document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
            document.getElementById('output').innerHTML = `<h1>${this.response}</h1>`
        }
    }
    xhr.send();
}