import React from 'react';
import './SetText.css';  // Assuming you will create a similar CSS file for styling

const SetText = () => {
    return (
        <div className="container">
            <h1>SETS IN PYTHON</h1>
            <p>1. A <strong>set</strong> in Python is an unordered collection of unique elements, meaning it does not allow duplicates.</p>
            <p>2. Sets are defined using curly braces <code>{`{}`}</code> or the <code>set()</code> function. For example, <code>my_set = {[1, 2, 3]}</code> or <code>my_set = set([1, 2, 3])</code>.</p>
            <p>3. Sets are <strong>mutable</strong>, allowing you to add or remove elements after creation, but the elements themselves must be <strong>immutable</strong> (e.g., numbers, strings, tuples).</p>
            <p>4. Sets are useful for performing mathematical operations like <strong>union</strong>, <strong>intersection</strong>, and <strong>difference</strong>.</p>
            <p>5. Since sets are unordered, they do not support <strong>indexing</strong> or <strong>slicing</strong> like lists.</p>
            <p>6. You can add elements to a set using the <code>add()</code> method and remove them using the <code>remove()</code> or <code>discard()</code> method.</p>
        </div>
    );
};

export default SetText;
