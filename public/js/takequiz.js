$(document).ready(function() {
  $(".take-random-quiz").on("click", function() {
    //take user to random quiz to complete
  });

  $(".take-quiz").on("click", function() {
    $.get("/currentquiz/:id", function(data) {
      console.log(data);
      var responseArray = [];
      for (var i = 0; i < data.length; i++) {
        responseArray.push(data);
        console.log(responseArray[i]);
      }
    });
  });

  //take the index number, find it in database and present user with quiz
});
