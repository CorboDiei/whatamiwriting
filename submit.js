//jshint esversion:6

var submit = $("#submit");
var clear = $("#clear");
var inErr = false;

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
  $(".guess-text strong").text("");
}

function submitF() {
  if (!inErr) {
    var matBuild = "";
    var allZeros = true;
    for (var i = 0; i < dim; i++) {
      for (var j = 0; j < dim; j++) {
        if ($("#box-" + i + "-" + j).hasClass("clicked-box")) {
          allZeros = false;
          matBuild += "1";
        } else {
          matBuild += "0";
        }
      }
    }
    if (allZeros) {
      inErr = true;
      var drawBox = $(".draw-box");
      drawBox.removeClass("draw-box-ok").addClass("draw-box-err");
      setTimeout(() => {
        drawBox.removeClass("draw-box-err").addClass("draw-box-ok");
      }, 1300);
      inErr = false;
    } else {
      var data = {
        mat: matBuild,
      };
      $.post("/compute", data, (res) => {
        $(".guess-text strong").text(res);
      });
    }
  }
}
