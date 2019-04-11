// console.log("hello world");
//$(console.log("hello world"));

$("#hamburger-button").click(function(){
  $("#dropdown").toggleClass("open");
});

// this is kind of a workaround to create the illusion of scrolling the 'menu-container' div, which i was having a hard time doing using $(...).animate()
// oh boy it would create some problems if all of the drinks needed to have different IDs, but for the moment it's fine, kind of
$("#scroll-down-button").click(function(){
  $("#scroll-down-button").toggle();
  $("#scroll-up-button").toggle();
  $("#menu-button-1").html("hot chocolate");
  $("#menu-button-2").html("tea");
  $("#menu-button-3").html("long macchiato");
  $("#menu-button-4").html("short macchiato");
  $("#menu-button-5").html("piccolo");
  $("#menu-button-6").html("cortado");
  $("#menu-button-7").html("filter");
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
  $("#menu-button-7").html("tea");
});

// have here/takeaway functions ------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
$("#have-here , #have-here-little-guy" ).click(function(){
  $("#have-here").toggleClass("option-selected , option-deselected");
  $("#have-here-little-guy").toggleClass("little-guy-selected , little-guy-deselected");
  $("#take-away").toggleClass("option-selected , option-deselected");
  $("#take-away-little-guy").toggleClass("little-guy-selected , little-guy-deselected");
});

$("#take-away , #take-away-little-guy" ).click(function(){
  $("#take-away").toggleClass("option-selected , option-deselected");
  $("#take-away-little-guy").toggleClass("little-guy-selected , little-guy-deselected");
  $("#have-here").toggleClass("option-selected , option-deselected");
  $("#have-here-little-guy").toggleClass("little-guy-selected , little-guy-deselected");
});

//milk functions----------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

$("#soy , #soy-little-guy" ).click(function(){
  if (document.getElementById("full-cream").className = "option-selected"){
    document.getElementById("full-cream").className = "option-deselected";
  }
  if (document.getElementById("trim").className = "option-selected"){
    document.getElementById("trim").className = "option-deselected";
  }
  if (document.getElementById("full-cream-little-guy").className = "little-guy-selected"){
    document.getElementById("full-cream-little-guy").className = "little-guy-deselected";
  }
  if (document.getElementById("trim-little-guy").className = "little-guy-selected"){
    document.getElementById("trim-little-guy").className = "little-guy-deselected";
  }
  $("#soy").addClass("option-selected");
  $("#soy-little-guy").addClass("little-guy-selected");
  //order-total function ----------------------------------------------------------------------------------------------------
  $("#order-total").html("$5.50");
  // this is another case of 'oh man, don't know how to do that thing, better just alter the DOM'– in this case, I didn't know how to make the computer do maths for me
});

$("#full-cream , #full-cream-little-guy" ).click(function(){
  if (document.getElementById("soy").className = "option-selected"){
    document.getElementById("soy").className = "option-deselected";
  }
  if (document.getElementById("trim").className = "option-selected"){
    document.getElementById("trim").className = "option-deselected";
  }
  if (document.getElementById("soy-little-guy").className = "little-guy-selected"){
    document.getElementById("soy-little-guy").className = "little-guy-deselected";
  }
  if (document.getElementById("trim-little-guy").className = "little-guy-selected"){
    document.getElementById("trim-little-guy").className = "little-guy-deselected";
  }
  $("#full-cream").addClass("option-selected");
  $("#full-cream-little-guy").addClass("little-guy-selected");
});

$("#trim , #trim-little-guy" ).click(function(){
  if (document.getElementById("soy").className = "option-selected"){
    document.getElementById("soy").className = "option-deselected";
  }
  if (document.getElementById("full-cream").className = "option-selected"){
    document.getElementById("full-cream").className = "option-deselected";
  }
  if (document.getElementById("full-cream-little-guy").className = "little-guy-selected"){
    document.getElementById("full-cream-little-guy").className = "little-guy-deselected";
  }
  if (document.getElementById("soy-little-guy").className = "little-guy-selected"){
    document.getElementById("soy-little-guy").className = "little-guy-deselected";
  }
  $("#trim").addClass("option-selected");
  $("#trim-little-guy").addClass("little-guy-selected");
});

//sugar functions----------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

$("#one-please , #one-please-little-guy" ).click(function(){
  if (document.getElementById("no-thanks").className = "option-selected"){
    document.getElementById("no-thanks").className = "option-deselected";
  }
  if (document.getElementById("two-please").className = "option-selected"){
    document.getElementById("two-please").className = "option-deselected";
  }
  if (document.getElementById("two-please-little-guy").className = "little-guy-selected"){
    document.getElementById("two-please-little-guy").className = "little-guy-deselected";
  }
  if (document.getElementById("no-thanks-little-guy").className = "little-guy-selected"){
    document.getElementById("no-thanks-little-guy").className = "little-guy-deselected";
  }
  $("#one-please").addClass("option-selected");
  $("#one-please-little-guy").addClass("little-guy-selected");
});

$("#one-please , #one-please-little-guy" ).click(function(){
  if (document.getElementById("no-thanks").className = "option-selected"){
    document.getElementById("no-thanks").className = "option-deselected";
  }
  if (document.getElementById("two-please").className = "option-selected"){
    document.getElementById("two-please").className = "option-deselected";
  }
  if (document.getElementById("two-please-little-guy").className = "little-guy-selected"){
    document.getElementById("two-please-little-guy").className = "little-guy-deselected";
  }
  if (document.getElementById("no-thanks-little-guy").className = "little-guy-selected"){
    document.getElementById("no-thanks-little-guy").className = "little-guy-deselected";
  }
  $("#one-please").addClass("option-selected");
  $("#one-please-little-guy").addClass("little-guy-selected");
});

$("#two-please , #two-please-little-guy" ).click(function(){
  if (document.getElementById("no-thanks").className = "option-selected"){
    document.getElementById("no-thanks").className = "option-deselected";
  }
  if (document.getElementById("one-please").className = "option-selected"){
    document.getElementById("one-please").className = "option-deselected";
  }
  if (document.getElementById("one-please-little-guy").className = "little-guy-selected"){
    document.getElementById("one-please-little-guy").className = "little-guy-deselected";
  }
  if (document.getElementById("no-thanks-little-guy").className = "little-guy-selected"){
    document.getElementById("no-thanks-little-guy").className = "little-guy-deselected";
  }
  $("#two-please").addClass("option-selected");
  $("#two-please-little-guy").addClass("little-guy-selected");
});

$("#no-thanks , #no-thanks-little-guy" ).click(function(){
  if (document.getElementById("two-please").className = "option-selected"){
    document.getElementById("two-please").className = "option-deselected";
  }
  if (document.getElementById("one-please").className = "option-selected"){
    document.getElementById("one-please").className = "option-deselected";
  }
  if (document.getElementById("one-please-little-guy").className = "little-guy-selected"){
    document.getElementById("one-please-little-guy").className = "little-guy-deselected";
  }
  if (document.getElementById("two-please-little-guy").className = "little-guy-selected"){
    document.getElementById("two-please-little-guy").className = "little-guy-deselected";
  }
  $("#no-thanks").addClass("option-selected");
  $("#no-thanks-little-guy").addClass("little-guy-selected");
});

// long black plus button function----------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
$("#long-black-plus-button").click(function(){
  $("#order-total").html("$13.50");
  $("#long-black-details").html("2 x regular long black");
});

// progress bar function ------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------

$(document).ready(function(){
  $("#progress-top").css("width", "100%");
  setTimeout(function(){
    $("#progress-container").removeClass("button background-color");
    $("#progress-top").removeClass("progress-bar supreme-color");
    $("#progress-top").addClass("align-center copy dark-copy");
    $("#progress-top").html("okay, Melanie, your order's ready to pick up <br> <br>");
    $("#progress-bottom").html("<a href='index.html'> <button class='large-button background-color copy dark-copy button-copy'> awesome. </button> </a>");
  }, 15000)
});
