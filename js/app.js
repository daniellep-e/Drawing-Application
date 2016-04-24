//Problem: No user interaction causes change to application
//Solution: When user interacts cause change appropriately

var color = $(".selected").css("background-color");
var context = $canvas[0].getContext("2d");
var $canvas = $("canvas");
var lastEvent;
var mouseDown = false;

//When clicking on control list items
$(".controls").on("click", "li", function() {
  //Delselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color here
  color = $(this).css("background-color");
});

//When "New Color" button is clicked
$("#revealColorSelect").click(function(){
  //Show color select or Hide color select
  changeColor();
  $("#colorSelect").toggle();
});

 //Update the New Color Span
function changeColor() {
  var r = $("#red").val();
  var r = $("#green").val();
  var r = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g  + ", " + b + ")");
}

//When Color Sliders change
$("input[type=range]").change(changeColor);

//When "Add Color" is clicked
$("#addNewColor").click(function() {
  //Append the color to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
    //Select New Color
  $newColor.click();
});

//On Mouse events on the Canvas
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e) {
    //Draw lines
  if (mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX,           lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
   mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});














