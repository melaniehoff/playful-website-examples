
$( document ).ready(function() {
    console.log( "ready!" );


var video = document.getElementById('video');
var source = document.createElement('source');

source.setAttribute('src', '1.mp4');

video.appendChild(source);
video.play();


});

function switchVid() {
    video.pause();

   source.setAttribute('src', '2.mp4');

    video.load();
    video.play();

};
