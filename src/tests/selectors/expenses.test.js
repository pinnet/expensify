import selectExpenses from './../../selectors/expenses';
import moment from 'moment';
import expenses from './../fixtures/expenses';

it('should filter by text value', () => {
    const filters= {
        text: 'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[1]]);

});
it('should filter by startDate',() => {
    const filters= {
        text: '',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }; 
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0]]);

});

it('should filter by endDate',() => {
    const filters= {
        text: '',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0).add(3,'days')
    }; 
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[0],expenses[1]]);

});

it('should filter by sort by amount',() => {
    const filters= {
        text: '',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined,
    }; 
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]]);

});
it('should filter by sort by date',() => {
    const filters= {
        text: '',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined,
    }; 
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);

});