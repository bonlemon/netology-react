import React from 'react';
import { Popular, New } from './Components';

export function withLogger(Component) {
    return function(props, ...args) {
        if (props.views > 1000) {
            return (
                <Popular>
                    <Component {...props} {...args} />
                </Popular>
            );
        } else if (props.views < 100) {
            return (
                <New>
                    <Component {...props} {...args} />
                </New>
            );
        }
        return <Component {...props} {...args} />;
    };
}
