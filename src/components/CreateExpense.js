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
            <div className="page-header">
                <div className="content-container">
                    <h1>Add Expense</h1> 
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm onSubmit={this.onSubmit}/>
            </div>
        </div>    
        );
    };
}
const mapDispatchToProps = (dispatch) =>({   
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});
export default connect(undefined,mapDispatchToProps)(CreateExpense)