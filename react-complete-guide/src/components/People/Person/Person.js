import React, { Component } from 'react';

import classes from './Person.module.css';

class Person extends Component {
    render() {
        console.log('people - rendering...')
        return (
            <div className={classes.Person}>
                <p onClick={this.props.clickHandler}>{this.props.name} here! I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changeHandler} value={this.props.name}></input>
            </div>
        );
    }
};

export default Person;