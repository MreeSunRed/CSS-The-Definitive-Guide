function bigpicready() {
  if (!document.getElementsByClassName("bigpic")) return false;
  var buttom = document.getElementsByClassName("bigpic");
  var pic = document.getElementById("bigpicture");
  if (!pic.style.left) {
    pic.style.left = "0px";
  }
  if (!pic.style.top) {
    pic.style.top = "0px";
  }
  buttom[0].onclick = function () {
      moveElement("bigpicture", parseInt(pic.style.left)+173, 0, 1);
      position = position - 1;
  };
  buttom[1].onclick = function () {
    moveElement("bigpicture", parseInt(pic.style.left) - 173, 0, 1);
    position = position + 1;
  };
}
var pic_position = 1;
addLoadEvent(bigpicready());
