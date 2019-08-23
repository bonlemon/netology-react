import React from 'react';

export function New(props) {
    return (
        <div className='wrap-item wrap-item-new'>
            <span className='label'>New!</span>
            {props.children}
        </div>
    );
}

export function Popular(props) {
    return (
        <div className='wrap-item wrap-item-popular'>
            <span className='label'>Popular!</span>
            {props.children}
        </div>
    );
}

export function Article(props) {
    return (
        <div className='item item-article'>
            <h3>
                <a href='#'>{props.title}</a>
            </h3>
            <p className='views'>Прочтений: {props.views}</p>
        </div>
    );
}

export function Video(props) {
    return (
        <div className='item item-video'>
            <iframe src={props.url} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen />
            <p className='views'>Просмотров: {props.views}</p>
        </div>
    );
}
