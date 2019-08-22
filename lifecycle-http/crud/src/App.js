import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import Form from './Form';

export default class App extends Component {
    state = {
        notes: null,
        content: '',
    };
    componentDidMount() {
        this.fetchNotes();
    }
    fetchNotes = () => {
        fetch('http://localhost:7777/notes')
            .then((response) => response.json())
            .then((notes) => {
                console.log(notes);
                this.setState({ notes });
            });
    };
    handleOnClick = () => {
        const { notes, content } = this.state;

        fetch('http://localhost:7777/notes', {
            method: 'POST',
            body: {
                id: notes ? notes.length : 0,
                content,
            },
        }).then(() => {
            this.fetchNotes();
        });
    };

    handleOnChange = (event) => {
        const value = event.target.value;
        this.setState({ content: value });
    };

    render() {
        const { notes, content } = this.state;
        return (
            <div>
                <Form value={content} onChange={this.handleOnChange} onClick={this.handleOnClick} />
                {notes &&
                    notes.map((note) => {
                        return <Card note={note} />;
                    })}
            </div>
        );
    }
}
