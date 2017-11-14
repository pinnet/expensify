import { isNullOrUndefined } from "util";

export default(expenses = undefined) => {
    
    if (isNullOrUndefined(expenses)) return 0;
    return expenses
            .map((expense) => expense.amount)
            .reduce((sum,value) => sum + value,0);
}