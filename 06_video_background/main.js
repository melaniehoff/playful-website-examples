
$(document).ready(function() {

  var videoID = 'video_tag';
  var sourceID = 'video_source';
  var vid_array = ["vid_2.mp4","vid_3.mp4","vid_4.mp4","vid_5.mp4","vid_6.mp4"];

// var basic_array = [2,3];
//
// console.log(basic_array[0]);

console.log("vid array at index 10 = " + vid_array[10]) // DOES NOT EXIST

  var i = 0
  var new_vid = vid_array[i];

  $('#video_link').click(function(event) {
    $('#video_tag').get(0).pause();
    $('#'+sourceID).attr('src', new_vid);
    $('#'+videoID).get(0).load();
    i += 1;
    new_vid = vid_array[i];
    console.log(i)
    console.log(new_vid);
  });

});
