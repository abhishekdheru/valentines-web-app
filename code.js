var endStr = ",\nyou love me and I love you ";
var r = " are ";
onEvent("nextBtn", "click", function() {
  var noun1 = getText("noun1Input");
  var adj1 = getText("adjective1Input");
  var noun2 = getText("noun2Input");
  var adj2 = getText("adjective2Input");
  var noun3 = getText("noun3Input");
  var result = noun1.toLowerCase() + r + adj1.toLowerCase() + ",\n " + noun2.toLowerCase() + r + adj2.toLowerCase() + endStr + noun3.toUpperCase() +"!" ;
  setText("resultText", result);
  setScreen("resultScreen");
});
onEvent("againBtn", "click", function(){
setText("noun1Input", "");
setText("noun2Input", "");
setText("noun3Input", "");
setText("adjective1Input", "");
setText("adjective2Input", "");
setScreen("startScreen");
});
