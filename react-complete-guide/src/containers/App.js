import React, { Component } from 'react';
import classes from './App.module.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
    state = {
        people: [
            { id: "asdf1", name: "Lulec", age: 69 },
            { id: "asdf2", name: "Pulec", age: 13 },
            { id: "asdf3", name: "Sulec", age: 25 },
        ],
        showPeople: false,
        showCocpit: true,
    }

    componentDidMount() {
        console.log('app.js - componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("app.js - shouldComponentUpdate");
        return true;
    }

    componentDidUpdate() {
        console.log('app.js - componentDidUpdate');
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
            <WithClass classes={classes.App}>
                <button onClick={() => this.setState({showCocpit: false})}>hide Cockpit</button>
                {this.state.showCocpit ? 
                    <Cockpit 
                        title={this.props.appTitle}
                        showPeople={this.state.showPeople} 
                        peopleLength={this.state.people.length}
                        clickedHandler={this.togglePeopleHandler}>
                    </Cockpit>
                : null}
                {people}
            </WithClass>
        );  
    }
}

export default App;
