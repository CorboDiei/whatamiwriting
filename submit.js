var submit = $("#submit");
var clear = $("#clear");

submit.mousedown(submitF);
clear.mousedown(clearF);

function clearF() {
  for (var i = 0; i < dim; i++) {
    for (var j = 0; j < dim; j++) {
      var curBox = $("#box-" + i + "-" + j);
      if (curBox.hasClass("clicked-box")) {
        curBox.removeClass("clicked-box").addClass("unclicked-box");
      }
    }
  }
}

function submitF() {
  $.post("", (data) => {
    $.
  })
}
