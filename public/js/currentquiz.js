var db = require("../../models");
var score = 0;
var currentQuestion = 0;

$(document).ready(function() {
  $.get("/api/currentquiz").then(function(data) {
    $("#quiz-title").text(data.title);
  });

  function checkAnswer() {
    var question = db.questions[currentQuestion];
    var out = $(".validate").val();
    console.log(out);
    console.log(question.answer);
    if (out === question.answer) {
      score++;
      console.log(score);
    }
  }
  $(".submit-quiz").on("click", function(event) {
    event.preventDefault();
    checkAnswer();
  });
});
