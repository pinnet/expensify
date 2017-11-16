import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

export class CreateExpense extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        if(this.props.history){
            this.props.history.push('/');
        }
    };
    render() {
        return (
        <div>
            <h3>Add Expense</h3>
            <ExpenseForm onSubmit={this.onSubmit}/>
        </div>
        );
    };
}
const mapDispatchToProps = (dispatch) =>({   
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});
export default connect(undefined,mapDispatchToProps)(CreateExpense)