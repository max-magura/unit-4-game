$(document).ready(function() {

  var targetNumber = "";
  var blueCrystalValue;
  var orangeCrystalValue;
  var greenCrystalValue;
  var pinkCrystalValue;
  var totalScore = 0;
  var wins = 0;
  var losses = 0;

  targetNumber = Math.floor(Math.random()* (200 - 19 + 1)) + 19;
  blueCrystalValue = Math.floor(Math.random()* (12 - 1 + 1)) + 1;
  orangeCrystalValue = Math.floor(Math.random()* (12 - 1 + 1)) + 1;;
  greenCrystalValue = Math.floor(Math.random()* (12 - 1 + 1)) + 1;
  pinkCrystalValue = Math.floor(Math.random()* (12 - 1 + 1)) + 1;

  var blueCrystalValueInt = parseInt(blueCrystalValue)
  var orangeCrystalValueInt = parseInt(orangeCrystalValue)
  var greenCrystalValueInt = parseInt(greenCrystalValue)
  var pinkCrystalValueInt = parseInt(pinkCrystalValue)

  $("#random-number").text(targetNumber);
  $("#total-score").text(totalScore);
  $("#win-number").text(wins);
  $("#loss-number").text(losses);

    $("#blue-crystal").on("click", function clickCrystal() {
      totalScore += blueCrystalValueInt;
      $("#total-score").text(totalScore)
      checkResults ()
    }) 

    $("#orange-crystal").on("click", function clickCrystal() {
      totalScore += orangeCrystalValueInt;
      $("#total-score").text(totalScore)
      checkResults ()
    })

    $("#green-crystal").on("click", function clickCrystal() {
      totalScore += greenCrystalValueInt;
      $("#total-score").text(totalScore)
      checkResults ()
    })

    $("#pink-crystal").on("click", function clickCrystal() {
      totalScore += pinkCrystalValueInt;
      $("#total-score").text(totalScore)
      checkResults ()
    })

    function checkResults () {
    if (totalScore === targetNumber) {
      wins++;
      $("#win-number").text(wins);
      alert("You win! :-)")
      reset ()
    }

    if (totalScore > targetNumber) {
      losses++;
      $("#loss-number").text(losses);
      alert("You lost :-(")
      reset() 
  }
}

function reset () {
 totalScore = 0;

 targetNumber = Math.floor(Math.random()* (200 - 19 + 1)) + 19;
 blueCrystalValue = Math.floor(Math.random()* (12 - 1 + 1)) + 1;
 orangeCrystalValue = Math.floor(Math.random()* (12 - 1 + 1)) + 1;;
 greenCrystalValue = Math.floor(Math.random()* (12 - 1 + 1)) + 1;
 pinkCrystalValue = Math.floor(Math.random()* (12 - 1 + 1)) + 1;

  blueCrystalValueInt = parseInt(blueCrystalValue)
  orangeCrystalValueInt = parseInt(orangeCrystalValue)
  greenCrystalValueInt = parseInt(greenCrystalValue)
  pinkCrystalValueInt = parseInt(pinkCrystalValue)

  $("#random-number").text(targetNumber);
  $("#total-score").text(totalScore);
  $("#win-number").text(wins);
  $("#loss-number").text(losses);
}
});

 /*  var crystalValueInt = [blueCrystalValueInt, orangeCrystalValueInt,greenCrystalValueInt, pinkCrystalValueInt]
         
  $("#blue-crystal, #orange-crystal, #green-crystal, #pink-crystal").on("click", clickCrystal)

   function clickCrystal() {
   for (var i=0; i< crystalValueInt.length; i++)
   totalScore += crystalValueInt[i];
   $("#total-score").text(totalScore);
   console.log(crystalValueInt[i])
   console.log(totalScore)
 }  

*/

       
  