import expenseReducer from './../../reducers/expenses';
import expenses from './../fixtures/expenses';
import moment from 'moment';

it('should return default values for state',() => {
    
    const result = expenseReducer(undefined,{ type:'@@INIT' });
    expect(result).toEqual([]);
});

it('should remove an expense by id',() => {
    
    const result = expenseReducer(expenses,{ type:'REMOVE_EXPENSE',id:expenses[1].id });
    expect(result).toEqual([expenses[0],expenses[2]]);
});
it('should not remove an expense by unknown id',() => {

    const result = expenseReducer(expenses,{ type:'REMOVE_EXPENSE',id:'-1' });
    expect(result).toEqual(expenses);
});
it('should add an expense',() => {
    const expense = {
        id:'990',
        description: 'Laptop',
        notes:'',
        createdAt:58000,
        amount:59900
        }
    const result = expenseReducer(expenses,{ type:'ADD_EXPENSE',expense});
    expect(result).toEqual([...expenses, expense]);
});
it('should edit an expense by id',() => {
    
    const result = expenseReducer(expenses,{ 
        type:'EDIT_EXPENSE',
        id:expenses[0].id,
        updates:{
            description:'NEWTEXT'
         } 
    });
    expect(result).toEqual(
        [{
            id:expenses[0].id,
            description:'NEWTEXT',
            note:'',
            amount:195,
            createdAt:moment(0)
        },expenses[1],expenses[2]]
    );
});
it('should not edit an expense by unknown id',() => {
    
    const result = expenseReducer(expenses,{ 
        type:'EDIT_EXPENSE',
        id:'-1',
        updates:{
            description:'NEWTEXT'
         } 
    });
    expect(result).toEqual(expenses);
});