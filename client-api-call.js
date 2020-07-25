// Basic client call for API of github
let jsondata;

fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer dac9275d17f36ca1f442aaeb044c015f7c6a0d36'
    }, 
    body: JSON.stringify(
        {'query': 'query{ user(login: "linuxbytes"){repositories(first:100){nodes{primaryLanguage{name}}}}}'}
    )
}).then(function (u) {
    return u.json();
}).then(function (json) {
    jsondata = json;
})


// for (key in jsondata.data.user.repositories.nodes){
//   for (x in jsondata.data.user.repositories.nodes[key].primaryLanguage){
//     console.log(jsondata.data.user.repositories.nodes[key].primaryLanguage[x]);
//   }
// }

