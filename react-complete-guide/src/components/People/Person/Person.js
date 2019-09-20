import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary';
import classes from './Person.module.css';

class Person extends Component {
    render() {
        console.log('people - rendering...')
        return (
            // <Aux>
            <div className={classes.Person}>
                <p onClick={this.props.clickHandler}>{this.props.name} here! I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changeHandler} value={this.props.name}></input>
            </div>
            // </Aux>
        );
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;