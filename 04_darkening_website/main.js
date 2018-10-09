var i = "255";

setInterval(function() {
  $("body").css("background-color", "rgb("+i+","+i+","+i+")");
  i = Number(i);
  i -= 1;
  i.toString();
  console.log(i)
}, 300);
