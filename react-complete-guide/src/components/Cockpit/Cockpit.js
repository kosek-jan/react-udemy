import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    useEffect(() => {
        // executes for every render cycle
        console.log('cockpit.js - useEffect');
        // Http req.. 
        const timer = setTimeout(() => {
            alert('Save data to cloud!');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('Cocpit cleanup');
        }   
    }, [props.peopleLength]); // runs only when people changes, [] will act like componentDidMount/unmount
    
    useEffect(() => {
        console.log('cockpit.js - useEffect #2');
        return () => {
            console.log('Cocpit cleanup #2');
        };
    });

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPeople) {
        btnClass = classes.Red;
    }

    if (props.peopleLength <= 2) {
        assignedClasses.push( classes.red );
    }
    if (props.peopleLength <= 1) {
        assignedClasses.push( classes.bold );
    }

    return (
        <div classes={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is something!</p>
            <button 
                className={btnClass}
                onClick={props.clickedHandler}>Toggle people</button>
        </div>
    );
};

export default React.memo(cockpit);