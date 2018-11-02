import { AUTH_USER} from 'config/types/authType';
import {ERROR_MESSAGE, SUCCESS_MESSAGE, CLEAR_MESSAGE} from 'config/types/messageType';
import axios from 'axios';
import { BASE_URL } from '../../url/BASE_URL';

export const signup = (formProps, callback) => async dispatch => { 
    try {
        const response = await axios.post(BASE_URL+'signup', formProps);
        dispatch({ type:AUTH_USER, payload: response.data.token });
        dispatch({ type: SUCCESS_MESSAGE, payload: response.data.message });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch (error) {
        console.log('Error', error)
        dispatch({
            type:ERROR_MESSAGE, 
            payload: 'Email is already existing'
        })
        
    }
    
}

export const signin = (formProps, callback) => async dispatch => { 
    try {
        const response = await axios.post(BASE_URL+'signin', formProps);
        dispatch({ type:AUTH_USER, payload: response.data.token });
        dispatch({ type: SUCCESS_MESSAGE, payload: response.data.message });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch (error) {
        console.log('Error', error)
        dispatch({
            type:ERROR_MESSAGE, 
            payload: 'Invalid login credentials!'
        })
        
    }
    
}

export const signout = () => dispatch => {
    localStorage.removeItem('token')
    dispatch ({ type: AUTH_USER, payload: '' })
    dispatch({ type: SUCCESS_MESSAGE,  payload: 'Sorry to see you go, we hope to see you sortly'})
}