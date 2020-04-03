$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
  function renderUserQuizzes() {
    $.ajax("/api/quizzes", {
      method: "GET"
    }).then(function(res, req) {
      var username = req.body.name;
      var quiz = req.body.title;
      $("#user-name").text(username);
      $(".user-quizzes").text(quiz);
    });
  }
  function renderUserScores() {
    $.ajax("/api/quizzes", {
      method: "GET"
    }).then(function(res, req) {
      var pastQuiz = req.body.title;
      var pastScore = req.body.score;
      $(".past-quiz").text(pastQuiz);
      $(".past-quiz-score").text(pastScore);
    });
  }
  renderUserQuizzes();
  renderUserScores();
});
