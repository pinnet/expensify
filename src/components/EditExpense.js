import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, removeExpense} from '../actions/expenses';

export class EditExpense extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id,expense);
        if(this.props.history){
            this.props.history.push('/');
        }
    };
    onClick = () => {
        this.props.removeExpense({id:this.props.expense.id});
        if(this.props.history){
            this.props.history.push('/');
        }
    };
    render(){
        return (
            <div>
                <h1>Edit Expense</h1>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}/>
                <button onClick={this.onClick}>
                    Remove
                </button>
            </div>
            );
    }
}

const mapStateToProps = (state,props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});
const mapDispatchToProps = (dispatch) => ({
    editExpense:(id,expense) => dispatch(editExpense(id,expense)),
    removeExpense:(data) => dispatch(removeExpense(data))
});
   
export default connect(mapStateToProps,mapDispatchToProps)(EditExpense);