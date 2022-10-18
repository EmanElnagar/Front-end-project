function myFunction(x) {
    if (x.matches) { // If media query matches
       icon.style.display = "block";
    // } else {
    //   document.icon.style.display = "none";
    // }
  }
}
  var x = window.matchMedia("(max-width: 900px)");
  var icon = document.querySelector('.icon');
  myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
