import React, { Component } from 'react';

export class Form extends Component {
    render() {
        const { value, onClick, onChange } = this.props;
        return (
            <React.Fragment>
                <input value={value} onChange={onChange} />
                <button onClick={onClick}> Add</button>
            </React.Fragment>
        );
    }
}

export default Form;
