import { AUTH_USER } from 'config/types/authType';
import {ERROR_MESSAGE, SUCCESS_MESSAGE} from 'config/types/messageType';
import axios from 'axios';
import { BASE_URL } from '../../url/BASE_URL';

export const signup = (data) => async dispatch => { 
    try {
        const response = await axios.post(BASE_URL+'auth/signup', data);
            dispatch({ 
                type: SUCCESS_MESSAGE,
                payload: {
                    success: true,
                    message: response.data.message
                }
            });
    } catch (error) {
        dispatch({
            type:ERROR_MESSAGE, 
            payload: {
                success: false,
                message: error.response.data.message
            }
        });
    }
}

export const signin = (formProps) => async dispatch => { 
    try {
        const response = await axios.post(BASE_URL+'auth/login', formProps);
        dispatch({ type:AUTH_USER, payload: { token: response.data.token, user: response.data } });
        localStorage.setItem('token', response.data.token);
        dispatch({ 
            type: SUCCESS_MESSAGE,
            payload: {
                success: true,
                message: response.data.message
            } 
        });
    } catch (error) {
        dispatch({
            type:ERROR_MESSAGE, 
            payload: {
                success: false,
                message: error.response.data.message
            }
        })
    }
}

export const forgotPassword = (formProps) => async dispatch => {
    try {
        const response = await axios.post(BASE_URL+'auth/forgot-password', formProps);
        dispatch({ 
            type: SUCCESS_MESSAGE, 
            payload: {
                success: true,
                message: response.data.message
            } 
        });
    } catch (error) {
        dispatch({
            type:ERROR_MESSAGE, 
            payload: {
                success: false,
                message: error.response.data.message
            } 
        })
    }
}

export const resetPassword = (params) => async dispatch => {
    try {
        const response = await axios.post(BASE_URL+'auth/reset-password', params);
        dispatch({ 
            type: SUCCESS_MESSAGE, 
            payload: {
                success: true,
                message: response.data.message
            } 
        });
    } catch (error) {
        dispatch({
            type:ERROR_MESSAGE, 
            payload: {
                success: false,
                message: error.response.data.message
            }
        })
    }
}