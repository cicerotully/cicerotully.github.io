var icon = document.getElementsByClassName('iconify');
var dropdown = document.getElementsByClassName('dropdown-content');

var i;

for(var i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", function() {
    if(event.target == icon[0]) {
      if (dropdown[0].style.display == "none"){
        dropdown[0].style.display = "block";
      } else {
        dropdown[0].style.display = "none";
      }
    }
    if(event.target == icon[1]) {
      if (dropdown[1].style.display == "none"){
        dropdown[1].style.display = "block";
      } else {
        dropdown[1].style.display = "none";
      }
    }
    if(event.target == icon[2]) {
      if (dropdown[2].style.display == "none"){
        dropdown[2].style.display = "block";
      } else {
        dropdown[2].style.display = "none";
      }
    }
  })
}
