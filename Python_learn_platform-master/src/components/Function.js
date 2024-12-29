import React, { useState } from 'react';

const quizQuestions = [
    {
        question: "What is a function in Python?",
        options: ["A reusable block of code", "A type of variable", "A data structure", "A loop structure"],
        correctAnswer: 0,
    },
    {
        question: "How do you define a function in Python?",
        options: ["def function_name()", "function def()", "function_name = def()", "def: function_name()"],
        correctAnswer: 0,
    },
    {
        question: "What does the 'return' keyword do in a Python function?",
        options: ["It terminates the function", "It starts the function", "It returns a value from the function", "It prints the function result"],
        correctAnswer: 2,
    }
    
    
];

const Function = () => {
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

export default Function;
