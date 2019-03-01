import { CURRENT_USER } from 'config/types/userType';
import {ERROR_MESSAGE} from 'config/types/messageType';
import axios from 'axios';
import { BASE_URL } from '../../url/BASE_URL';


export const currentUser = () => async dispatch => {
    try {
        const response = await axios.get(BASE_URL+'users/current');
            dispatch({ 
                type: CURRENT_USER,
                payload: { success: true, user: response.data.user }
            });
    } catch (err) {
        dispatch({
            type:ERROR_MESSAGE, 
            payload: {
                success: false,
                message: err
            }

            
        })

        console.log('err', err)
    }
}