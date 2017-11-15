export default(expenses = undefined) => {
    
    if (expenses === null || expenses === undefined) return 0;
    return expenses
            .map((expense) => expense.amount)
            .reduce((sum,value) => sum + value,0);
}