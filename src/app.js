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
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisableExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(addExpense({description:'Water Bill',amount:2200,}));
store.dispatch(addExpense({description:'Gas Bill',amount:8200,}));
store.dispatch(addExpense({description:'Rent',amount:182200,}));

store.dispatch(setTextFilter('gas'));
setTimeout(() => {
    store.dispatch(setTextFilter('bill'));
},5000);
// const state = store.getState();
// const visibleExpenses = getVisableExpenses(state.expenses,state.filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx,document.getElementById('app'));


