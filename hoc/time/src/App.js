import React, { useState } from 'react';
import DateTimePretty from './DateTimePretty';
import { data } from './data';

function Video(props) {
    return (
        <div className='video'>
            <iframe src={props.url} frameborder='0' allow='autoplay; encrypted-media' allowfullscreen />
            <DateTimePretty date={props.date} />
        </div>
    );
}

export default function App() {
    const [list, setList] = useState(data);

    return list.map((item) => <Video url={item.url} date={item.date} />);
}
