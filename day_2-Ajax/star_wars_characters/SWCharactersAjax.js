$(document).on('ready', function() {

  $('.btn-show').on('click', function(event) {
    event.preventDefault();
    requestCharacter();
  });

  $('.btn-put').on('click', function(event) {
    event.preventDefault();
    submitCharacter();
  });
});


function requestCharacter() {
  $.ajax({
    type: "GET",
    url: "https://ironhack-characters.herokuapp.com/characters",
    success: showCharacters,
    error: handleError,
  });
}

function submitCharacter() {
  var newCharacter = {
    name: $('#name').val(),
    occupation: $('#occupation').val(),
    weapon: $('#weapon').val(),
    debt: $('#debt').val(),
  };

  $.ajax({
    type: "POST",
    url: "https://ironhack-characters.herokuapp.com/characters",
    data: newCharacter,
    success: requestCharacter,
    error: handleError
  });
}

function showCharacters(response) {
  var charactersArray = response;
  charactersArray.forEach(function(theCharacter) {
    var html = "<li>" + theCharacter.name + "</li>";
    $('ul').append(html);
  });
}

function handleError(error) {
  console.log("Error!");
  console.log(error.responseText);
}
