import React, { PureComponent } from 'react';
import Person from './Person/Person';

class People extends PureComponent {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[getDerivedStateFromProps', props);
    //     return state;
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('shouldComponentUpdate');
    //     if (nextProps.people !== this.props.people) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(nextProps, nextState) {
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    
    render() {
        console.log('render');
        return this.props.people.map((person, index) => {
            return <Person 
                name={person.name} 
                age={person.age}
                clickHandler={() => this.props.clickHandler(index)}
                key={person.id}
                changeHandler={(event) => this.props.changeHandler(event, person.id)}
            />   
        });
    }
}

export default People;