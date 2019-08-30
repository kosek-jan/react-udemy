import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {   
    const [ peopleState, setPeopleState ] = useState({
        people: [
            { name: "Lulec", age: 69 },
            { name: "Pulec", age: 13 },
        ],
    });

    const [otherState] = useState("some other state");

    console.log(peopleState, otherState);

    const switchNameHandler = () => {
        setPeopleState({
            people: [
                { name: "Lulecec", age: 69 },
                { name: "Pulec", age: 32 },
            ], 
        });
    }

    return (
        <div className="App">
            <h1>sup</h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={peopleState.people[0].name} age={peopleState.people[0].age}></Person>
            <Person name={peopleState.people[1].name} age={peopleState.people[1].age}>My hobbies: cars, guns, girls</Person>
        </div>
    );  
}

export default app;