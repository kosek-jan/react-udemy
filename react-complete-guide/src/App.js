import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
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
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let people = null;

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

            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
        }

        const classes = [];
        if (this.state.people.length <= 2) {
            classes.push('red');
        }
        if (this.state.people.length <= 1) {
            classes.push('bold');
        }

        return (
            <StyleRoot>
                <div className="App">
                    <h1>sup</h1>
                    <p className={classes.join(' ')}>This is something!</p>
                    <button 
                        style={style}
                        onClick={this.togglePeopleHandler}>Toggle people</button>
                    {people}
                </div>
            </StyleRoot>
        );  
    }
}

export default Radium(App);
