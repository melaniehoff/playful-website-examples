$( document ).ready(function() {
    console.log( "ready!" );

    var morning = "morning.gif";
    var afternoon = "afternoon.gif";
    var night = "night.gif";


    function checkHour() {
        var d = new Date();
        // var n = d.getHours();
        var n = 11;

        console.log(n)
      if(n <= 11){
          console.log("It's the morning!")
          $('body').css('background-image', 'url(' + morning + ')');
        }
        if(n >= 12 && n < 16){
          console.log("It's the afternoon!")
          $('body').css('background-image', 'url(' + afternoon + ')');
        }
        if(n >= 16){
          console.log("It's the evening!")
          $('body').css('background-image', 'url(' + night + ')');
        }

    }

    checkHour();
});
