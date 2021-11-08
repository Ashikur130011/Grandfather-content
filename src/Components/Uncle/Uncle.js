import React from 'react';

const Uncle = (props) => {
    const{house} = props;
    return (
        <div>
            <h1>Uncle</h1>
            <h4>House: {house}</h4>
        </div>
    );
};

export default Uncle;