$( document ).ready(function() {
    console.log( "ready!" );

    morning = "morning.gif";
    afternoon = "afternoon.gif";
    night = "night.gif";


    function checkHour() {
        var d = new Date();
        var n = d.getHours();

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
