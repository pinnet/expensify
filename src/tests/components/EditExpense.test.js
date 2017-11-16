import React from 'react';
import { shallow } from 'enzyme'; 
import moment from 'moment';
import expenses from '../fixtures/expenses';
import {EditExpense} from '../../components/EditExpense';

let startEditExpense,startRemoveExpense, history, wrapper;
beforeEach(() => {

    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpense
        startEditExpense={startEditExpense} 
        startRemoveExpense={startRemoveExpense}
        history={history}
        expense={expenses[0]}/>);
});

it('should render editExpense correctly ',() => {
    expect(wrapper).toMatchSnapshot(); 
});

it('should handle editExpense', () => {
    
        wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
        expect(history.push).toHaveBeenLastCalledWith('/');
        expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[0]);
    
});
it('should handle removeExpense', () => {
    
        wrapper.find('button').simulate('click');
        expect(history.push).toHaveBeenLastCalledWith('/');
        expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[0].id});
    
});