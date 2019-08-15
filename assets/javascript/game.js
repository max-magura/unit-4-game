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

  $("#random-number").text(targetNumber);
  $("#total-score").text(totalScore);
  $("win-number").text(wins);
  $("loss-number").text(losses);

  var blueCrystalValueInt = parseInt(blueCrystalValue)
  var orangeCrystalValueInt = parseInt(orangeCrystalValue)
  var greenCrystalValueInt = parseInt(greenCrystalValue)
  var pinkCrystalValueInt = parseInt(pinkCrystalValue)
  

    $("#blue-crystal").on("click", function clickCrystal() {
      totalScore += blueCrystalValueInt;
      $("#total-score").text(totalScore)
    }) 

    $("#orange-crystal").on("click", function clickCrystal() {
      totalScore += orangeCrystalValueInt;
      $("#total-score").text(totalScore)
    })

    $("#green-crystal").on("click", function clickCrystal() {
      totalScore += greenCrystalValueInt;
      $("#total-score").text(totalScore)
    })

    $("#pink-crystal").on("click", function clickCrystal() {
      totalScore += pinkCrystalValueInt;
      $("#total-score").text(totalScore)
      console.log(totalScore)

    })

    if (totalScore === targetNumber) {
      wins++;
      console.log(wins)
    }

    if (totalScore > targetNumber) {
      lossess++;
      alert("You lose")
    }

    console.log(totalScore)
});


         /*  
           var crystalValueInt = [blueCrystalValueInt, orangeCrystalValueInt,greenCrystalValueInt, pinkCrystalValueInt]
         
         $("#blue-crystal, #orange-crystal, #green-crystal, #pink-crystal").on("click", clickCrystal)
    
          function clickCrystal() {
          for (var i=0; i< crystalValueInt.length; i++)
          totalScore += crystalValueInt[i];
          $("#total-score").text(totalScore);
        }  
        */