import uuid from 'uuid';
export const addExpense = ({description = '',note = '',amount = 0,createdAt= new Date().getTime() }={}) => ({
    type: 'ADD_EXPENSE',
    expenses:{
        id: uuid(),
        description,
        amount,
        note,
        createdAt
    }  
});

export const removeExpense = ({id} = {}) => ({   
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id,updates) => ({   
    type: 'EDIT_EXPENSE',
    id,
    updates
});

