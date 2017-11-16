import {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense
} 
from '../../actions/expenses';
import deMoment from '../../utils/deMoment'
import moment from 'moment';
import expenses from './../fixtures/expenses';
import configMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import db from './../../firebase/firebase';

const createMockStore = configMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({id,description,note,amount,createdAt}) => {
        expensesData[id]= {description,note,amount,createdAt: moment(createdAt).valueOf()}
    });

    db.ref('expenses').set(expensesData).then(() => { done();})
});

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
    }).catch((e) => {
        console.log(e);
        done();  
    })
});
it('should setup set expense action ',() => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    });
});
it('should fetch the expenses from firebase',(done) => {

    const store = createMockStore({});
    const xpns = expenses.map((expense) => {
        return deMoment(expense);
    })
    
    store.dispatch(startSetExpenses()).then(() => {
     
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses:xpns
        });

        done();
    });
});
it('should remove the expenses from firebase',(done) => {
    
        const store = createMockStore({});
        const id = expenses[0].id;
        store.dispatch(startRemoveExpense({id})).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type:'REMOVE_EXPENSE',
                id
            });
            return db.ref(`expenses/${id}`).once('value');
        }).then((snapshot) =>{
            expect(snapshot.val()).toEqual(null);
            done();  
           
        }).catch((e) => {
            console.log(e);
            done();  
        })
});

