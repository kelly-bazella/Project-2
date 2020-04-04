$(".dropdown-trigger").dropdown();

$(".create-quiz").on("click", function(event) {
  event.preventDefault();
  var newQuiz = {
    title: $("#quiz_title")
      .val()
      .trim(),
    category: $("#category-dropdown a").text()
  };
  console.log(newQuiz);
});
