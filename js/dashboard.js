
$(document).ready(function() {
    //for menu toggle
    $('#menu-toggle').click(function(e){
        e.preventDefault();
        $('#content-wrapper').toggleClass('toggle');
    });
    // for films table
    $('#mytable').DataTable();
} );
// profits chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Nov', 'Dec',],
        datasets: [{
            label: 'Profits',
            data: [2, 4, 19, 6, 3, 5, 2, 3, 10, 4, 8, 1],
            backgroundColor:  '#000',
            borderColor: [
                'rgb(230, 22, 22)',
            ],
            borderWidth: 3,
            fill: false,
        }]
    },
    options: {
        legend:{
            display: false
        },
    },
});
//views chart
let ctx_2 = document.querySelector('.views').getContext('2d');
let chart = new Chart(ctx_2, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Nov', 'Dec'],
        datasets: [{
            label: 'views',
            backgroundColor:  ['#000', 'rgb(230, 22, 22)', 'yellow', 'rgb(22, 54, 235)', 'rgb(217, 22, 235)', 'rgb(58, 235, 22)', 'rgb(235, 150, 22)', 'rgb(22, 228, 235)', 'rgb(7, 80, 19)', 'rgb(226, 241, 10)', 'rgb(114, 70, 5)', 'rgb(241, 172, 172)'],
            borderColor: '#fff',
            data: [5, 10, 5, 2, 20, 30, 45, 30, 7, 11, 20, 30]
        }]
    },

    // Configuration options go here
    options: {
        legend:{
            display: false
        },
    }
});

//download chart
let ctx_3 = document.querySelector('.download').getContext('2d');
var Views = new Chart(ctx_3,{
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March'],
        datasets: [{
            label: 'download',
            data: [7, 5, 19],
            backgroundColor:  ['#000', 'rgb(230, 22, 22)', 'yellow',],
        }]
    },
    options: {
        legend:{
            display: false
        },
    },
});