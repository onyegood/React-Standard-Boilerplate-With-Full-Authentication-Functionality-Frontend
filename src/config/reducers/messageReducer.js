import { ERROR_MESSAGE, SUCCESS_MESSAGE, CLEAR_MESSAGE} from 'config/types/messageType';

export default (state = {}, action) => {
    switch (action.type) {
        case ERROR_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        case SUCCESS_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        case CLEAR_MESSAGE:
        return {
            ...state,
            message: ''
        }
        default:
            return state;
    }
} 