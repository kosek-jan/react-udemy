import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPeople) {
        btnClass = classes.Red;
    }

    if (props.people.length <= 2) {
        assignedClasses.push( classes.red );
    }
    if (props.people.length <= 1) {
        assignedClasses.push( classes.bold );
    }

    return (
        <div classes={classes.Cockpit}>
            <h1>sup</h1>
            <p className={assignedClasses.join(' ')}>This is something!</p>
            <button 
                className={btnClass}
                onClick={props.clickedHandler}>Toggle people</button>
        </div>
    );
};

export default cockpit;