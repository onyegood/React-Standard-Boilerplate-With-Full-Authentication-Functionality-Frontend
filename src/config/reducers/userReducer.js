
import { CURRENT_USER } from 'config/types/userType';

const INITIAL_STATE = {
    user: ''
 }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CURRENT_USER:
        return {
            ...state,
            user: action.payload.user
        }
        default:
            return state;
    }
}