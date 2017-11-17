import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import CreateExpense from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/HelpPage';
import Login from '../components/Login';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Header/>
         <Switch>
            <Route path="/" component={Login} exact={true}/>
            <Route path="/dashboard" component={Dashboard}  />
            <Route path="/create" component={CreateExpense} />
            <Route path="/edit/:id" component={EditExpense} />
            <Route path="/help" component={Help} />
            <Route component={Help} />
        </Switch>
    </div>
    </Router>
    
)


 export default AppRouter;


