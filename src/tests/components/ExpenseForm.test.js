import React from 'react';
import { shallow } from 'enzyme'; 
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

it('should render correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();    
});

it('should render correctly with expenses', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();    
});

it('should render error invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();  
    wrapper.find('form').simulate('submit',{preventDefault:() => {}});
    expect(wrapper.state('error').length).toBeGreaterThan(0);                                                                        
    expect(wrapper).toMatchSnapshot();  
});

it('should set discription on input change', () => {
    
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{target:{value} }); 
    expect(wrapper.state('description')).toBe('New Description');
    expect(wrapper).toMatchSnapshot();   
});
it('should set note on textarea change', () => {
    
    const value = 'New Note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change',{target:{value}}); 
    expect(wrapper.state('note')).toBe('New Note');
    expect(wrapper).toMatchSnapshot();   
});
it('should set amount on valid input change', () => {
    
    const value = "12.25";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{target:{value} }); 
    expect(wrapper.state('amount')).toBe(value);  
});
it('should NOT set amount on invalid input change', () => {
    
    const value = '12.256';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{target:{value} }); 
    expect(wrapper.state('amount')).not.toBe(value);
});

it('should call onSubmit prop for valid form submission',() => {
   
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit',{preventDefault:() => {}});
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        createdAt:expenses[0].createdAt,
        note:expenses[0].note
    });
});
it('should set new date onDateChange',() => {
    const now = moment();
     const wrapper = shallow(<ExpenseForm />);
     wrapper.find('SingleDatePicker').prop('onDateChange')(now);
     expect(wrapper.state('createdAt')).toEqual(now);
 });
 it('should set new date onDateChange',() => {

    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    const component = wrapper.find('SingleDatePicker');
    component.prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
 });


