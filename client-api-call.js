
// Basic client call for APU

fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization':''
  },
  body: JSON.stringify( { 'query': 
  'query{ user(login: "linuxbytes"){repositories(first:100){nodes{primaryLanguage{name}}}}}'
} )

