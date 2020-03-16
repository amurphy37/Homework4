function printHighscores() {
  // either get scores from localstorage or set to empty array
  var highScores = localStorage.getItem("highScores") || "[]"
  console.log(highScores);
  var JSONhighScores = JSON.parse(highScores);
  console.log(JSONhighScores);

// sort highscores by score property in descending order
  var sortedScores = JSONhighScores.sort(function(a,b) {return b.score-a.score});
  console.log(sortedScores);
  
// Print to page
   for (i=0; i<sortedScores.length; i++) {

    var listItem = document.createElement('li');
    var listText = document.createTextNode("test");
    listItem.appendChild(listText);
     document.getElementById("highScores").appendChild(listItem);
   } 

}

printHighscores()

function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}


