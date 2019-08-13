$(document).ready(function() {
  
  var targetNumber = "";
  var targetNumberArray = [];
  var crystalNumberOptions = [];
  var blueCrystalValue = "";
  var orangeCrystalValue = "";
  var greenCrystalValue = "";
  var pinkCrystalValue = "";
  var totalScore = "";
  var totalScoreDisplayed = parseInt(totalScore);

  for (var i = 19; i <= 200; i++) {
    targetNumberArray.push(i);
    console.log(targetNumberArray.length)
  }

  for (var i = 1; i <= 12; i++) {
    crystalNumberOptions.push(i);
    console.log(crystalNumberOptions.length)
  }

    targetNumber = targetNumberArray[Math.floor(Math.random()*targetNumberArray.length)];
    blueCrystalValue = crystalNumberOptions[Math.floor(Math.random()*crystalNumberOptions.length)];
    orangeCrystalValue = crystalNumberOptions[Math.floor(Math.random()*crystalNumberOptions.length)];
    greenCrystalValue = crystalNumberOptions[Math.floor(Math.random()*crystalNumberOptions.length)];
    pinkCrystalValue = crystalNumberOptions[Math.floor(Math.random()*crystalNumberOptions.length)];

    $("#blueCrystalValue").text(blueCrystalValue)
    $("#orangeCrystalValue").text(orangeCrystalValue)
    $("#greenCrystalValue").text(greenCrystalValue)
    $("#pinkCrystalValue").text(pinkCrystalValue)
    $("#random-number").text(targetNumber)
    $("#total-score").text(totalScoreDisplayed)

    $("#blue-crystal").on("click", function() {
      blueCrystalValueInt = parseInt(blueCrystalValue)
      totalScore += blueCrystalValueInt;
      console.log(totalScore)
    }); 
    
  

    
});
