import filtersReducer from '../../reducers/filters';
import moment from 'moment';

it('should return default values for state',() => {
    
    const result = filtersReducer(undefined,{ type:'@@INIT' });
    expect(result).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});
it('should setSortBY amount',() => {

    const result = filtersReducer(undefined,{ type:'SORT_BY_AMOUNT'});
    expect(result.sortBy).toBe('amount');
})
it('should setSortBY date',() => {
    const newState={
        text:'',
        startDate:moment(0),
        endDate:moment(2000),
        sortby:'amount'        
    }
    const result = filtersReducer(newState,{ type:'SORT_BY_DATE'});
    expect(result.sortBy).toBe('date');
})
it('should return the new text when passing SET_TEXT_FILTER ',() => {
    const testText = 'TEST_TEXT !"£$%^';
    const result = filtersReducer(undefined,{type:'SET_TEXT_FILTER',text:testText});
    expect(result.text).toBe(testText);
});
it('should return the new date when passing SET_START_DATE ',() => {
    
    const result = filtersReducer(undefined,{type:'SET_START_DATE',startDate:moment(0)});
    expect(result.startDate).toEqual(moment(0));
});
it('should return the new date when passing SET_END_DATE ',() => {
    
    const result = filtersReducer(undefined,{type:'SET_END_DATE',endDate:moment(0)});
    expect(result.endDate).toEqual(moment(0));
});
it('should return the new state ',() => {

    const newState = {
        text:'TEST',
        sortBy:'amount',
        startDate: moment(0),
        endDate: moment(0)
    }
    const result = filtersReducer(newState,{ type:'@@INIT' });
    expect(result).toEqual(newState);
});