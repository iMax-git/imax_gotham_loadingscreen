function toggle_right() {
  var y = document.getElementById("develop");
  var u = document.getElementById("icon_r")
  if (u.className === "fas fa-minus-circle") {
    u.className = "fas fa-clipboard-list";
    u.style.color = "white";
    y.style.display = "none";
  } else {
    u.className = "fas fa-minus-circle"
    u.style.color = "red";
    y.style.display = "block";
  }
} 

function toggle_left() {
  var x = document.getElementById("develop_l");
  var z = document.getElementById("icon_l")
  if (z.className === "fas fa-minus-circle"){
    z.className = "fas fa-info-circle";
    z.style.color = "white";
    x.style.display="none";
  } else {
    z.className = "fas fa-minus-circle";
    z.style.color = "red";
    x.style.display = "block";
  }
}