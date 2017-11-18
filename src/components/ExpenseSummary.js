import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses.js';
import getExpensesTotal from '../selectors/expensese-total';

export const ExpensesSummary = (props) => {
    if (props.expenses !== undefined){
        const expenseCount = props.expenses.length;
        const expensesTotal = getExpensesTotal(props.expenses);
        return(
            <div className="page-header"> 
                <div className="content-container">
                    {props.expenses.length === 0 ||
                    <h1 className="page-header__title">Viewing <span>{expenseCount},</span> expense{expenseCount === 1 || 's'} totaling <span>£{numeral(expensesTotal / 100).format('0,0.00')}</span>.</h1>
                    }
                    <div className="page_header__actions">
                        <Link className="button" to="/create">Add Expense</Link>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses,state.filters)
});
export default connect(mapStateToProps)(ExpensesSummary);