import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {

    state = {
        description: '',
        note: '',
        ammount: '',
        createdAt: moment(),
        calendarFocused: false,
        error: ''
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onAmmountChange = (e) => {
        const ammount = e.target.value;
        if (!ammount || ammount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ ammount }));
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({
            calendarFocused: focused
        }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.ammount) {
            this.setState(() => ({ error: 'Please provide description and ammount.' }));
        } else {
            this.setState(() => ({ error: '' }));
            console.log('submmited!');
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Ammount"
                        value={this.state.ammount}
                        onChange={this.onAmmountChange}
                    />

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        hideKeyboardShortcutsPanel={true}
                        isOutsideRange={() => false}
                    />

                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    ></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }

}