module.exports = function(sequelize, DATATYPES) {
  var Quizzes = sequelize.define('quizzes', {
    category: {
      type: DATATYPES.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    title: {
      type: DATATYPES.STRING,
      allowNull: false
    },
    numberOfQuestions: {
      type: DATATYPES.INTEGER,
      allowNull: false
    }
  });
  return Quizzes;
};
