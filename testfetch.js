document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button4').addEventListener('click', getExternalTwo);

document.getElementById('button3').addEventListener('click', getExternal);

function getText(){
    fetch('data.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById('output').innerHTML = `<h1>${data}</h1>`;
    })
    .catch(function(err){
        console.log(err);
    });
}


// Get from external API
function getExternal() {
    fetch('https://api.github.com/users') //url 
      .then(function(res){
        return res.json();
      })
      .then(function(data) {
        console.log(typeof data);
        let output = '';
        data.forEach(function(user) {
          output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
      })
      .catch(function(err){
        console.log(err);
      });
  }

  // Get from external API
function getExternalTwo() {
    fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/2014-3') //url 
    .then(function(res){
        return res.json();})
    .then(function(data) {
        // console.log(typeof data)

        // let output = '';
        // output +=`<li>${data.Valor}</li>
        // <li>${data.Marca}</li>
        // <li>${data.Modelo}</li>
        // <li>${data.AnoModelo}</li>
        // <li>${data.MesReferencia}</li>`
        // document.getElementById('output').innerHTML = output;
        let output = ''
       
        for (var k in data){
           

            console.log(`${k} - ${data[k]}`);
            
           
           
        }
        

        
        })
        
        
    
    .catch(function(err){
        console.log(err);
    });
}