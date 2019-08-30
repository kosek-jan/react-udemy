import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        people: [
            { name: "Lulec", age: 69 },
            { name: "Pulec", age: 13 },
        ]
    }

    switchNameHandler = (newName) => {
        this.setState({
            people: [
                { name: newName, age: 69 },
                { name: "Pulec", age: 32 },
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            people: [
                { name: event.target.value, age: 69 },
                { name: "Pulec", age: 32 },
            ]
        })
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        };

        return (
            <div className="App">
                <h1>sup</h1>
                <button 
                    style={style}
                    onClick={this.switchNameHandler.bind(this, "Luliceq")}>Switch Name</button>
                <Person 
                    name={this.state.people[0].name} 
                    age={this.state.people[0].age}
                    clickHandler={() => this.switchNameHandler("Lulili!!")}
                    changeHandler={this.nameChangedHandler}>
                </Person>
                <Person name={this.state.people[1].name} age={this.state.people[1].age}>My hobbies: cars, guns, girls</Person>
            </div>
        );  
    }
}

export default App;
