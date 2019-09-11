import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <div className="Person" style={style}>
            <p onClick={props.clickHandler}>{props.name} here! I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeHandler} value={props.name}></input>
        </div>
    );
};

export default Radium(person);