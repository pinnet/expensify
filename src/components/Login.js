import React from 'react';
import {connect} from 'react-redux';
import { startLogin } from './../actions/auth';

export const Login = ({startLogin}) => (
    <div>
        <p><button onClick={startLogin}>Login via Google</button></p>
    </div>
);
const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined,mapDispatchToProps)(Login);