import React, { Component,Fragment } from 'react';

class Demo extends Component {
    render() {
        return (
            <Fragment key={1}>
                <input type="text"/>
                <input type="text" />
            </Fragment>//fragment可以传一个key
            // <>
            //     <input type="text"/>
            //     <input type="text" />
            // </>这个亦可以
        );
    }
}

export default Demo;