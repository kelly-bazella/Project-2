module.exports = function(sequelize, DATATYPES) {
  var Quizzes = sequelize.define("Quizzes", {
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

  Quizzes.associate = function(models) {
    Quizzes.hasMany(models.Questions, {
      onDelete: "cascade"
    });
  };
  return Quizzes;
};
