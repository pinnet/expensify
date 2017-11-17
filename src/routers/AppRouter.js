import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import CreateExpense from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/HelpPage';
import Login from '../components/Login';
import ErrorPage from '../components/ErrorPage';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
         <Switch>
            <PublicRoute path="/" component={Login} exact={true}/>
            <PrivateRoute path="/dashboard" component={Dashboard}  />
            <PrivateRoute path="/create" component={CreateExpense} />
            <PrivateRoute path="/edit/:id" component={EditExpense} />
            <Route path="/help" component={Help} />
            <Route component={ErrorPage} />
        </Switch>
    </div>
    </Router>
    
)


 export default AppRouter;


