import { AUTH_USER } from 'config/types/authType';
import { CURRENT_USER } from 'config/types/userType';
import {ERROR_MESSAGE} from 'config/types/messageType';

export const signout = () => dispatch => {
    localStorage.removeItem('token');
    dispatch ({ type: AUTH_USER, payload: '' });
    dispatch ({ type: CURRENT_USER, payload: '' });
    dispatch({ type: ERROR_MESSAGE,  payload: 'Sorry to see you go, we hope to see you shortly'});
}