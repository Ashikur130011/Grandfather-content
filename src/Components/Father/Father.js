import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = (props) => {
    const {house,ornaments} =props;
    return (
        <div>
            <h1>Father</h1>
            <h4>House: {house}</h4>
            <div style={{display:'flex'}}>
            <Myself house={house} ornaments={ornaments}></Myself>
            <Sister house={house}></Sister>
            <Brother house={house}></Brother>
            </div>
        </div>
    );
};

export default Father;