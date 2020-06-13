var boxes = $(".click-box");
var body = $("body");

body.mouseup(mUp);

boxes.mouseover(clickedToggle);
boxes.mousedown(mDown);

var globalMouse = false;
var filling = false;

function mDown() {
  globalMouse = true;
  if (getComputedStyle(this).backgroundColor != "rgb(0, 0, 0)") {
    filling = true;
  } else {
    filling = false;
  }
  clickOperator(this);
}

function mUp() {
  globalMouse = false;
}

function clickedToggle() {
  clickOperator(this);
}

function clickOperator(obj) {
  if (globalMouse && obj.classList.contains("click-box")) {
    if (filling) {
      obj.classList.remove("unclicked-box");
      obj.classList.add("clicked-box");
    } else {
      obj.classList.remove("clicked-box");
      obj.classList.add("unclicked-box");
    }
  }
}
