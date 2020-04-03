module.exports = function(sequelize, DATATYPES) {
  var Questions = sequelize.define("Questions", {
    question: {
      type: DATATYPES.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    answer: {
      type: DATATYPES.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  Questions.associate = function(models) {
    Questions.belongsTo(models.Quizzes, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Questions;
};
