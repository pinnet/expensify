import {createStore} from 'redux';

const incCount = ({amount = 1}= {}) => ({
    type:'INCREMENT',
    amount
});
const decCount = ({amount = 1}= {}) => ({
    type:'DECREMENT',
    amount
});
const setCount = ({count} = {}) => ({
     type:'SET',
     count
});
const resetCount = () => ({
    type:'RESET'
});

const countReducer = (state = { count: 0 },action) => {
    let newState = undefined;
    switch (action.type){ 
        
        case 'SET' :
        newState = { 
            count: action.count 
        }
        break;
        case 'INCREMENT' :
        newState = {
            
            count: state.count + action.amount
        }
        break;

        case 'DECREMENT' :
        newState = {
            count: state.count - action.amount
        }
        break;
        case 'RESET' :
        newState = {
            count: 0
        }
        break; 
        default :
        newState = state; 
    }
    
    return newState;
}
const store = createStore(countReducer);

store.subscribe(() => { console.log (store.getState());});
store.dispatch(incCount({amount:500}));
store.dispatch(incCount());
store.dispatch(resetCount());
store.dispatch(decCount());
store.dispatch(decCount({amount:41}));
store.dispatch(setCount({count:145}));

