import React, { useState } from 'react';

const quizQuestions = [
    {
        question: "What is a set in Python?",
        options: ["An ordered collection of elements", "An unordered collection of unique elements", "A data type for fixed values", "A list of numbers"],
        correctAnswer: 1,
    },
    {
        question: "Which of the following correctly creates a set in Python?",
        options: ["my_set = [1, 2, 3]", "my_set = {1, 2, 3}", "my_set = (1, 2, 3)", "my_set = <1, 2, 3>"],
        correctAnswer: 1,
    },
    {
        question: "What happens if you try to add a duplicate element to a set?",
        options: ["It raises an error", "It adds the duplicate at the end", "It overwrites the existing element", "It ignores the duplicate"],
        correctAnswer: 3,
    },
    
    
];

const Set = () => {
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

export default Set;
