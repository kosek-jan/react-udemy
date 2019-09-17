import React, { Component } from 'react';
import classes from './App.module.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';

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

        if (this.state.showPeople) {
            people = <People 
                        people={this.state.people}
                        clickHandler={this.deletePersonHandler}
                        changeHandler={this.nameChangedHandler}
                    ></People>;   
        }

        return (
            <div className={classes.App}>
                <Cockpit 
                    title={this.props.appTitle}
                    showPeople={this.state.showPeople} 
                    people={this.state.people}
                    clickedHandler={this.togglePeopleHandler}></Cockpit>
                {people}
            </div>
        );  
    }
}

export default App;
