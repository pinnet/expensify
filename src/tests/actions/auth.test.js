import { login,logout } from '../../actions/auth';

it('should generate login action object',() => {
    const uid = 'TESTID';
    const result = login(uid);
    expect(result).toEqual({
        type:'LOGIN',
        uid
    })
});
it('should generate logout action object',() => {
    const result = logout();
    expect(result).toEqual({
        type:'LOGOUT'
    })
})