import moment from 'moment';
export default (expense) => {
    return ({
        ...expense,
        createdAt: moment(expense.createdAt).valueOf()
    })
}