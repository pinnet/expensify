import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {DateRangePicker} from 'react-dates';
import {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate} from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        callendarFocused:null
    };
    onFocusChange = (callendarFocused) => {
        this.setState({callendarFocused});
    };
    onDatesChange = ({startDate,endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    onOptionChange = (e) => {
        if (e.target.value === 'date'){
            this.props.sortByDate();  
        }
        else if (e.target.value === 'amount'){
            this.props.sortByAmount();
        }  
    }
    render(){  
        return (  
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                            className="text-input"
                            placeholder="Search expenses"
                            type="text" 
                            value={this.props.filters.text} 
                            onChange={this.onTextChange}
                        />
                    </div>
                    <div className="input-group__item">
                        <select 
                            className="select"
                            value = {this.props.filters.sortBy}        
                            onChange={this.onOptionChange} 
                        >
                            <option value="date">Date    </option>
                            <option value="amount">Amount  </option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker 
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.callendarFocused}
                            onFocusChange={this.onFocusChange}
                            displayFormat="Do MMM YYYY"
                            numberOfMonths={1}
                            isOutsideRange={(day) => false}
                            showClearDates={true}
                        />
                    </div>
                </div>
            </div>
        );
    };
}
const mapStateToProps = (state) => ({ filters: state.filters });
const mapDispatchToProps = (dispatch) => ({

    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter:(text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount())

});
export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);