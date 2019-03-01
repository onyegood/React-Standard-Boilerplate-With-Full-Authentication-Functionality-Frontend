import { combineReducers } from 'redux';
import auth from 'config/reducers/authReducer';
import user from 'config/reducers/userReducer';
import message from 'config/reducers/messageReducer';
import { reducer as formReducer } from 'redux-form';
export default combineReducers({
    auth,
    user,
    message,
    form: formReducer
});