import React, { Component } from 'react';

export class Form extends Component {
    render() {
        const { content, onClick, onChange } = this.props;
        return (
            <React.Fragment>
                <input value={content} onChange={onChange} />
                <button onClick={onClick}> Add</button>
            </React.Fragment>
        );
    }
}

export default Form;
