import React, { Component } from 'react';

export class Card extends Component {
    render() {
        const { note } = this.props;
        return <div>{note}</div>;
    }
}

export default Card;
