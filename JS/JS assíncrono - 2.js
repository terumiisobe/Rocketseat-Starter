var buttonElement = document.querySelector('#app button');
var inputElement = document.querySelector('#app input');
var listElement = document.querySelector('#app ul');

repoList = [];

function renderList() {
    listElement.innerHTML = '';
    for(repo of repoList){
        var itemElement = document.createElement('li');
        var itemText = document.createTextNode(repo);
    
        itemElement.appendChild(itemText);
        listElement.appendChild(itemElement);
    }
}

function searchUser() { 
    username = inputElement.value;
    var url = "https://api.github.com/users/" + username + "/repos";
    
    axios.get(url)
    .then(function(response){
        var repos = response.data;
        repoList = [];
        console.log(repos.length);
        for(repo of repos){
            repoList.push(repo.name);
        }
        renderList();
    })
    .catch(function(error){
        console.log("error");
    })
}

renderList();
