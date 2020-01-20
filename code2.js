var index = ["WhiteCat", "Vaxei", "Alumetri", "FlyingTuna", "idke", "Micca", "Karthy", "Freddie Benson", "Ryuk", "Varvalian", "a_Blue", "FGSky", "Mathi", "ASecretBox", "firebat92", "Vamhi", "Rafis", "fieryrage", "Dereban", "chocomint"];

var request = new XMLHttpRequest();

var apikey = prompt("Please enter your osu! api key");

(function loop(i, length) {
    if (i >= length) {
        return;
    }
    var url = "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=" + index[i] + "&m=0" ;

    request.open("GET", url);
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            var response = request.response;
            var data = JSON.parse(response);
            // console.log(data);

            var thing = document.createElement('li');

            for(item in data[0]) {
                if (item != 'events'){
                    thing.innerHTML += item + ':' + data[0][item] + '<br>';  
                }
            }

            document.body.appendChild(thing);
            thing.innerHTML += '<br><br>';
            loop(i + 1, length);
        }
    }
    request.send();
    // to acctually request the data
})

(0, index.length); //(0,8)

// Source: https://stackoverflow.com/questions/46503558/how-to-use-multiple-xmlhttprequest
