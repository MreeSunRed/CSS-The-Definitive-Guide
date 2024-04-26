function moveElement(element_id, tarx, tary, interval) {
  var elem = document.getElementById(element_id);
  var px = parseInt(elem.style.left);
  var py = parseInt(elem.style.top);
  if (elem.movement) {
    clearTimeout(elem.movement);
  }
  var dist;
  if (px == tarx && py == tary) return true;
  if (px + tarx >= 173 || px + tarx < -1100) return true;
    if (px > tarx) {
      dist = Math.ceil((px - tarx) / 10);
      px = px - dist;
    }
  if (px < tarx) {
    dist = Math.ceil((px - tarx) / -10);
    px = px + dist;
  }
  if (py < tary) {
    dist = Math.ceil((py - tary) / -10);
    py = py + dist;
  }
  if (py > tary) {
    dist = Math.ceil((py - tary) / 10);
    py = py - dist;
  }
  elem.style.top = py + "px";
  elem.style.left = px + "px";
  var repeat =
    "moveElement('" +
    element_id +
    "'," +
    tarx +
    "," +
    tary +
    "," +
    interval +
    ")";
  elem.movement = setTimeout(repeat, interval);
}
