import {CLEAR_MESSAGE} from 'config/types/messageType';

export const clearMessage = () => dispatch => {
    dispatch({
        type: CLEAR_MESSAGE,
        payload: ''
    })
}