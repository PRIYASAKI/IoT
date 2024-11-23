import React, { useState } from 'react';

const quizQuestions = [
    {
        question: "What is a dictionary in Python?",
        options: ["An ordered list of values", "An unordered collection of key-value pairs", "A type of set", "A fixed data structure"],
        correctAnswer: 1,
    },
    {
        question: "How do you create a dictionary in Python?",
        options: [
            "my_dict = [key1: value1, key2: value2]", 
            "my_dict = {key1: value1, key2: value2}", 
            "my_dict = (key1: value1, key2: value2)", 
            "my_dict = <key1: value1, key2: value2>"
        ],
        correctAnswer: 1,
    },
    {
        question: "Which method is used to access the value associated with a specific key in a dictionary?",
        options: ["get()", "access()", "find()", "index()"],
        correctAnswer: 0,
    },
    
    
];

const Dictionary = () => {
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

export default Dictionary;
