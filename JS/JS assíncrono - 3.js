var buttonElement = document.querySelector('#app button');
var inputElement = document.querySelector('#app input');
var listElement = document.querySelector('#app ul');

repoList = [];
loading = false;

function renderList() {
    listElement.innerHTML = '';
    if(loading){
        var itemElement = document.createElement('li');
        var itemText = document.createTextNode("Loading...");

        itemElement.appendChild(itemText);
        listElement.appendChild(itemElement);
    }else{
        for(repo of repoList){
            var itemElement = document.createElement('li');
            var itemText = document.createTextNode(repo);
        
            itemElement.appendChild(itemText);
            listElement.appendChild(itemElement);
        }
    }
}

function searchUser() { 
    username = inputElement.value;
    var url = "https://api.github.com/users/" + username + "/repos";
    

    axios.get(url)
    .then(function(response){
        var repos = response.data;
        repoList = [];
        for(repo of repos){
            repoList.push(repo.name);
        }
        loading = false;
        renderList();
    })
    .catch(function(error){
        if(error.response.status === 404){
            alert("User doesn't exist");
        }
        loading = false;
        renderList();
    })
    
    loading = true;
    renderList();
}
 
renderList();
