/**
 * 
 * 
 * Expensify App 
 * 
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
//import db from './firebase/firebase';

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
//ReactDOM.render(jsx,document.getElementById('app'));
// db.ref()
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })

ReactDOM.render(<p>Loading...</p>,document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
        ReactDOM.render(jsx,document.getElementById('app'));
});

