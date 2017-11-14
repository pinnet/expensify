import React from 'react';
import { shallow } from 'enzyme'; 
import moment from 'moment';
import expenses from './../fixtures/expenses';
import {CreateExpense} from './../../components/CreateExpense';

let addExpense, history, wrapper;
beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<CreateExpense addExpense={addExpense} history={history}/>);
})

it('should render create expense correctly ',() => {
    expect(wrapper).toMatchSnapshot(); 
});

it('should handle onSubmt', () => {

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);

})