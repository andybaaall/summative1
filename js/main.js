// console.log("hello world");
//$(console.log("hello world"));

$("#hamburger-button").click(function(){
  $(console.log("got a click"));
  //toggles the menu
});

$("#flat-white-button").click(function(){
  $(console.log("got a click"));
  //takes us to the default options screen
});

$("#long-black-button").click(function(){
  $(console.log("got a click"));
  //takes us to the options screen with milk greyed out
  // (there's gotta be a way to do 'if eventTarget was longblack, then adjust the visible options', right?)
});

$("#scroll-button").click(function(){
  $(console.log("got a click"));
  //toggle between scroll-down-button and scroll-up-button
  //also do the scroll pls
});
