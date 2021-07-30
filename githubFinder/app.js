const github = new Github;
const ui = new UI


const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    
    const userText = e.target.value;

    if(userText !== ''){
        github.getUser(userText)
        .then(data => {
            if (data.profile.message == 'Not found'){

            } else {
                ui.showProfile(data.profile);
                
            }
        })
    }else {

        ui.clearProfile();

    }
});