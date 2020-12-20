let count = 0;
function showMenu() {
  count++;
  if (count % 2 == 0) {
    document.getElementById("mbMenu").style.display = "none";
  } else {
    document.getElementById("mbMenu").style.display = "block";
  }
}
