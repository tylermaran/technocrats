// when user clicks add-btn
$("#run-search").on("click", function(event) {
  event.preventDefault();

  // make a newUser obj
  var newUser = {
    email_id: $("#email_id").val().trim(),
    pass_word: $("#pass_word").val().trim()
  }

  // send an AJAX POST-request with jQuery
  $.post("api/new")
    .then(function(data) {
      alert("User added.");
  });

  $("#email_id").val("");
  $("#pass_word").val("");

});
