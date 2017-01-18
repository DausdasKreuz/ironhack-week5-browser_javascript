function onLocation (position) {
  console.log('Your latitude is ' + position.coords.latitude);
  console.log('Your longitude is ' + position.coords.longitude);
  document.getElementById("position").innerHTML = "Lat: " + position.coords.latitude + ", lon:" + position.coords.longitude;
  var img = `<img src=https://maps.googleapis.com/maps/api/staticmap?center=${position.coords.latitude},${position.coords.longitude}&zoom=13&size=400x300>`;
  $('body').append(img);
}

function onError (error) {
  console.log(error);
}

var options = {enableHighAccuracy: true};

$(document).on('ready', function() {
  $('.btn').on('click', function() {
    navigator.geolocation.getCurrentPosition(onLocation, onError, options);
  });

});


// 40.4382344,%20-3.6813452&zoom=13&size=400x300
