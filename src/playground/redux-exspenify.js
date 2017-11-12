import {createStore, combineReducers } from 'redux';
import uuid from 'uuid';


const expReducerDefaultState = [];

const expensesReducer = (state = expReducerDefaultState, action ) => {
    switch(action.type){
        case 'ADD_EXPENSE' :
           return [...state,action.expenses];
            break;
        case 'REMOVE_EXPENSE' :
            return state.filter((expense) => ( expense.id !== action.id ) );
            break; 
        case 'EDIT_EXPENSE' :
            return state.map ((expense) => {
                console.log(action.updates,expense)
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                }
                else{
                    return expense;
                }

            });
            break; 
        default :
            return state;
    }

};

const filterReducerDefaultState = {
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate:undefined
}

const filtersReducer = (state = filterReducerDefaultState,action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER' :
            return {...state,text:action.text};
            break;
        case 'SORT_BY_AMOUNT' :
            return {...state,sortBy:'amount'};
            break;
        case 'SORT_BY_DATE' :
            return {...state,sortBy:'date'};
            break;
        case 'SET_START_DATE' :
            return {...state,startDate: action.startDate};
            break;
        case 'SET_END_DATE' :
            return {...state,endDate: action.endDate};
            break;

        default :
            return state;
    }    
};





const store = createStore(
    combineReducers({
        expenses:expensesReducer, 
        filters:filtersReducer
    })
);





const addExpense = ({description = '',note = '',amount = 0,createdAt= new Date().getTime() }={}) => ({
    type: 'ADD_EXPENSE',
    expenses:{
        id: uuid(),
        description,
        amount,
        note,
        createdAt
    }  
});

const removeExpense = ({id} = {}) => ({   
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id,updates) => ({   
    type: 'EDIT_EXPENSE',
    id,
    updates
});
const setTextFilter = (text = '') => ({   
    type: 'SET_TEXT_FILTER',
    text
});
const sortByAmount = () => ({   
    type: 'SORT_BY_AMOUNT'
});
const sortByDate = () => ({   
    type: 'SORT_BY_DATE'
});
const setStartDate = (startDate) => ({   
    type: 'SET_START_DATE',
    startDate
});
const setEndDate = (endDate ) => ({   
    type: 'SET_END_DATE',
    endDate
});

const getVisableExpenses = (expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense) => {
       const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
       const endDateMatch =  typeof endDate !== 'number' || expense.createdAt <= endDate;
       const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) || 
                         expense.note.toLowerCase().includes(text.toLowerCase());    
       return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1: -1;
        }
    });
  }

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisableExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description:'Rent', amount: 5000 ,createdAt: 1000,note:'last payment'}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount: 8000 ,createdAt: -1000,note:'Costa'}));
//store.dispatch(removeExpense({id: expenseOne.expenses.id}));
//store.dispatch(editExpense(expenseTwo.expenses.id,{ amount: 500}));
//store.dispatch(setTextFilter('PAy'));
//store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
//store.dispatch(setEndDate(256));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(999));







// const demoState = {
//     expenses:[{
//         id:'dfgdfgfg',
//         description: 'January Rent',
//         note: 'This was the final payment',
//         amount: 54500,
//         createdAt: 0
//     }],
//     filters:{
//         text:'rent',
//         sortBy:'amount',
//         startDate: undefined,
//         endDate:   undefined
//     }
// }



// const user = {
//     name:'danny',
//     age:47
// }


// console.log({ ...user});
