import { useState } from 'react';

export const reset = () => {
    setHit(0)
    setBall(0)
    setStrike(0)
    setFoul(0);
}

/********** Ball Hook **********/
export const useBall = () => {
    const [ball, setBall] = useState(0);
    const addBall = () => {
        if (ball === 4) {
            setBall(0);
        }else{
            setBall(ball + 1);
        }
    };
    return [ball, setBall, addBall];
};

/********** Strike Hook **********/
export const useStrike = () => {
    const [strike, setStrike] = useState(0);
    const addStrike = () => {
        if (strike === 3) {
            setStrike(0);
        }else{
            setStrike(strike + 1);
        }
    };
    return [strike, setStrike, addStrike];
};

export const useAddHit = () => {
    const [hit, setHit] = useState(0);
    const [base, setBase] = useState(0);
    const [score, setScore] = useState(0);
    
    const addHit = () => {
        if (useStrike === 3 && useBall === 4) {
            reset()
            setBase(base + 1);
        }else{
        if (base === 3) {
            setScore(score + 1)
            setBase(0);
        }else{
        if (base < 3)
            setBase(base + 1)
            reset();
        }            
    }
}
return [hit, setHit, base, score, addHit];
}


