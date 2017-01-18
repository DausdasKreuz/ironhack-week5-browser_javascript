var phrases = [
  'I am your father.',
  'Use the force, Luck',
  'F### you all, revels',
  'Itering random'
];

$(document).on('ready', function(){
  $('.btn').on('click', function() {
    $('h1').html(phrases[Math.floor(Math.random() * phrases.length)]);
  });

  $('.my-class').append('<p>hola</p>')

});
