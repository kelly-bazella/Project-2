$(".dropdown-trigger").dropdown();
$(document).ready(function() {
  $("select").formSelect();
  $(".create-quiz").on("click", function(event) {
    event.preventDefault();
    console.log("hey");
    var quizArray = [
      {
        question: $("#first_question").val(),
        answer: $("#first_answer").val()
      },
      {
        question: $("#second_question").val(),
        answer: $("#second_answer").val()
      },
      {
        question: $("#third_question").val(),
        answer: $("#third_answer").val()
      }
    ];
    console.log(quizArray);
    var newQuiz = {
      title: $("#quiz_title")
        .val()
        .trim(),
      category: $("#category-dropdown").val(),
      numberOfQuestions: 3,
      questions: quizArray
    };
    $.post("/api/createquiz", newQuiz, function(cb) {
      console.log(newQuiz);
      console.log(cb);
    });
  });
});
