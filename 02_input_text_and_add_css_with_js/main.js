
function use_name() {
    var name = document.getElementById("input_name").value;
        $("#pre_name").css("display", "none");
    if (name == 'puppy') {
        $("#welcome").css("display", "none");
        $("#puppy").css("display", "block");
    } else {
        $("#welcome").html("This little corner of the internet was made just for " + name + ".");
        $("#welcome_img").css("display", "block");
    }
}
