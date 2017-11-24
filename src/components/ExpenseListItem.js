import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, ammount, createdAt, dispatch}) => (
    <div>
        <h3>{ description }</h3>
        <p>{ ammount } - { createdAt }</p>
        <p>{ id }</p>
        <button
            onClick={() => {
                dispatch(removeExpense({id}));
            }}
        >Remove</button>
    </div>
);

export default connect()(ExpenseListItem);