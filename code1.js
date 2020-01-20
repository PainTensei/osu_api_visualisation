var request = new XMLHttpRequest();

var apikey = prompt("Please enter your osu! api key");

request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=WhiteCat&m=0"); //1
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=Vaxei&m=0"); //2
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=Alumetri&m=0"); //3
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=FlyingTuna&m=0"); //4
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=idke&m=0"); //5
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=Micca&m=0"); //6
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=Karthy&m=0"); //7
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=7342622&m=0"); //8
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=RyuK&m=0"); //9
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=Varvalian&m=0"); //10
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=a_Blue&m=0"); //11
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=FGSky&m=0"); //12
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=Mathi&m=0"); //13
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=ASecretBox&m=0"); //14
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=firebat92&m=0"); //15
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=Vamhi&m=0"); //16
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=Rafis&m=0"); //17
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=fieryrage&m=0"); //18
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=Dereban&m=0"); //19
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=chocomint&m=0"); //20
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=spare&m=0"); //21
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=badeu&m=0"); //22
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=Weabole&m=0"); //23
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=Dustice&m=0"); //24
request.open('GET', "https://osu.ppy.sh/api/get_user?k=" + apikey + "&u=jpeg&m=0"); //25
// Base URL = https://osu.ppy.sh/api/
// k = apikey
// u = username (or ID)
// m = gamemode (0 to 3)

request.onload = function() {
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);
    // parsing json into the log so i can see it
    
    var allData = document.createElement('listing');
    // create a li (or listing) of the fetched data

    for(item in parsedData[0]) {
        if (item!='events'){
            allData.innerHTML += item + ':'+ parsedData[0][item] + '<br>';
        }
    }

    document.body.appendChild(allData);
    // adding it into the HTML body
}

request.onerror = function() {
    console.log("you dont wanna see this (error bruh)");
}
// in case of error

request.send();
// to acctually request the data
