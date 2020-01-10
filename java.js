var request = new XMLHttpRequest();

request.open('GET', 'https://osu.ppy.sh/api/get_user?k=cd0c48e95ce8bd3a80fe7c2620dd59d426dcba26&u=PainTensei&m=0');
// Base URL = https://osu.ppy.sh/api/
// k = API_key
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