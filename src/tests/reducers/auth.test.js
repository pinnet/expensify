import authReducer from '../../reducers/auth';

it('should set uid for login',() => {
    const action = {
        type:'LOGIN',
        uid:'TESTID'
    };
    const state = authReducer({},action);
    expect(state.uid).toBe(action.uid);
});
it('should clear uid for logout',() => {
    const action = {
        type:'LOGOUT'        
    };
    const state = authReducer({uid:'TESTID'},action);
    expect(state.uid).toBe(undefined);
})