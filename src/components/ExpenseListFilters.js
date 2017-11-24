import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmmount } from '../actions/filters';


const ExpenseListFilters = (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value));
        }}/>
        <select
            value={props.filters.sortBy}
            onChange={(e) => {
                if (e.target.value === 'date') {
                    props.dispatch(sortByDate());
                } else if (e.target.value === 'ammount') {
                    props.dispatch(sortByAmmount());
                }
            }}
        >
            <option value="date">Date</option>
            <option value="ammount">Ammount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);