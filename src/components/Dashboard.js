import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import CreateExpense from './CreateExpense';

const Dashboard = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList/>
        <CreateExpense />
    </div>
)
export default Dashboard;