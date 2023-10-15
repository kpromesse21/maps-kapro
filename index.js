var corner=[0,0]

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    

  } else {
    console.log("Geolocation is not supported by this browser.");
  }
  
  function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude +
    " Longitude: " + position.coords.longitude);
    corner[0]=position.coords.latitude
    corner[1]=position.coords.longitude
console.log(corner);
let lat=corner[0];
let long=corner[1];


    var map = L.map('map').setView([lat,long], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    L.marker([corner[0],corner[1]]).addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();
     L.circle([corner[0],corner[1]], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 50
        }).addTo(map);
  }
  

  //
 

     // Latitude: -1.6838180278409376 Longitude: 29.23478314030846