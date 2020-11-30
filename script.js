
var beethoven = $("#beethoven-sound")[0];
      
    $("#beethoven-button").mouseenter(function() {
        beethoven.currentTime = 0;
        beethoven.play();
    });
        $("#beethoven-button").mouseleave(function() {
            beethoven.pause();
    });