var colorWell
var defaultColor = "#0000ff";

window.addEventListener("load", choosecolor, false);
function choosecolor() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", changecolor, false);
    colorWell.select();
  }
  function changecolor(e) {
    var p = document.querySelector("p");
  
    if (p) {
      p.style.color = e.target.value;
    }
  }
    function fontsize() {
        var p =document.querySelector("p");
        var Num=document.getElementById("Num");
        p.style.fontsize=Num.value;
       
      }
  
 
   
  function fontfamily(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.querySelector("p").style.fontFamily = listValue;
  }