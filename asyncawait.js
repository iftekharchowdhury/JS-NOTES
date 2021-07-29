const loadData = async() =>{
    try{
        const url = 'https://jsonplaceholder.typicode.com/todos/1';
        const res = await fetch(url);
        
        if (res.ok){

            const data = await res.json();
            console.log(data);

        }else {
            console.log(status);
        }
    }catch(err){
        console.log(err);
    }
}

loadData();