import React, { Component } from 'react';

export class Card extends Component {
    render() {
        const { content, onRemove } = this.props;
        return (
            <div>
                <div>{content}</div>
                <button onClick={onRemove}>Kill!</button>
            </div>
        );
    }
}

export default Card;
