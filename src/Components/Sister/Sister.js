import React from 'react';

const Sister = (props) => {
    const{house} = props;
    return (
        <div>
            <h1>Sister</h1>
            <h4>House:{house}</h4>
        </div>
    );
};

export default Sister;