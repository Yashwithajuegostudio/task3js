
const api_url =
	"http://restapi.adequateshop.com/api/Tourist";
async function getapi(url) {
	
	const response = await fetch(url);

	var data = await response.json();
	console.log(data.data);
	if (response) {
	console.log('wait...')
	}
	show(data.data);
}
getapi(api_url);

function show(data) {
 
    var Container = document.getElementById("tourists");
 
    for (var i = 0; i < data.length; i++) {
      var card = document.createElement("div");
      card.style.background = 'pink';
      card.style.padding="20px";
      card.style.margin="15px";
      card.style.borderRadius="20px"
      var img = document.createElement('img');

      img.src = data[i].tourist_profilepicture;
      card.appendChild(img);
        var div = document.createElement("div");
        div.style.float="right";
        div.style.marginTop="60px";
        div.style.lineHeight="30px";
        div.style.fontSize="18px"
        div.innerHTML = 'Name: ' + data[i].tourist_name + '<br\> ' +'Email: '+ data[i].tourist_email + '<br\> ' +'Loaction: '+ data[i].tourist_location;
       card.appendChild(div);
       Container.appendChild(card)
        // Container+=document.getElementById("tourists");
    }

 
	
	}
	

