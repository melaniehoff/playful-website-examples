function use_name() {
  var name = document.getElementById("input_name").value;

  $("#name_prompt").css("display", "none");

  if (name == 'puppy') {
    $("#welcome").css("display", "none");
    $("#puppy").css("display", "block");
  } else {
    $("#welcome").html("This little corner of the internet was made just for " + name + ".");
    $("#welcome_img").css("display", "block");
  }
}


function revert() {
  $("#input_name").val("");
  $("#welcome").html("This little corner of the web was made just for you.");
  $("#welcome_img").css("display", "none");
  $("#puppy").css("display", "none");
  $("#welcome").css("display", "block");
  $("#name_prompt").css("display", "block");
}
