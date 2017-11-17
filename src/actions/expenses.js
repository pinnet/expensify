import uuid from 'uuid';
import moment from 'moment';
import deMoment from './../utils/deMoment'
import db from './../firebase/firebase';


export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense  
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        const expense = deMoment({description,note,amount,createdAt});
        console.log(expense)
        return db.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id:ref.key,
                ...expense                
            }));
        });
    };
};

export const removeExpense = ({id} = {}) => ({   
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({id}) => {
    return (dispatch) => {
        return db.ref(`expenses/${id}`)
        .remove().then(() => {
            dispatch(removeExpense({id}));  
        })        
    }  
}
export const editExpense = (id,updates) => ({   
    type: 'EDIT_EXPENSE',
    id,
    updates
});
export const startEditExpense = (id,updatesObj) => {
    const updates = deMoment(updatesObj);

    return (dispatch) => {
        return db.ref(`expenses/${id}`)
        .update(updates)      
        .then(() => {
            dispatch(editExpense(id,updates));  
        })        
    }  
    
};
export const setExpenses = (expenses) => ({
  type:'SET_EXPENSES',
  expenses  
});

export const startSetExpenses = () => { 
    return (dispatch) => {
        return db.ref('expenses')
        .once('value')
        .then((snapshot) => {
          
            const newStore = [];
            snapshot.forEach((expense) => {
                 newStore.push({ 
                     id:expense.key,
                     ...expense.val()
                 })
              })
            dispatch(setExpenses(newStore));  
        })    
    }
}
               