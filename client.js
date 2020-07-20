
// Basic client call for APU

fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization':'Bearer f0b6b095fd08746ac3f3f35f2b6d181361d231a5'
  },
  body: JSON.stringify( { 'query': 
  'query{ user(login: "linuxbytes"){repositories(first:100){nodes{primaryLanguage{name}}}}}'
} )

