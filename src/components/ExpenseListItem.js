import React from 'react';

const ExpenseListItem = ({ description, ammount, createdAt}) => (
    <div>
        <h3>{ description }</h3>
        <p>{ ammount } - { createdAt }</p>
    </div>
);

export default ExpenseListItem;