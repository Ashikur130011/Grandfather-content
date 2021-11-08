import React from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const Grandfather = (props) => {
    const {house, ornaments} = props;
    return (
        <div>
            <h1>GrandFather</h1>
            <h4>House: {house}</h4>
            <div style={{display:'flex'}}>
            <Father house={house} ornaments={ornaments}></Father>
            <Uncle house={house}></Uncle>
            <Aunt></Aunt>
            </div>
        </div>
    );
};

export default Grandfather;