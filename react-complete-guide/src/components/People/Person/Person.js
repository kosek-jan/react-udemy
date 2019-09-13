import React from 'react';

import classes from './Person.module.css';

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.clickHandler}>{props.name} here! I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeHandler} value={props.name}></input>
        </div>
    );
};

export default person;