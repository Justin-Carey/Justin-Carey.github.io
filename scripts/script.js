
$('#icbc').hover(function(){
  $('#desc').text("This project involved the usage of the xgboost library to create a model to predict whether or not someone will file an insurance claim based on their characteristics and past automotive history.");
  $('.loader').hide();
   $('#desc').show();
});

$('#icbc').mouseleave(function(){
  $('#desc').hide();
  $('.loader').show();
});

$('#easymarkit').mouseenter(function(){
  $('#desc').text("EasyMarkit wanted us to create a model that could predict whether or not someone would cancel an appointment based on their characteristics and past history.");
  $('.loader').hide();
   $('#desc').show();
});

$('#easymarkit').mouseleave(function(){
  $('#desc').hide();
  $('.loader').show();
});

$('#abalone').mouseenter(function(){
  $('#desc').text("I was tasked with creating the evaluation function for an A.I. that had the ability to play a virtual version of the board game 'Abalone'.");
  $('.loader').hide();
   $('#desc').show();
});

$('#abalone').mouseleave(function(){
  $('#desc').hide();
  $('.loader').show();
});

$('#spam').mouseenter(function(){
  $('#desc').text("I created a small demo of a spam filter used to highlight how Naive Baysian Probability can be used to filter your email.");
  $('.loader').hide();
   $('#desc').show();
});

$('#spam').mouseleave(function(){
  $('#desc').hide();
  $('.loader').show();
});

$('#hangman').mouseenter(function(){
  $('#desc').text("After creating a simple version of the game 'Hangman', I hosted the project on AWS and utilized several of it's components, such as S3, Cognito, Lambdas, and API Gateway.");
  $('.loader').hide();
   $('#desc').show();
});

$('#hangman').mouseleave(function(){
  $('#desc').hide();
  $('.loader').show();
});

$('#bamboo').mouseenter(function(){
  $('#desc').text("A group of friends and I created a repository to hold and organize resume based information.");
  $('.loader').hide();
   $('#desc').show();
});

$('#bamboo').mouseleave(function(){
  $('#desc').hide();
  $('.loader').show();
});

$('#github').mouseenter(function(){
  $('#desc').text("My Github.");
  $('.loader').hide();
   $('#desc').show();
});

$('#github').mouseleave(function(){
  $('#desc').hide();
  $('.loader').show();
});

$('#linkedin').mouseenter(function(){
  $('#desc').text("My LinkedIn.");
  $('.loader').hide();
   $('#desc').show();
});

$('#linkedin').mouseleave(function(){
  $('#desc').hide();
  $('.loader').show();
});

$('#mail').mouseenter(function(){
  $('#desc').text("Email me.");
  $('.loader').hide();
   $('#desc').show();
});

$('#mail').mouseleave(function(){
  $('#desc').hide();
  $('.loader').show();
});

$('#resume').mouseenter(function(){
  $('#desc').text("My resume.");
  $('.loader').hide();
   $('#desc').show();
});

$('#resume').mouseleave(function(){
  $('#desc').hide();
  $('.loader').show();
});

function sendEmail()
{
    window.location = "mailto:justinthomascarey@gmail.com";
}
