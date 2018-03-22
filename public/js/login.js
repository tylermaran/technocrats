$( document ).ready(function() {
  console.log("Login.js Loaded!");

  // when user clicks "Login"
  //======================================================
  $("#run-search").on("click", function(event) {
    event.preventDefault();
    var searchedUser = $("#email_id").val().trim();
    var searchedPass = $("#pass_word").val().trim();
    searchedUser = searchedUser.replace(/\s+/g, "").toLowerCase();

    if (searchedUser==="" || searchedPass==="") {
      alert("You must enter all forms");
      return;
    }

    console.log("The Searched email is: " + searchedUser);

    // get request from the api
    $.get("/api/" + searchedUser, function(data) {

      if (!data) {
        // No matching email in the database
        alert("Sorry, your email doesn't match what we have on file.");
        $("#email_id").val("");
        $("#pass_word").val("");
        return;
      } 
      if (data.pass_word===searchedPass) {
        console.log("Correct password");
        window.location = "/summary";
      }
      else {
        alert("Sorry, that password doesn't match " + data.email_id);
        $("#pass_word").val("");
      }

    });

  });


  // when user clicks "Enroll"
  //======================================================
  $("#enrollBtn").on("click", function(event) {
    event.preventDefault();

    // make a newUser obj
    var newUser = {
      email_id: $("#email_id").val().trim(),
      pass_word: $("#pass_word").val().trim(),
      last_name: "LastName",
      first_name: "FirstName"
    }
    
   
    $.post("/api/new", newUser).then(function(data) {

      alert("New user added!");
      $("#enrollBtn").attr("href", "mySummary.html");

    });
    

    $("#email_id").val("");
    $("#pass_word").val("");

  });

});



//Video Background
//======================================================
// scaleVideoContainer();

// initBannerVideoSize('.video-container .poster img');
// initBannerVideoSize('.video-container .filter');
// initBannerVideoSize('.video-container video');

// $(window).on('resize', function() {
//     scaleVideoContainer();
//     scaleBannerVideoSize('.video-container .poster img');
//     scaleBannerVideoSize('.video-container .filter');
//     scaleBannerVideoSize('.video-container video');
// });

// });

// function scaleVideoContainer() {

// var height = $(window).height() + 5;
// var unitHeight = parseInt(height) + 'px';
// $('.homepage-hero-module').css('height',unitHeight);

// }

// function initBannerVideoSize(element){

// $(element).each(function(){
//     $(this).data('height', $(this).height());
//     $(this).data('width', $(this).width());
// });

// scaleBannerVideoSize(element);

// }

// function scaleBannerVideoSize(element){

// var windowWidth = $(window).width(),
// windowHeight = $(window).height() + 5,
// videoWidth,
// videoHeight;

// // console.log(windowHeight);

// $(element).each(function(){
//     var videoAspectRatio = $(this).data('height')/$(this).data('width');

//     $(this).width(windowWidth);

//     if(windowWidth < 1000){
//         videoHeight = windowHeight;
//         videoWidth = videoHeight / videoAspectRatio;
//         $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

//         $(this).width(videoWidth).height(videoHeight);
//     }

//     $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

// });
// }
