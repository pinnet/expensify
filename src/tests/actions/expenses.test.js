import {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense} 
from '../../actions/expenses';
import moment from 'moment';
import expenses from './../fixtures/expenses';
import configMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import db from './../../firebase/firebase';

const createMockStore = configMockStore([thunk]);

it('Should setup remove expense action object', () => {
    const action = removeExpense({id:'123abcd'});
    expect (action).toEqual({type:'REMOVE_EXPENSE',id:'123abcd'});
});
it('Should setup edit expense action object', () => {
    const action = editExpense('123abcd',{description:'EDITDESCRIPTION',amount:'10000',note:'EDITNOTE'});
    expect (action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abcd',
        updates:{
            description:'EDITDESCRIPTION',
            amount:'10000',
            note:'EDITNOTE'
        }
    });
});
it('should setup add expense action object',() => {

    const action = addExpense(expenses[2]);
    expect (action).toEqual({
        type:'ADD_EXPENSE',
        expense: expenses[2]
    });
});

it('should setup add expense to database and store',(done) => {
    
    const store = createMockStore({});

    const expenseData = {
        description:'Mouse',
        amount:3000,
        note: '',
        createdAt:1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        });
        return db.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) =>{
        expect(snapshot.val()).toEqual(expenseData);
        done();     
    });
});
it('should setup add expense with defaults to database and store',(done) => {
    
    const store = createMockStore({});

    const expenseData = {
        description:'',
        amount:0,
        note: '',
        createdAt:0
    };

    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        });
        return db.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) =>{
        expect(snapshot.val()).toEqual(expenseData);
        done();     
    });
});