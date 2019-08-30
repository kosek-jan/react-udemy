import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>{props.name} here! I am {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;