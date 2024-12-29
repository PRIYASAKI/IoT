import React from 'react';
import './FunctionText.css';  // Import the CSS file

const FunctionText = () => {
    return (
        <div className="container">
            <h1>FUNCTIONS IN PYTHON</h1>
            <p>1. A **function** in Python is a block of reusable code that performs a specific task when called.</p>
            <p>2. Functions are defined using the `def` keyword, followed by the function name and parentheses. For example: `def my_function():`.</p>
            <p>3. Functions can accept inputs called **parameters**, and they can return a result using the `return` keyword.</p>
            <p>4. Functions help break down complex problems into smaller, manageable parts, improving code readability and maintainability.</p>
            <p>5. You can call a function multiple times, which reduces code repetition and promotes modularity in your programs.</p>
        </div>
    );
};

export default FunctionText;
