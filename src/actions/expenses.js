import uuid from 'uuid';
import moment from 'moment';
import deMoment from './../utils/deMoment'
import db from './../firebase/firebase';


export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense  
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch,getState) => {
        const dbref = `users/${getState().auth.uid}/expenses`;
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = deMoment({description,note,amount,createdAt});
        return db.ref(dbref).push(expense).then((ref) => {
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
    return (dispatch,getState) => {
        const dbref = `users/${getState().auth.uid}/expenses`;
        return db.ref(`${dbref}/${id}`)
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

    return (dispatch,getState) => {
        const dbref = `users/${getState().auth.uid}/expenses`;
        return db.ref(`${dbref}/${id}`)
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
    return (dispatch,getState) => {
        const dbref = `users/${getState().auth.uid}/expenses`;
        return db.ref(dbref)
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
               