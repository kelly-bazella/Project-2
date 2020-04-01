var db = require("../../models");

module.exports = function(app) {
  app.get("/api/quizzes", function(req, res) {
    db.quizzes.findAll({}).then(function(dbQuizzes) {
      res.json(dbQuizzes);
    });
  });

  app.post("/api/quizzes", function(req, res) {
    db.quizzes.create({
      category: req.body.category,
      title: req.body.title
    })
      .then(function(dbQuizzes) {
        res.json(dbQuizzes);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.delete("/api/quizzes/:id", function(req, res) {
    db.quizzes.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbQuizzes) {
      res.json(dbQuizzes);
    });
  });

  app.put("/api/quizzes/:id", function(req, res) {
    db.quizzes.update(
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
    db.questions.create({
      question: req.body.question,
      answer: req.body.answer
    })
      .then(function(dbQuestions) {
        res.json(dbQuestions);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.delete("/api/questions/:id", function(req, res) {
    db.questions.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbQuestions) {
      res.json(dbQuestions);
    });
  });

  app.put("/api/questions/:id", function(req, res) {
    db.questions.update(
      {
        question: req.body.question,
        answer: req.body.answer
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(dbQuestions) {
      res.json(dbQuestions);
    });
  });
};
