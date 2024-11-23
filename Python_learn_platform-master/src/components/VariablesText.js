import React from 'react';
import './VariablesText.css';  // Import the CSS file

const VariablesText = () => {
    return (
        <div className="container">
            <h1>VARIABLE</h1>
            <p>1. In Python, a variable is a container used to store data values, allowing you to reference and manipulate information in your program.</p>
            <p>2. You create a variable by assigning a value using the = operator. For example, x = 10.</p>
            <p>3. Variables can store various data types, such as integers, floating-point numbers, strings, and Booleans.</p>
            <p>4. Python is dynamically typed, so you don't need to specify a variable's type—Python detects it automatically.</p>
            <p>5. Variable names must start with a letter or an underscore, can include letters, numbers, and underscores, but cannot begin with a number.</p>
        </div>
    );
};

export default VariablesText;
