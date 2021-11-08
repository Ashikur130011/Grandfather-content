import React from 'react';

const Brother = (props) => {
    const{house} = props;
    return (
        <div>
            <h1>Brother</h1>
            <h4>House: {house}</h4>
        </div>
    );
};

export default Brother;