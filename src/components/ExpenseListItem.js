import React from 'react';
import moment from 'moment';
//import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


const ExpenseListItem = ({id,description,amount,createdAt}) => (
 <div>
     <Link to={`/edit/${id}`}><h3>{description} : amount £{(amount / 100).toFixed(2)} : created {moment(createdAt).format('Do MMM YYYY')}</h3></Link>
 </div>
);
export default ExpenseListItem;