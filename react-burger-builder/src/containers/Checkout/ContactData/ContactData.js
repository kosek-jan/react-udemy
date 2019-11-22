import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './ContactData.module.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'smasha',
                address: {
                    street: 'teststreeet',
                    zipCode: '654564',
                    country: 'Czechia'
                },
                email: 'test@test.test'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('/orders.json', order).then(responce => {
            this.setState({ loading: false });
            this.props.history.push('/');
        }).catch(error => {
            this.setState({ loading: false });
        });
    }

    render() {
        let form = (
            <form>
                <input className={styles.Input} type="text" name="name" placeholder="Your name"></input>
                <input className={styles.Input} type="text" name="email" placeholder="Your email"></input>
                <input className={styles.Input} type="text" name="street" placeholder="Street"></input>
                <input className={styles.Input} type="text" name="postal" placeholder="Postal Code"></input>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter your Contact</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;