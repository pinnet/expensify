import React from 'react';
import { shallow } from 'enzyme'; 
import toJSON from 'enzyme-to-json';
import ExpenseForm from './../../components/ExpenseForm';
import expenses from './../fixtures/expenses';

it('should render correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();    
});

it('should render correctly with expenses', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();    
});


