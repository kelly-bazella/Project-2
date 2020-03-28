DROP DATABASE IF EXISTS quiz_db;
CREATE DATABASE quiz_db;
USE quiz_db;

CREATE TABLE quizzes
(
    QuizID INT NOT NULL
    AUTO_INCREMENT,
    category VARCHAR
    (255) NOT NULL,
    title VARCHAR
    (255) NOT NULL,
    PRIMARY KEY
    (QuizID)
);

    CREATE TABLE questions
    (
        QuestionID INT NOT NULL
        AUTO_INCREMENT,
    question VARCHAR
        (255) NOT NULL,
    answer VARCHAR
        (255) NOT NULL,
    QuizID INT,
    PRIMARY KEY
        (QuestionID),
    FOREIGN KEY
        (QuizID) REFERENCES quizzes
        (QuizID)
);