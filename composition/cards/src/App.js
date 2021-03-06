import React from 'react';
import './App.css';

const Card = ({ srcUrl, title, text, buttonTitle, children, onClick }) => {
    return (
        <div className='card'>
            {srcUrl ? <img alt='chrome' className='card--img' src={srcUrl} /> : children}
            <div className='card--title'>{title}</div>
            <div className='card--text'>{text}</div>
            {buttonTitle && (
                <button className='card--button' onClick={onClick}>
                    {buttonTitle}
                </button>
            )}
        </div>
    );
};

export default class App extends React.Component {
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
                <Card
                    title='Cart title 1'
                    text='Mix and match multiple content types to create the card you need, or throw everything in there. '
                    srcUrl='https://jakearchibald.com/static/imgs/browser-icons/chrome.041e39c7c6f7.png'>
                    <img
                        alt='chrome'
                        className='card--img'
                        src='https://jakearchibald.com/static/imgs/browser-icons/chrome.041e39c7c6f7.png'
                    />
                </Card>
                <Card
                    title='Cart title 1'
                    text='Mix and match multiple content types to create the card you need, or throw everything in there. '>
                    <img
                        alt='chrome'
                        className='card--img'
                        src='https://jakearchibald.com/static/imgs/browser-icons/chrome.041e39c7c6f7.png'
                    />
                </Card>
            </div>
        );
    }
}
