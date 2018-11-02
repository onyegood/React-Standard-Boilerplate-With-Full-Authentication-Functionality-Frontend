import { combineReducers } from 'redux';
import auth from 'config/reducers/authReducer';
import message from 'config/reducers/messageReducer';
import { reducer as formReducer } from 'redux-form';
export default combineReducers({
    auth,
    message,
    form: formReducer
});