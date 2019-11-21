var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Novr', 'Dec'];

var barChartData = {
    labels: MONTHS,
    datasets: [{
            label: '2018',
            backgroundColor: '#508FF4',
            borderWidth: 0,
            data: [
                5,
                2,
                3,
                7,
                1,
                0,
                1,
                2,
                3,
                6,
                4,
                8
            ],
            barPercentage: 0.4,
            categoryPercentage:	0.4
           
        },
        {
            label: '2019',
            backgroundColor: '#FF6A6A',
            borderWidth: 0,
            data: [
                15,
                20,
                30,
                7,
                14,
                0,
                15,
                20,
                30,
                7,
                14,
                10

            ],
            barPercentage: 0.4,
            categoryPercentage:	0.4
        },
    ]

};


var ctx = document.getElementById('barChart').getContext('2d');
window.myBar = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    options: {
        responsive: false,
        legend: {
            position: 'top',
            align: 'end',
            labels: {
                usePointStyle: true,
            }
        },
        cornerRadius: 20,
        scales: {
            xAxes: [{
                gridLines: {
                    drawBorder: true,
                    display:false,
                    
                },
                ticks: {
                        fontSize: 16
                       }
            }],
            yAxes: [{
        
                ticks: {
                        fontSize: 16
                       }
            }],
            
        },

    }
});