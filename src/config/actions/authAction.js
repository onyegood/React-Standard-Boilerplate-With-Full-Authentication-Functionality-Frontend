import { AUTH_USER, FORGOT_PASSWORD, RESET_PASSWORD} from 'config/types/authType';
import {ERROR_MESSAGE, SUCCESS_MESSAGE} from 'config/types/messageType';
import axios from 'axios';
import { BASE_URL } from '../../url/BASE_URL';

export const signup = (data, callback) => async dispatch => { 
    try {
        const response = await axios.post(BASE_URL+'auth/signup', data);
        dispatch({ type:AUTH_USER, payload: response.data.token });
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

export const signin = (formProps, callback) => async dispatch => { 
    try {
        const response = await axios.post(BASE_URL+'auth/login', formProps);
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

export const forgotPassword = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post(BASE_URL+'auth/forgot-password', formProps);
        dispatch({ type: AUTH_USER, payload: response.data.message });
        dispatch({ type: SUCCESS_MESSAGE, payload: response.data.message });
        callback();
    } catch (error) {
        dispatch({
            type:ERROR_MESSAGE, 
            payload: error.response.data
        })
    }
}

export const resetPassword = (params, callback) => async dispatch => {
    try {
        const response = await axios.post(BASE_URL+'auth/reset-password', params);
        dispatch({ type: AUTH_USER, payload: response.data.message });
        dispatch({ type: SUCCESS_MESSAGE, payload: response.data.message });
        callback();
    } catch (error) {
        dispatch({
            type:ERROR_MESSAGE, 
            payload: error.response.data
        })
    }
}

export const signout = () => dispatch => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch ({ type: AUTH_USER, payload: '' })
    dispatch({ type: SUCCESS_MESSAGE,  payload: 'Sorry to see you go, we hope to see you shortly'})
}