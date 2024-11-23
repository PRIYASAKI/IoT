import React, { useState } from 'react';

const quizQuestions = [
    {
        question: "What is a list in Python?",
        options: ["A mutable string", "An ordered collection of items", "A function", "A module"],
        correctAnswer: 1,
    },
    {
        question: "How are lists created in Python?",
        options: ["my_list = (1, 2, 3)", "my_list = {1, 2, 3}", "my_list = [1, 2, 3]", "my_list = <1, 2, 3>"],
        correctAnswer: 2,
    },
    {
        question: "Which of the following is true about lists in Python?",
        options: ["Lists are immutable", "List elements can't be changed", "Lists are mutable", "Lists can only store integers"],
        correctAnswer: 2,
    }
    
];

const List = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizComplete, setQuizComplete] = useState(false);

  const handleOptionChange = (questionIndex, optionIndex) => {
    setSelectedAnswers(prevState => ({
      ...prevState,
      [questionIndex]: optionIndex,
    }));
  };

  const handleQuizSubmission = (e) => {
    e.preventDefault();
    const allCorrect = quizQuestions.every((q, index) => 
      selectedAnswers[index] === q.correctAnswer
    );
    setQuizComplete(allCorrect);
  };

  return (
    <div>
      <h2>List Quiz</h2>
      <form onSubmit={handleQuizSubmission}>
        {quizQuestions.map((q, index) => (
          <div key={index}>
            <p>{q.question}</p>
            {q.options.map((option, optionIndex) => (
              <label key={optionIndex}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={optionIndex}
                  onChange={() => handleOptionChange(index, optionIndex)}
                  checked={selectedAnswers[index] === optionIndex}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {quizComplete && <p>Quiz Completed! Proceed to the next stage.</p>}
      {!quizComplete && quizComplete !== null && <p>Some answers are incorrect. Try again!</p>}
    </div>
  );
};

export default List;
