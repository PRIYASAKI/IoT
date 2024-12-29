import React, { useState } from 'react';

const quizQuestions = [
    {
        question: "What is the purpose of the `if` statement in Python?",
        options: ["To declare a variable", "To check a condition", "To loop through a sequence", "To define a function"],
        correctAnswer: 1,
    },
    {
        question: "Which statement is used to check multiple conditions in Python?",
        options: ["if", "elif", "else", "for"],
        correctAnswer: 1,
    },
    {
        question: "What happens if none of the conditions in `if` or `elif` are True?",
        options: ["The program crashes", "The code inside the `else` block is executed", "The code inside the `elif` block is executed", "The loop is terminated"],
        correctAnswer: 1,
    }
    
    
    
];

const Conditional = () => {
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

export default Conditional;
