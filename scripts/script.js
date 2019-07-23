
$('#icbc').mouseenter(function(){
  $('#desc').text("This project involved the usage of the xgboost library to create a model that predict whether or not someone will file an insurance claim based on their characteristics and past automotive history.");
   $('#desc').show();
});

$('#icbc').mouseleave(function(){
  $('#desc').text("");
   $('#desc').hide();
});

$('#easymarkit').mouseenter(function(){
  $('#desc').text("EasyMarkit wanted us to create a model that could predict whether or not someone would cancel an appintment based on their characteristics and past history.");
   $('#desc').show();
});

$('#easymarkit').mouseleave(function(){
  $('#desc').text("");
   $('#desc').hide();
});

$('#abalone').mouseenter(function(){
  $('#desc').text("I was tasked with creating the evaluation function for an A.I. that had the ability to play a virtual version of the board game 'Abalone'.");
   $('#desc').show();
});

$('#abalone').mouseleave(function(){
  $('#desc').text("");
   $('#desc').hide();
});

$('#spam').mouseenter(function(){
  $('#desc').text("I created a small demo of a spam filter used to highlight how Naive Baysian Probability can be used to filter your email.");
   $('#desc').show();
});

$('#spam').mouseleave(function(){
  $('#desc').text("");
   $('#desc').hide();
});

$('#hangman').mouseenter(function(){
  $('#desc').text("After creating a simple version of the game 'Hangman', I hosted the project on AWS and utilized several of it's components, such as S3, Cognito, Lambdas, and API Gateway.");
   $('#desc').show();
});

$('#hangman').mouseleave(function(){
  $('#desc').text("");
   $('#desc').hide();
});
