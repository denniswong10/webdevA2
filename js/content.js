// Nagivation-Menu
document.querySelector("#iconMenu").addEventListener("click", function() {
  var x = document.getElementById("navMenu");
  if (x.className === "nagivation_menu") {
    x.className += " responsive";
  } else {
    x.className = "nagivation_menu";
  }
});