import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../../actions/filters';
import moment from 'moment';

it('should setup setStartDate action',() => {

    const date = moment(0);
    const result = setStartDate(date);
    expect(result).toEqual({
        type:'SET_START_DATE',
        startDate:date
    })

});
it('should setup setEndDate action',() => {
    
    const date =  moment(0);
    const result = setEndDate(date);
    expect(result).toEqual({
        type:'SET_END_DATE',
        endDate:date
    })
        
});
it('should setup sortByAmount action', () => {

    const result = sortByAmount();
    expect(result).toEqual({
        type:'SORT_BY_AMOUNT'
    })
    
});
it('should setup sortByDate action', () => {
    
    const result = sortByDate();
    expect(result).toEqual({
        type:'SORT_BY_DATE'
    })
        
});
it('should setup setTextFilter acton', () => {
    
    const testText = 'TESTTEXT';
    const result = setTextFilter(testText);
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text:  testText
    })
});
it('should setup setTextFilter acton with defaut values', () => {
    
    const result = setTextFilter();
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text:  ''
    })
});
