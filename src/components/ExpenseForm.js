import React from 'react';

export default class ExpenseForm extends React.Component {

    state = {
        description: '',
        note: '',
        ammount: ''
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
        if (ammount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(() => ({ ammount }));
        }
    };

    render() {
        return (
            <div>
                <form>
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