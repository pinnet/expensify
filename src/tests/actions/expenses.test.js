import {addExpense,editExpense,removeExpense} from './../../actions/expenses';
import moment from 'moment';


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

    const expenseData = {description:'ADDDESCRIPTION',
                        note:"ADDNOTE",
                        amount:1000,
                        createdAt:'TESTTIME' };

    const action = addExpense(expenseData);
    expect (action).toEqual({
        type:'ADD_EXPENSE',
        expense: {...expenseData,
        id:expect.any(String) }
    })
});
it('should setup add expense action object with default values',() => {
    const action = addExpense();
    expect (action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            description:'',
            note:"",
            amount:0,
            createdAt:moment(0),
            id:expect.any(String) 
        }
    })
});