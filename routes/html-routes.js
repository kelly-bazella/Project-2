// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/homepage");
    }
    res.render(path.join(__dirname, "../views/login.handlebars"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/homepage", isAuthenticated, function(req, res) {
    res.render(path.join(__dirname, "../views/userhomepage.handlebars"));
  });

  // Each of the below routes just handles the HTML page that the user gets sent to.

  app.get("/takequiz", function(req, res) {
    db.Quizzes.findAll({}).then(function(quizzes) {
      var hbsQuizzes = {
        Quizzes: quizzes
      };
      console.log(hbsQuizzes);
      res.render("takequiz", hbsQuizzes);
    });
  });

  // app.get("/homepage", function(req, res) {
  //   res.render("userhomepage");
  // });

  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  app.get("/viewscores", function(req, res) {
    res.render("viewscores");
  });

  app.get("/createquiz", function(req, res) {
    res.render("createquiz");
  });

  app.get("/currentquiz/:id", function(req, res) {
    db.Quizzes.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Questions]
    }).then(function(quizzes) {
      var hbsQuizzes = {
        Quizzes: quizzes
      };
      console.log(hbsQuizzes);
      res.render("currentquiz", hbsQuizzes);
    });
  });
};


