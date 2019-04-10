// console.log("hello world");
//$(console.log("hello world"));

$("#hamburger-button").click(function(){
  $("#dropdown").toggleClass("open");
});

// this is kind of a workaround to create the illusion of scrolling the 'menu-container' div, which i was having a hard time doing using $(...).animate()
// oh boy it would create some problems if all of the drinks needed to have different IDs, but for the moment it's fine
// ... kind of
$("#scroll-down-button").click(function(){
  $("#scroll-down-button").toggle();
  $("#scroll-up-button").toggle();
  $("#menu-button-1").html("hot chocolate");
  $("#menu-button-2").html("tea");
  $("#menu-button-3").html("long macchiato");
  $("#menu-button-4").html("short macchiato");
  $("#menu-button-5").html("piccolo");
  $("#menu-button-6").html("cortado");
});

$("#scroll-up-button").click(function(){
  $("#scroll-down-button").toggle();
  $("#scroll-up-button").toggle();
  $("#menu-button-1").html("flat white");
  $("#menu-button-2").html("latté");
  $("#menu-button-3").html("cappuccino");
  $("#menu-button-4").html("mocha");
  $("#menu-button-5").html("long black");
  $("#menu-button-6").html("short black");
});

// functions for the options page

//have-here / TA function

//milk function

//sugar function 
