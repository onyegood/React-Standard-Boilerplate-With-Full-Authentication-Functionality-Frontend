import { AUTH_USER} from 'config/types/authType';
import {ERROR_MESSAGE, SUCCESS_MESSAGE} from 'config/types/messageType';
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
        dispatch({
            type:ERROR_MESSAGE, 
            payload: error.response.data
        })
    }
}

export const signin = (formProps, callback) => async dispatch => { 
    try {
        const response = await axios.post(BASE_URL+'signin', formProps);
        dispatch({ type:AUTH_USER, payload: { token: response.data.token, user: response.data } });
        dispatch({ type: SUCCESS_MESSAGE, payload: response.data.message });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        callback();
    } catch (error) {
        dispatch({
            type:ERROR_MESSAGE, 
            payload: error.response.data
        })
    }
}

export const signout = () => dispatch => {
    localStorage.removeItem('token')
    dispatch ({ type: AUTH_USER, payload: '' })
    dispatch({ type: SUCCESS_MESSAGE,  payload: 'Sorry to see you go, we hope to see you shortly'})
}