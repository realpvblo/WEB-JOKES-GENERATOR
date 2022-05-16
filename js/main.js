const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com',
		'X-RapidAPI-Key': '77b5aaf2femsh37fdaea6ba48c22p1e04d0jsndbd2a0f1a2e1'
	}
};

fetch('https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&contains=C%2523&idRange=0-150&blacklistFlags=nsfw%2Cracist', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));





function myFunction() {
var baseURL = "https://v2.jokeapi.dev";
var params = [
    "blacklistFlags=nsfw,religious,racist",
    "idRange=0-100"
];

var xhr = new XMLHttpRequest();
xhr.open("GET", baseURL + "/joke/" + categories.join(",") + "?" + params.join("&"));

xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status < 300) // readyState 4 means request has finished + we only want to parse the joke if the request was successful (status code lower than 300)
    {
        var randomJoke = JSON.parse(xhr.responseText);

        if(document.getElementById('#srodek3').clicked == true)
        {
            if(randomJoke.type == "single")
        {
            // If type == "single", the joke only has the "joke" property
            alert(randomJoke.joke);
        }
            else
            {
            // If type == "single", the joke only has the "joke" property
            alert(randomJoke.setup);
            alert(randomJoke.delivery);
            }

        }
        
    }
    else if(xhr.readyState == 4)
    {
        alert("Error while requesting joke.\n\nStatus code: " + xhr.status + "\nServer response: " + xhr.responseText);
    }
};

xhr.send();
}