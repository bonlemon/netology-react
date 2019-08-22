import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import Form from './Form';
import nanoid from 'nanoid';

export default class App extends Component {
    state = {
        notes: null,
        content: '',
    };
    componentDidMount() {
        this.fetchNotes();
    }
    fetchNotes = async () => {
        let response = await fetch('http://localhost:7777/notes');
        let json = await response.json();
        console.log(json);
        this.setState({ notes: json });
    };
    handleOnClick = () => {
        const { notes, content } = this.state;

        fetch('http://localhost:7777/notes', {
            method: 'POST',
            body: JSON.stringify({
                id: notes ? notes.length : 0,
                content,
            }),
        })
            .then(() => {
                this.fetchNotes();
            })
            .then(() => {
                this.setState({ content: '' });
            });
    };

    handleOnChange = (event) => {
        const value = event.target.value;
        this.setState({ content: value });
    };
    handleOnRemove = (id) => (event) => {
        fetch(`http://localhost:7777/notes/${id}`, {
            method: 'DELETE',
        }).then(() => {
            this.fetchNotes();
        });
    };

    render() {
        const { notes, content } = this.state;
        return (
            <div>
                <Form value={content} onChange={this.handleOnChange} onClick={this.handleOnClick} />
                {notes &&
                    notes.map(({ content, id }) => {
                        return <Card key={nanoid()} content={content} onRemove={this.handleOnRemove(id)} />;
                    })}
            </div>
        );
    }
}
