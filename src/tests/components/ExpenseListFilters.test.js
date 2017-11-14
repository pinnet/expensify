import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment'; 
import {filters,altFilters} from './../fixtures/filters';
import {ExpenseListFilters} from './../../components/ExpenseListFilters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
        filters={filters}
        setTextFilter = {setTextFilter}
        sortByDate = {sortByDate}
        sortByAmount = {sortByAmount}
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}        
    />);  
});

it('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

it('should render ExpenseListFilters with Alt Filters correctly', () => {
    wrapper.setProps({filters: altFilters})
    expect(wrapper).toMatchSnapshot();
});

it('should handle text change',() => {
    const value = 'TESTTEXT';
    wrapper.find('input').simulate('change',{target:{value} });
    expect(setTextFilter).toHaveBeenLastCalledWith(value); 
});
it('should sort by date',() => {
    const value = 'date';
    wrapper.setProps({filters: altFilters});
    wrapper.find('select').simulate('change',{target:{value} });
    expect(sortByDate).toHaveBeenCalled(); 
});
it('should sort by amount',() => {
    const value = 'amount';
    wrapper.find('select').simulate('change',{target:{value} });
    expect(sortByAmount).toHaveBeenCalled();
});
it('should handle Date changes',() => {
    const startDate = moment(0).add(4,'years');
    const endDate = moment(0).add(8,'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate); 
});

it('should handle date focus change',() => {
    const callendarFocused = "startDate";
  
    wrapper.find('DateRangePicker').prop('onFocusChange')({callendarFocused});
    expect(wrapper.state('callendarFocused')).toEqual({callendarFocused});
})



