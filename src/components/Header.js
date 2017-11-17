import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink> |&nbsp; 
        <NavLink to="/create" activeClassName="is-active">Create New Expense</NavLink> |&nbsp; 
        <NavLink to="/logout" activeClassName="is-active">logout</NavLink>
    </header>
);
export default Header;