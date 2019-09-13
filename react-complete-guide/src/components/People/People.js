import React from 'react';
import Person from './Person/Person';

const people = (props) => props.people.map((person, index) => {
    return <Person 
        name={person.name} 
        age={person.age}
        clickHandler={() => props.clickHandler(index)}
        key={person.id}
        changeHandler={(event) => props.changeHandler(event, person.id)}
    />   
});

export default people;