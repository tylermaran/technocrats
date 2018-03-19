$( document ).ready(function() {
  console.log("hello!");

  // when user clicks "Login"
  //======================================================
  $("#run-search").on("click", function(event) {
    event.preventDefault();

    var searchedUser = email_id: $("#email_id").val().trim();
    searchedUser = searchedUser.replace(/\s+/g, "").toLowerCase();

    // send an AJAX GET-request
    $.get("api/" + searchedUser, function(data) {

      if (!data) {
        alert("Sorry, your email or password doesn't match what we have on file.");
      } else if (/*Check if password does NOT match*/){
        alert("Sorry, your email or password doesn't match what we have on file.");
      } else {

        //Open user's account page

      }


    })

    $("#email_id").val("");
    $("#pass_word").val("");

  });


  // when user clicks "Enroll"
  //======================================================
  $("#enrollBtn").on("click", function(event) {
    event.preventDefault();

    // make a newUser obj
    var newUser = {
      email_id: $("#email_id").val().trim(),
      pass_word: $("#pass_word").val().trim()
    }

    // send an AJAX POST-request with jQuery
    $.post("api/new")
    .then(function(data) {

      //Open new user's account page

    });

    $("#email_id").val("");
    $("#pass_word").val("");

  });



//Video Background
//======================================================
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
