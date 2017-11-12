import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {DateRangePicker} from 'react-dates';
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from './../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        callendarFocused:null
    };
    onFocusChange = (callendarFocused) => {
        this.setState({callendarFocused});
    };
    onDatesChange = ({startDate,endDate}) => {
        console.log(startDate,endDate);
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    
    render(){  
        return (  
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>
                <select 
                    value = {this.props.filters.sortBy}        
                    onChange={(e) => {
                        if (e.target.value === 'date'){
                            this.props.dispatch(sortByDate());  
                        }
                        else if (e.target.value === 'amount'){
                            this.props.dispatch(sortByAmount());
                        }  
                    }}
                >
                    <option value="date">Date    </option>
                    <option value="amount">Amount  </option>
                </select>&nbsp;
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
        );
    };
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);