import React from 'react';
import './DictionaryText.css';  // Assuming you will create a similar CSS file for styling

const DictionaryText = () => {
    return (
        <div className="container">
            <h1>DICTIONARIES IN PYTHON</h1>
            <p>1. A <strong>dictionary</strong> in Python is an unordered collection of <em>key-value</em> pairs, where each key is associated with a specific value.</p>
            <p>2. Dictionaries are defined using curly braces <code>{`{}`}</code> with a colon <code>:</code> separating keys and values. For example, <code>my_dict = {'{'}'name': 'John', 'age': 25{'}'}</code>.</p>
            <p>3. Keys in a dictionary must be <strong>unique</strong> and immutable, like strings, numbers, or tuples, while values can be of any data type.</p>
            <p>4. You can access a value in a dictionary using its corresponding key. For instance, <code>my_dict['name']</code> would return <code>'John'</code>.</p>
            <p>5. Dictionaries are useful for storing data that is best represented as pairs, such as a phone book, where names are keys and numbers are values.</p>
            <p>6. Common methods for dictionaries include <code>get()</code> to retrieve a value, <code>keys()</code> to get all keys, and <code>values()</code> to get all values.</p>
        </div>
    );
};

export default DictionaryText;
