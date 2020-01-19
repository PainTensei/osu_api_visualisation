

var index = ["WhiteCat", "Vaxei", "Alumetri", "FlyingTuna", "idke", "Micca", "Karthy", "Freddie Benson", "Ryuk", "Varvalian"
//, "a_Blue", "FGSky", "Mathi", "ASecretBox", "firebat92", "Vamhi", "Rafis", "fieryrage", "Dereban", "chocomint"
];
console.log(index); // 10

var seconds = [];

var request = new XMLHttpRequest();

(function loop(i, length) {
    if (i >= length) {
        return;
    }
    var url = "https://osu.ppy.sh/api/get_user?k=cd0c48e95ce8bd3a80fe7c2620dd59d426dcba26&u=" + index[i] + "&m=0" ;

    request.open("GET", url);
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            var response = request.response;
            var data = JSON.parse(response);
            seconds.push(data[0].total_seconds_played);
            console.log(seconds);

            var myChart = document.createElement('li');

            for(item in data[0]) {
                if (item == 'total_seconds_played'){
                    myChart.innerHTML += index[i] + ' ' + item + ': ' + data[0][item] + ' sec';
                }
            }

            document.body.appendChild(myChart);
            myChart.innerHTML += '<br>';
            loop(i + 1, length);
        }
    }
    request.send();
    // to acctually request the data
})

(0, index.length); //(0,8)

// Source: https://stackoverflow.com/questions/46503558/how-to-use-multiple-xmlhttprequest






var ctx = document.getElementById('chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["1. WhiteCat", "2. Vaxei", "3. Alumetri", "4. FlyingTuna", "5. idke", "6. Micca", "7. Karthy", "8. Freddie Benson", "9. Ryuk", "10. Varvalian"
        //, "11. a_Blue", "12. FGSky", "13. Mathi", "14. ASecretBox", "15. firebat92", "16. Vamhi", "17. Rafis", "18. fieryrage", "19. Dereban", "20. chocomint"
        ],

        datasets: [{
            label: 'Total seconds played',
            data: seconds,
            backgroundColor:'rgba(54, 200, 235, 0.2)',
            borderColor:'rgba(0, 0, 0, 1)',
            borderWidth: 1
        }]

    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});	
