//create variable 
var comp = randomNumber(1, 3);
var win = 0;
// start the game
onEvent("btnplay", "click", function( ) {
  setScreen("screen1");
});
// 
// when you choose the rock
// 
onEvent("btnrock", "click", function( ) {
  setProperty("image3", "image", "icon://fa-hand-rock-o");
  if (comp == 1) {
    setProperty("image4", "image", "icon://fa-hand-rock-o");
    setText("btnwin", "It's a Tie");
  } else if (comp==2) {
    setProperty("image4", "image", "icon://fa-hand-paper-o");
    setText("btnwin", "Comp Won..Comp Wrapped Your Rock");
  } else {
    setProperty("image4", "image", "icon://fa-hand-scissors-o");
    setText("btnwin", "You Won..... You Smashed your Scissors");
  }
  setScreen("screen2");
});
// 
//when you choose paper
// 
onEvent("btnpaper", "click", function( ) {
  setProperty("image3", "image", "icon://fa-hand-paper-o");
  if (comp == 1) {
    setProperty("image4", "image", "icon://fa-hand-rock-o");
    setText("btnwin", "You Won..You Wrapped Comps Rock");
  } else if (comp==2) {
    setProperty("image4", "image", "icon://fa-hand-paper-o");
    setText("btnwin", "It's a Tie");
  } else {
    setProperty("image4", "image", "icon://fa-hand-scissors-o");
    setText("btnwin", "Comp Won..... Comp cut Your paper into Pieces");
  }
  setScreen("screen2");
});
// 
//When you Choose Scissors 
// 
onEvent("btnrock", "click", function( ) {
  setProperty("image3", "image", "icon://fa-hand-rock-o");
  if (comp == 1) {
    setProperty("image4", "image", "icon://fa-hand-rock-o");
    setText("btnwin", "Comp Won..Comp Smashed your scissors");
  } else if (comp==2) {
    setProperty("image4", "image", "icon://fa-hand-paper-o");
    setText("btnwin", "You Won..... You cut paper into pieces");
  } else {
    setProperty("image4", "image", "icon://fa-hand-scissors-o");
    setText("btnwin", "It's a Tie");
  }
  setScreen("screen2");
});
