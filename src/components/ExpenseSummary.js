import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses.js';
import getExpensesTotal from '../selectors/expensese-total';

export const ExpensesSummary = (props) => {
    if (props.expenses !== undefined){
        const expenseCount = props.expenses.length;
        const expensesTotal = getExpensesTotal(props.expenses);
        return(
            <div> 
            {props.expenses.length === 0 ||
                <p>Viewing {expenseCount} expense{expenseCount === 1 || 's'} totaling £{numeral(expensesTotal / 100).format('0,0.00')}.</p>
            }
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses,state.filters)
});
export default connect(mapStateToProps)(ExpensesSummary);