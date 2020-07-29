// // data dump from github api

// // var data_dump = '{"data":{"user":{"repositories":{"nodes":[{"primaryLanguage":{"name":"HTML"}},{"primaryLanguage":{"name":"HTML"}},{"primaryLanguage":{"name":"Python"}},{"primaryLanguage":{"name":"HTML"}},{"primaryLanguage":{"name":"Shell"}},{"primaryLanguage":{"name":"Python"}},{"primaryLanguage":{"name":"JavaScript"}},{"primaryLanguage":{"name":"JavaScript"}},{"primaryLanguage":{"name":"JavaScript"}},{"primaryLanguage":{"name":"Python"}},{"primaryLanguage":{"name":"Python"}},{"primaryLanguage":null},{"primaryLanguage":{"name":"CSS"}},{"primaryLanguage":{"name":"Shell"}},{"primaryLanguage":{"name":"HTML"}},{"primaryLanguage":{"name":"JavaScript"}},{"primaryLanguage":{"name":"Go"}},{"primaryLanguage":null},{"primaryLanguage":{"name":"JavaScript"}},{"primaryLanguage":{"name":"JavaScript"}},{"primaryLanguage":{"name":"HTML"}},{"primaryLanguage":null},{"primaryLanguage":{"name":"CSS"}},{"primaryLanguage":null},{"primaryLanguage":{"name":"HTML"}},{"primaryLanguage":{"name":"HTML"}},{"primaryLanguage":null},{"primaryLanguage":{"name":"Go"}},{"primaryLanguage":{"name":"Python"}},{"primaryLanguage":{"name":"Vim script"}},{"primaryLanguage":{"name":"HTML"}},{"primaryLanguage":{"name":"CSS"}},{"primaryLanguage":{"name":"Python"}},{"primaryLanguage":{"name":"Python"}},{"primaryLanguage":{"name":"Python"}},{"primaryLanguage":{"name":"Python"}},{"primaryLanguage":{"name":"Python"}},{"primaryLanguage":{"name":"C"}},{"primaryLanguage":{"name":"Python"}},{"primaryLanguage":{"name":"Python"}},{"primaryLanguage":{"name":"Python"}},{"primaryLanguage":{"name":"HTML"}},{"primaryLanguage":{"name":"Python"}},{"primaryLanguage":{"name":"Python"}},{"primaryLanguage":{"name":"C"}},{"primaryLanguage":null},{"primaryLanguage":{"name":"Swift"}},{"primaryLanguage":{"name":"Python"}},{"primaryLanguage":{"name":"Shell"}},{"primaryLanguage":{"name":"JavaScript"}},{"primaryLanguage":{"name":"C++"}},{"primaryLanguage":{"name":"PowerShell"}},{"primaryLanguage":{"name":"C++"}},{"primaryLanguage":{"name":"C++"}},{"primaryLanguage":{"name":"Python"}},{"primaryLanguage":null},{"primaryLanguage":{"name":"JavaScript"}},{"primaryLanguage":{"name":"HTML"}},{"primaryLanguage":{"name":"HTML"}},{"primaryLanguage":{"name":"JavaScript"}},{"primaryLanguage":{"name":"JavaScript"}},{"primaryLanguage":null},{"primaryLanguage":null},{"primaryLanguage":{"name":"JavaScript"}},{"primaryLanguage":{"name":"Shell"}},{"primaryLanguage":{"name":"Python"}},{"primaryLanguage":null}]}}}}'

// // set the dimensions and margins of the graph
// var width = 650
// height = 650
// margin = 60

// // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
// var radius = Math.min(width, height) / 2 - margin

// // append the svg object to the div called 'my_dataviz'
// var svg = d3.select("#github_chart").append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// var data_objects = {
//     "HTML": 11,
//     "Python": 18,
//     "Shell": 4,
//     "JavaScript": 11,
//     "CSS": 3,
//     "Go": 2,
//     "Vim script": 1,
//     "C": 2,
//     "Swift": 1,
//     "C++": 3,
//     "PowerShell": 1
// }
// // var data_objects = {a: 90, b: 10, c:30, d:8, e:12}

// // const data_objects = Object.values(jsondata.data.user.repositories.nodes);
// // set the color scale
// var color = d3.scaleOrdinal().domain(data_objects)
// // "HTML": FE9A2E,
// // "Python": 0080FF,
// // "Shell": 6E6E6E,
// // "JavaScript": FFFF00,
// // "CSS": 2E2EFE,
// // "Go": 088A29,
// // "Vim script": 1C1C1C,
// // "C": FE642E,
// // "Swift": D8D8D8,
// // "C++": 8000FFƒ,
// // "PowerShell": 1
// .range([
//     "#FE9A2E",
//     "#0080FF",
//     "#6E6E6E",
//     "#FFFF00",
//     "#2E2EFE",
//     "#088A29",
//     "#1C1C1C",
//     "#FE642E",
//     "#D8D8D8",
//     "#8000FF"
// ])

// // Compute the position of each group on the pie:
// var pie = d3.pie().value(function (d) {
//     return d.value;
// })
// var data_ready = pie(d3.entries(data_objects))

// // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
// svg.selectAll('whatever').data(data_ready).enter().append('path').attr('d', d3.arc().innerRadius(0).outerRadius(radius)).attr('fill', function (d) {
//     return(color(d.data.key))
// }).attr("stroke", "black").style("stroke-width", "2px").style("opacity", 0.7)
// var Chart = require('chart.js');

var data_objects = {
    "HTML": 11,
    "Python": 18,
    "Shell": 4,
    "JavaScript": 11,
    "CSS": 3,
    "Go": 2,
    "Vim script": 1,
    "C": 2,
    "Swift": 1,
    "C++": 3,
    "PowerShell": 1
}

var ctx = document.getElementById('github_chart');
// var ctx = document.getElementById('github_chart').getContext('2d');
// var ctx = $('#github_chart');
// var ctx = 'github_chart';

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: data_objects
        }]
    },

    // Configuration options go here
    options: {}
});