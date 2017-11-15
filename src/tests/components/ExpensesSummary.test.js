import React from 'react';
import { shallow } from 'enzyme'; 
import {ExpensesSummary} from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

it('should not output jsx if no expense passed',() => {

    const wrapper = shallow(
        <ExpensesSummary />);
    expect(wrapper).toMatchSnapshot();
});
it('should pluralise expense with more than one expense',() => {
    const wrapper = shallow(
        <ExpensesSummary expenses={expenses}              
        />);
    expect(wrapper).toMatchSnapshot();
});
it('should not pluralise expense with only one expense',() => {
    const wrapper = shallow(
        <ExpensesSummary expenses={[expenses[0]]}              
        />);
    expect(wrapper).toMatchSnapshot();
});




