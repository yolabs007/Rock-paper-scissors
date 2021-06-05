# Rock-paper-scissors

![RPS](https://github.com/yolabs007/Rock-paper-scissors/blob/54d99ee4f6340aa35984cd16efd40f8926bbef1d/rock%20paper%20scissors.jpg)

This is a simple repository of rock paper and scissors game
<p>Go to App-lab and start a new project </p><p>1. Create the main Screen as shown in the picture. </p><p>I  have selected the picture from google. You can pick your own </p><p>2. Setup your Screen one and screen -2 </p><p>I am skipping here the simple procedure of how to design a beautiful screen. please follow our  You-Tube Videos  for step by step understanding  - <a href="https://www.youtube.com/channel/UClc0WE7OwJy9NpszIGeSsCA">Video</a></p><p>Also, I am sharing the complete project for quick access( <a href="https://studio.code.org/projects/applab/_QI6ZscaVoVQTy6K5svLwW63FyqrtI36eM5_8m9T1sw">click here</a>)</p>

<p>There are three conditions</p><p>1. You Choose Rock </p><p>2. You Choose paper</p><p>3. You Choose Scissors for all three conditions, you need to write the code. I have provided the <a href="https://studio.code.org/projects/applab/_QI6ZscaVoVQTy6K5svLwW63FyqrtI36eM5_8m9T1sw">link to the project</a> as well as a screenshot of the code. As it is block-based code can not  </p>


```JAVASCRIPT

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

```
