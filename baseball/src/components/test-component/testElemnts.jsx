import React, { useState } from 'react';

const TestElement = () => {

    const [hit, setHit] = useState(0);

    const addHit = () => {
        setHit(hit + 1);
    }

    return(
        <div>
            <label name='hit'>{hit}</label>

            <button onClick={addHit}></button>
        </div>
        )
}

export default TestElement;
