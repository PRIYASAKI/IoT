import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Import Firebase database
import { doc, getDoc, setDoc } from "firebase/firestore"; // Import Firestore methods
import { useAuth } from './context/AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from React Router
import './ConditionalQuiz.css'; // Importing the CSS for animation and styling

const ConditionalQuiz = () => {
    const { user } = useAuth();
    const navigate = useNavigate(); // Initialize the navigate function
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60); // Set timer in seconds (e.g., 60 seconds for 1 minute)
    const [selectedAnswers, setSelectedAnswers] = useState({}); // Store selected answers for each question
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track the current question index
    const [previousScore, setPreviousScore] = useState(null); // Store the previous score
    const [canProceedToConditional, setCanProceedToConditional] = useState(false); // To determine if the user can proceed to Conditional

    // Define some sample questions and answers
    const questions = [
        {
            question: "What is the purpose of the `if` statement in Python?",
            options: [
                "To declare a variable", 
                "To check a condition", 
                "To loop through a sequence", 
                "To define a function"
            ],
            answer: "To check a condition"
        },
        {
            question: "Which of the following is used to check additional conditions after the `if` statement?",
            options: [
                "if", 
                "elif", 
                "else", 
                "for"
            ],
            answer: "elif"
        },
        {
            question: "Which statement in Python is executed when all previous conditions are False?",
            options: [
                "if", 
                "elif", 
                "else", 
                "return"
            ],
            answer: "else"
        },
        {
            question: "What is the purpose of the `else` statement in Python?",
            options: [
                "To handle the case when the condition is True", 
                "To check multiple conditions", 
                "To define a function", 
                "To execute code when all conditions are False"
            ],
            answer: "To execute code when all conditions are False"
        },
        {
            question: "Which operator is used to combine multiple conditions in an `if` statement?",
            options: [
                "and", 
                "or", 
                "not", 
                "all of the above"
            ],
            answer: "all of the above"
        }
        
    ];
   

    const passingScore = Math.ceil(questions.length * 0.7); // Passing score is 70%

    // Fetch the previous score from the database when the component mounts
    useEffect(() => {
        if (user) {
            const fetchPreviousScore = async () => {
                try {
                    const userScoreRef = doc(db, 'users', user.uid);
                    const userScoreDoc = await getDoc(userScoreRef);

                    if (userScoreDoc.exists()) {
                        const data = userScoreDoc.data();
                        setPreviousScore(data.conditionalScore || 0); // If no score exists, default to 0
                        if (data.conditionalScore >= passingScore) {
                            setCanProceedToConditional(true);
                        } else {
                            setCanProceedToConditional(false);
                        }
                    }
                } catch (error) {
                    console.error("Error fetching previous score:", error);
                }
            };

            fetchPreviousScore();
        }
    }, [user]);

    useEffect(() => {
        if (timeLeft > 0 && !submitted) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0 && !submitted) {
            handleQuizSubmit(); // Auto-submit when time is up
        }
    }, [timeLeft, submitted]);

    const handleAnswerChange = (questionIndex, option) => {
        setSelectedAnswers(prevState => ({
            ...prevState,
            [questionIndex]: option
        }));
    };

    const handleQuizSubmit = (event) => {
        if (event) event.preventDefault();

        let calculatedScore = 0;
        questions.forEach((question, index) => {
            const selectedAnswer = selectedAnswers[index];
            if (selectedAnswer === question.answer) {
                calculatedScore += 1;
            }
        });

        setScore(calculatedScore);
        setSubmitted(true);
        saveScoreToDatabase(calculatedScore);
    };

    const saveScoreToDatabase = async (calculatedScore) => {
        if (!user) return;

        try {
            const userScoreRef = doc(db, 'users', user.uid);
            await setDoc(userScoreRef, { conditionalScore: calculatedScore }, { merge: true });
            console.log("Score saved to database!");
        } catch (error) {
            console.error("Error saving score:", error);
        }
    };

    const retakeQuiz = () => {
        setScore(0);
        setSubmitted(false);
        setTimeLeft(60); // Reset timer
        setSelectedAnswers({}); // Reset selected answers
        setCurrentQuestionIndex(0); // Reset to the first question
    };

    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const goToPreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const getAppreciationMessage = () => {
        if (score >= passingScore) {
            return "Great job! You passed the quiz! 🎉";
        } else {
            return "Don't worry, keep practicing and try again! 💪";
        }
    };

    // Navigate back to the main page
    const handleBackToMainPage = () => {
        navigate('/home'); // Navigate to the home page
    };

    return (
        <div className="quiz-container">
            <h1>Conditional Quiz</h1>

            {/* Display Previous Score if available */}
            {previousScore !== null && (
                <p className="score-display">Your Previous Score: {previousScore} / {questions.length}</p>
            )}

            {!submitted && (
                <div className="timer">Time Left: {timeLeft} seconds</div>
            )}

            <form onSubmit={handleQuizSubmit}>
                {/* Display the current question */}
                <div className="question-container">
                    <h3>{questions[currentQuestionIndex].question}</h3>
                    {questions[currentQuestionIndex].options.map((option, optIndex) => (
                        <div key={optIndex}>
                            <input
                                type="checkbox"
                                id={`q${currentQuestionIndex}o${optIndex}`}
                                name={`question${currentQuestionIndex}`}
                                value={option}
                                checked={selectedAnswers[currentQuestionIndex] === option}
                                onChange={() => handleAnswerChange(currentQuestionIndex, option)}
                            />
                            <label htmlFor={`q${currentQuestionIndex}o${optIndex}`}>{option}</label>
                        </div>
                    ))}
                </div>

                {/* Navigation buttons */}
                <div>
                    {currentQuestionIndex > 0 && (
                        <button type="button" onClick={goToPreviousQuestion}>Previous</button>
                    )}
                    {currentQuestionIndex < questions.length - 1 && !submitted && (
                        <button type="button" onClick={goToNextQuestion}>Next</button>
                    )}
                </div>

                {/* Submit button */}
                {!submitted && currentQuestionIndex === questions.length - 1 && (
                    <button type="submit">Submit</button>
                )}
            </form>

            {submitted && (
                <div className="appreciation-message">
                    <h2>Your Score: {score} / {questions.length}</h2>
                    <h3 className="message">{getAppreciationMessage()}</h3>
                    <button className="retakes" onClick={retakeQuiz}>Retake Test</button>
                    <button className="back-home" onClick={handleBackToMainPage}>Back to Main Page</button>
                </div>
            )}
        </div>
    );
};

export default ConditionalQuiz;
