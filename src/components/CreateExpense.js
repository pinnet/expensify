import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

export class CreateExpense extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
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
        addExpense: (expense) => dispatch(addExpense(expense))
});
export default connect(undefined,mapDispatchToProps)(CreateExpense)