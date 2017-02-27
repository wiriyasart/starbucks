"use strict";

var addbutton = document.getElementById("addbutton");
addbutton.addEventListener("click", function() {
  var boxes = document.getElementById("boxes");
  var clone = boxes.firstElementChild.cloneNode(true);
  boxes.appendChild(clone);
});