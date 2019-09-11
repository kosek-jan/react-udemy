import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        people: [
            { id: "asdf1", name: "Lulec", age: 69 },
            { id: "asdf2", name: "Pulec", age: 13 },
            { id: "asdf3", name: "Sulec", age: 25 },
        ],
        showPeople: false
    }

    deletePersonHandler = (personIndex) => {
        const people = [...this.state.people];
        people.splice(personIndex, 1);
        this.setState({people: people});
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.people.findIndex(p => {
            return p.id === id;
        });
        const person = {...this.state.people[personIndex]};
        person.name = event.target.value;
        const people = [...this.state.people];
        people[personIndex] = person;
        this.setState({people: people});
    }

    togglePeopleHandler = () => {
        this.setState({showPeople: !this.state.showPeople});
    }

    render() {
        let people = null;
        let btnClass = '';

        if (this.state.showPeople) {
            people = (
                <div>
                    {this.state.people.map((person, index) => {
                        return <Person 
                            name={person.name} 
                            age={person.age}
                            clickHandler={() => this.deletePersonHandler(index)}
                            key={person.id}
                            changeHandler={(event) => this.nameChangedHandler(event, person.id)}
                        />   
                    })}
                </div>
            );
            btnClass = classes.Red;
        }

        const assignedClasses = [];
        if (this.state.people.length <= 2) {
            assignedClasses.push( classes.red );
        }
        if (this.state.people.length <= 1) {
            assignedClasses.push( classes.bold );
        }

        return (
            <div className={classes.App}>
                <h1>sup</h1>
                <p className={assignedClasses.join(' ')}>This is something!</p>
                <button 
                    className={btnClass}
                    onClick={this.togglePeopleHandler}>Toggle people</button>
                {people}
            </div>
        );  
    }
}

export default App;
