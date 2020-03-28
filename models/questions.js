module.exports = function(sequelize, DATATYPES) {
  var Questions = sequelize.define("questions", {
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
    Questions.belongsTo(models.quizzes, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Questions;
};
