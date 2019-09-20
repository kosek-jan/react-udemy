import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

// import Aux from '../../../hoc/Auxiliary';
import classes from './Person.module.css';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElRef = React.createRef();
    }

    componentDidMount() {
        // this.inputEl.focus();
        this.inputElRef.current.focus();
    }

    render() {
        console.log('people - rendering...')
        return (
            // <Aux>
            <div className={classes.Person}>
                <AuthContext.Consumer>
                    {context => 
                        context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
                    }
                </AuthContext.Consumer>
                <p onClick={this.props.clickHandler}>{this.props.name} here! I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input 
                    // ref={(inputEl) => {this.inputEl = inputEl}} 
                    ref={this.inputElRef}
                    type="text" onChange={this.props.changeHandler} value={this.props.name}></input>
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