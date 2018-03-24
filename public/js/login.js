$(document).ready(function() {
  console.log("Login.js Loaded!");

  // when user clicks "Login"
  //======================================================
  $("#run-search").on("click", function(event) {
    event.preventDefault();
    var searchedUser = $("#email_id").val().trim();
    var searchedPass = $("#pass_word").val().trim();
    searchedUser = searchedUser.replace(/\s+/g, "").toLowerCase();

    if (searchedUser === "" || searchedPass === "") {

      return;
    }

    console.log("The Searched email is: " + searchedUser);

    // get request from the api
    $.get("/api/" + searchedUser, function(data) {

      if (!data) {
        // No matching email in the database
        $("#email_id").val("");
        $("#pass_word").val("");
        return;
      }
      if (data.pass_word === searchedPass) {
        console.log("Correct password");
        var mycookie = "username=" + data.email_id;
        document.cookie = mycookie;
        window.location = "/summary";
      } else {
        $("#pass_word").val("");
      }

    });

  });
  $(".modal-trigger").on("click", function() {
    console.log('clicked trigger');
    // alert("hey")

    $('#modal1').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      // ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
      //   alert("Ready");
      //   console.log(modal, trigger);
      // },
      // complete: function() {
      //   alert('Closed');
      // } // Callback for Modal close
    });
  });

  // when user clicks "Enroll"
  //======================================================
  $("#enrollBtn").on("click", function(event) {
    event.preventDefault();

    $('#modal1').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 500, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      complete: function() {
        console.log('modal sucess');
        $('#modal1').modal('close');
      }
    });

  });

});


$(".formValidate").validate({
  rules: {
    fname: {
      required: true,
      minlength: 2
    },
    lname: {
      required: true,
      minlength: 2
    },
    email: {
      required: true,
      email: true
    },
    password: {
      required: true,
      minlength: 5
    },
    confirm_password: {
      required: true,
      minlength: 5,
      equalTo: "#password"
    }
  },

  //For custom messages
  messages: {
    fname: {
      required: "Please enter your first name.",
      minlength: "You sure you're named with one letter?"
    },
    lname: {
      required: "Please enter your last name.",
      minlength: "You sure you're named with one letter?"
    },
    email: {
      required: "Please enter your email address.",
      email: "Please enter a valid email address."
    },
    pass: {
      required: "Please enter a password.",
      minlength: "Password must be atleast 5 characters."
    },
    confirm_pass: {
      required: "Please confirm your password.",
      minlength: "Password must be atleast 5 characters.",
      equalTo: "Password does not match."
    }
  },
  errorElement: 'div',
  errorPlacement: function(error, element) {
    var placement = $(element).data('error');
    if (placement) {
      $(placement).append(error)
    } else {
      error.insertAfter(element);
    }
  },
  submitHandler: function() {
    // alert("Submitted!");
    var newUser = {
      email_id: $("#email").val().trim(),
      pass_word: $("#password").val().trim(),
      last_name: $("#fname").val().trim(),
      first_name: $("#lname").val().trim()
    }


    $.post("/api/new", newUser).then(function(data) {

      // $("#enrollBtn").attr("href", "mySummary.html");
      console.log('posted');
      window.location.href = "/summary";


    });
  }

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


//===============================================
// TESTING FRAMEWORK
var titleize = function(name) {
  // Feel free to add more.
  var titles = ["mr", "dr", "ms", "mrs"];
  var names = name.split(" ");

  // Transform to guarantee consistency
  for (var i = 0; i < names.length; i += 1) {
    name = names[i];

    names[i] = titleCase(name.toLowerCase());
  }

  // Check if title needs transformation
  var potentialTitle = names[0];
  if (titles.includes(potentialTitle.toLowerCase())) {
    var length = potentialTitle.length;

    if (potentialTitle[length - 1] !== ".") {
      names[0] = potentialTitle + ".";
    }
  }

  return names.join(" ");
};

// Helper function, to keep titleize nice and clean.
function titleCase(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

module.exports = titleize;
