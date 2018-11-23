
import { AUTH_USER} from 'config/types/authType';

const INITIAL_STATE = {
    isAuthenticated: '',
    user: {}
 }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_USER:
        return {
            ...state,
            isAuthenticated: action.payload.token
            
        }
        default:
            return state;
    }
}