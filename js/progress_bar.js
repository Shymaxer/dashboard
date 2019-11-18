//var ctx = document.getElementById('myChart').getContext('2d');

let d1_value1 = document.getElementById('d1_v1');
let d1_value2 = document.getElementById('d1_v2');
let d2_value1 = document.getElementById('d2_v1');
let d2_value2 = document.getElementById('d2_v2');
let pb_1 = document.getElementById('pb_1');
let pb_2 = document.getElementById('pb_2');
let canvas1 = document.getElementById('myChart_1');
let canvas2 = document.getElementById('myChart_2');

let drawProgressBar = function (canvas, value1, value2, pb) {
       
    value1_c = parseFloat(value1.textContent.replace(/,/g, ''));
    value2_c = parseFloat(value2.textContent.replace(/,/g, ''));
    let value_res = value1_c / value2_c;
    canvas.addEventListener('circleProgressBar.afterDraw', function (e) {
        pb.innerHTML = (value_res * 100).toFixed(0) + '%';
    }, false);
    canvas.addEventListener('circleProgressBar.afterFrameDraw', function (e) {
        pb.innerHTML = (value_res * 100).toFixed(0) + '%';
    }, false);
    vr = value_res;
    let radius = canvas.clientHeight / 2 - 8;

    let colors = []
    if (value_res < 0.167) {
        colors = ['#FF6A6A'];
    } else if (value_res >= 0.167 && value_res < 0.334) {
        colors = ['#FF6A6A', '#B766B9'];
    } else if (value_res >= 0.334 && value_res < 0.501) {
        colors = ['#FF6A6A', '#B766B9', '#8C54FF'];
    } else if (value_res >= 0.501 && value_res < 0.668) {
        colors = ['#FF6A6A', '#B766B9', '#8C54FF', '#4EB0D7'];
    } else if (value_res >= 0.668 && value_res < 0.844) {
        colors = ['#FF6A6A', '#B766B9', '#8C54FF', '#4EB0D7', '#00B491'];
    } else {
        colors = ['#FF6A6A', '#B766B9', '#8C54FF', '#4EB0D7', '#00B491', '#F8CE1F'];
    }
    let circleProgressBar = new CircleProgressBar(canvas, {
        colors: colors,
        radius: radius,
    });
    
    value1.style.color = colors[colors.length - 1];
    circleProgressBar.setValue(value_res);
   
    

}

drawProgressBar(canvas1, d1_value1, d1_value2, pb_1);
drawProgressBar(canvas2, d2_value1, d2_value2, pb_2);

/* let circleProgressBar1 = new CircleProgressBar(canvas1, {
    colors: ['#FF6A6A', '#B766B9', '#8C54FF', '#4EB0D7', '#00B491', '#F8CE1F'],
    radius: 100,
});

// set initial value
circleProgressBar1.setValue(value_res_1);
circleProgressBar2.setValue(value_res_2); */
/* // Create gradient
 grd = ctx.createLinearGradient(1.480, 0.000, 220.520, 219.000);
      
 // Add colors
 grd.addColorStop(0.000, 'rgba(255, 0, 0, 1.000)');
 grd.addColorStop(0.150, 'rgba(255, 0, 255, 1.000)');
 grd.addColorStop(0.330, 'rgba(0, 0, 255, 1.000)');
 grd.addColorStop(0.490, 'rgba(0, 255, 255, 1.000)');
 grd.addColorStop(0.670, 'rgba(0, 255, 0, 1.000)');
 grd.addColorStop(0.840, 'rgba(255, 255, 0, 1.000)');
 grd.addColorStop(1.000, 'rgba(255, 0, 0, 1.000)');

var data = {
    datasets: [{
        data: [90,10],
        backgroundColor: [
            grd,
            'gray',
        ]
    }],

};

var options = {
    cutoutPercentage: 80,
    animateRotate: true,

}

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
}); */