$(document).ready(function() {
  $.get("/api/currentquiz").then(function(data) {
    $("#quiz-title").text(data.title);
  });
});
