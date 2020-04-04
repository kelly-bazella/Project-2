var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  app.get("/api/quizzes", function(req, res) {
    db.Quizzes.findAll({}).then(function(dbQuizzes) {
      res.json(dbQuizzes);
    });
  });

  app.post("/api/quizzes", function(req, res) {
    db.Quizzes.create({
      category: req.body.category,
      title: req.body.title,
      numberOfQuestions: req.body.numberOfQuestions
    })
      .then(function(dbQuizzes) {
        res.json(dbQuizzes);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.post("/api/createquiz", function(req, res) {
    console.log(req.body);

    db.Quizzes.create({
      title: req.body.title,
      category: req.body.category,
      numberOfQuestions: 3
    }).then(function(results) {
      res.json(results);
    });
  });

  app.delete("/api/quizzes/:id", function(req, res) {
    db.Quizzes.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbQuizzes) {
      res.json(dbQuizzes);
    });
  });

  app.put("/api/quizzes/:id", function(req, res) {
    db.Quizzes.update(
      {
        category: req.body.category,
        title: req.body.title
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(dbQuizzes) {
      res.json(dbQuizzes);
    });
  });
  app.get("/api/questions", function(req, res) {
    db.questions.findAll({}).then(function(dbQuestions) {
      res.json(dbQuestions);
    });
  });

  app.post("/api/questions", function(req, res) {
    db.questions
      .create({
        question: req.body.question,
        answer: req.body.answer,
        quizId: req.body.quizId
      })
      .then(function(dbQuestions) {
        res.json(dbQuestions);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.delete("/api/questions/:id", function(req, res) {
    db.questions
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbQuestions) {
        res.json(dbQuestions);
      });
  });

  app.put("/api/questions/:id", function(req, res) {
    db.questions
      .update(
        {
          question: req.body.question,
          answer: req.body.answer
        },
        {
          where: {
            id: req.body.id
          }
        }
      )
      .then(function(dbQuestions) {
        res.json(dbQuestions);
      });
  });
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then;
    res.end();
    // .then(function() {
    //   res.redirect(307, "/api/login");
    // })
    // .catch(function(err) {
    //   res.status(401).json(err);
    // });
  });
  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  app.get("/api/currentquiz", function(req, res) {
    db.Quizzes.findOne({
      where: {
        title: req.query.title
      },
      include: [db.Questions]
    }).then(function(quizzes) {
      res.json(quizzes);
    });
  });

  app.get("/api/takequiz", function(req, res) {
    db.Quizzes.findAll({}).then(function(allQuizzes) {
      res.json(allQuizzes);
    });
  });
};
