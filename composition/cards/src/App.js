import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const Card = ({ srcUrl, title, text, buttonTitle, onClick }) => {
    return (
        <div className='card'>
            {srcUrl && <img alt='chrome' className='card--img' src={srcUrl} />}
            <div className='card--title'>{title}</div>
            <div className='card--text'>{text}</div>
            <button className='card--button' onClick={onClick}>
                {buttonTitle}
            </button>
        </div>
    );
};

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Card
                    title='Cart title 1'
                    text='Mix and match multiple content types to create the card you need, or throw everything in there. '
                    buttonTitle='Click'
                    onClick={() => console.log('1')}
                    srcUrl='https://jakearchibald.com/static/imgs/browser-icons/chrome.041e39c7c6f7.png'
                />
                <Card
                    title='Cart title 2'
                    text='Many many words'
                    buttonTitle='Click'
                    onClick={() => console.log('1')}
                />
            </div>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
