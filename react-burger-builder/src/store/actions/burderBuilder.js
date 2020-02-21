import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    } 
};

const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
    } 
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://burgerbuilder-8f3da.firebaseio.com/ingredients.json')
            .then(res => {
                dispatch(setIngredients(res.data));
            }).catch(error => {
                dispatch(fetchIngredientsFailed());
            });    
    }; 
};