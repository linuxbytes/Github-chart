var data_objects = {
    "HTML": 11,
    "Python": 15,
    "Shell": 4,
    "JavaScript": 11,
    "CSS": 3,
    "Go": 2,
    "Vim script": 2,
    "C": 1,
    "C++": 3,
}


let plot_labels = [];
let plot_values = [];

Object.keys(data_objects).forEach(function (key) {
    plot_values.push(data_objects[key]);
    plot_labels.push(key);
});

var data = [{
    // values: [16, 15, 12, 6, 5, 4, 42],
    // labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World'],
    values: plot_values,
    labels: plot_labels,
    domain: { column: 0 },
    name: 'Github Chart',
    hoverinfo: 'label+percent+name',
    hole: .3,
    type: 'pie'
}];

var layout = {
    title: 'LinuxBytes Github Chart',
    font: {
        size: 16,
        color: "#fff"
    },
    annotations: [
        {
            font: {
                size: 20,
                color: "white"
            },
            showarrow: false,
            text: 'Git',
            x: 0.5,
            y: 0.5
        }
    ],
    autosize: true,
    // showlegend: false,
    paper_bgcolor: "rgba(0,0,0,0)",
    grid: { rows: 1, columns: 1 }
};

Plotly.newPlot('github_chart', data, layout);
