import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';
import Root from 'config/store';
import 'bootstrap/dist/css/bootstrap.css';
import MainRoutes from 'routes';


ReactDOM.render(
    <Root>
        <BrowserRouter>
            <App>
                <MainRoutes />
            </App>
        </BrowserRouter>
    </Root>, 
    document.querySelector('#root'));