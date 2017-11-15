import getExpensesTotal from '../../selectors/expensese-total';
import expenses from '../fixtures/expenses';

it('should return 0 if no expenses',() => {

    const result = getExpensesTotal();
    expect(result).toBe(0);
});
it('should return 0 if expenses === null',() => {
    
    const result = getExpensesTotal(null);
    expect(result).toBe(0);
});
it('should return 0 if expenses === undefined',() => {
        
        const result = getExpensesTotal(undefined);
        expect(result).toBe(0);
});
it('should return single expense',() => {
   
   const result = getExpensesTotal([expenses[0]]);
    expect(result).toBe(expenses[0].amount);
});
it('should total muitiple expenses',() => {
    
    const testValue = 114195;
    const result = getExpensesTotal(expenses);
    expect(result).toBe(testValue);
});