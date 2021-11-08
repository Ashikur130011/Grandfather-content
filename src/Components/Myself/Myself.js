import React from 'react';
import Special from '../Special/Special';

const Myself = (props) => {
    const{house, ornaments} = props;
    return (
        <div>
            <h1>Myself</h1>
            <h4>House: {house}</h4>
            <Special ornaments={ornaments}></Special>
        </div>
    );
};

export default Myself;