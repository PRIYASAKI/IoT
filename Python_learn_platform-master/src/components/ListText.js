import React from 'react';
import './ListText.css';  // Import the CSS file

const ListText = () => {
    return (
        <div className="container">
            <h1>LISTS IN PYTHON</h1>
            <p>1. A **list** in Python is an ordered collection of items that can hold multiple values, which can be of different data types.</p>
            <p>2. Lists are created by enclosing the elements within square brackets `[ ]`. For example: `my_list = [1, 2, 3, 4]`.</p>
            <p>3. Lists are **mutable**, meaning their elements can be changed after the list is created. For example, `my_list[0] = 5` changes the first element to 5.</p>
            <p>4. Lists can store different data types such as integers, strings, or even other lists (nested lists).</p>
            <p>5. You can access list elements using **indexing**, starting from 0. Negative indexing starts from the end of the list, with `-1` referring to the last element.</p>
        </div>
    );
};

export default ListText;
