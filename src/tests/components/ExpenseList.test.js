import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

it('shoulld render ExpenseList with expenses',() => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});
it('shoulld render no expenses with no expenses ',() => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});
