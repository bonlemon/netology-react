import React, { useState } from 'react';
import { data } from './data';
import { withLogger } from './hoc';
import { Video, Article } from './Components';

const HeadComponent = (props) => {
    {
        switch (props.type) {
            case 'video':
                return <ComponentForVideo {...props} />;

            case 'article':
                return <ComponentForArticle {...props} />;
        }
    }
};

const ComponentForVideo = withLogger(Video);
const ComponentForArticle = withLogger(Article);

export default function App() {
    const [list, setList] = useState(data);

    return list.map((item) => <HeadComponent {...item} />);
}
