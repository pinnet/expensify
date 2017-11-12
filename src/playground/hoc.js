import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const requireAuthenication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {... props}  /> : <p>Please login to continue</p>}     
        </div>
    );
    
};
const AuthInfo = requireAuthenication(Info);

ReactDOM.render(<AuthInfo isAuthenticated = {false} info="this is my info"/>,document.getElementById('app'));