import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';
import classes from './Person.module.css';

class Person extends Component {
    render() {
        console.log('people - rendering...')
        return (
            // <div className={classes.Person}>
            <Aux>
                <p onClick={this.props.clickHandler}>{this.props.name} here! I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changeHandler} value={this.props.name}></input>
            </Aux>
            // </div>
        );
    }
};

export default Person;