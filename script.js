clickCount = 0;
firstColor = "";
secondColor = "";


$(document).ready(function() {
  
  // STEP ONE //
  // attach a click event listener to all elements with the class picture-box
  // we need to execute the function turnSquare every time a square is clicked
  // but we need to pass a parameter $(this) to the turnSquare function
  // to do this, we need to use the .click(function() { turnSquare( $(this) ) }) format
  $(".picture-box").click(function () {
    turnSquare( $(this) );
  });
  
  
});


function turnSquare(squareObject)
{
  
  // STEP TWO
  // increment (add) 1 to the variable clickCount
  // it will look something like this clickCount = 

clickCount= clickCount+1;
   
  $("#clickCount").html(clickCount);
  
  // this line gets the data attribute that holds the hidden square color
  secretSquareColor = squareObject.data("color");
  squareObject.css("background-color", secretSquareColor);
   
  // STEP THREE
  // create a conditional that says 
  // if the click count equals 1, set the variable firstColor to the value of secretSquareColor
  // if the click count equals 2, set the variable secondColor to the value of secretSquareColor and then execute the function checkMatches
  
  
}



function checkMatches(){
  
  // STEP FOUR
  //create a conditional that says if firstColor is the same as secondColor, alert to the user "You Win!"
  // else alert to the user "Try again!"
  
  
  

  // STEP FIVE
  //execute the function resetSquares
  
  resetSquares();

}


function resetSquares()
{
  // STEP SIX
  // reset the clickCount variablel to 0
  
  
  
  $("#clickCount").html(clickCount);
  
  
  // STEP SEVEN
  // change all elements with the class picture-box to have a background color of #cccccc
  

}