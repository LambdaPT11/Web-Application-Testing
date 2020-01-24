import React, { useState } from 'react';
import { VisitorHeader } from '../Headers';

import './VisitorTeam.styles.scss';


const VisitorTeam = () => {

    const [hit, setHit] = useState(0);
    const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);
    const [score, setScore] = useState(0);

    const addHit = () => {
        setHit(hit + 1);
        setScore(score + 2);
    }

    return(
        <div class="grid-container">
            <div class="header">
                <VisitorHeader />
            </div>
            <div class="score">
                <label className="visitor-score" data-testid="v-score-test">{score}</label>
            </div>
            <div class="hit-label">
                <label className="v-hit-label" data-testid="v-hit-test" >{hit}</label>
            </div>
            <div class="ball-label">
                <label className="v-ball-label" data-testid="v-ball-test" >{hit}</label>
            </div>
            <div class="strike-label">
                <label className="v-strike-label" data-testid="v-strike-test" >{hit}</label>
            </div>
            <div class="ball-btn">
                <button className="v-ball-btn" onClick = {addHit}>Ball</button>
            </div>
            <div class="strike-btn">
                <button className="v-strike-btn" onClick = {addHit}>Strike</button>    
            </div>
            <div class="hit-btn">
                <button className="v-hit-btn" onClick = {addHit}>Hit</button>
            </div>
        </div>
    )
}

export default VisitorTeam;



// <div className="base">
//             <header>
//                 <VisitorHeader />
//             </header>
//             <div className="visitor-hit" >
//                 <label className="visitor-label" data-testid="home-label" >{hit}</label>
//                 <button className="visitor-button" onClick = {addHit}>Hit</button>
//             </div>
//             <div className="visitor-ball" >
//                 <label className="visitor-label" data-testid="home-label" >{hit}</label>
//                 <button className="visitor-button" onClick = {addHit}>Hit</button>
//             </div>
//             <div className="visitor-strike" >
//                 <label className="visitor-label" data-testid="home-label" >{hit}</label>
//                 <button className="visitor-button" onClick = {addHit}>Hit</button>
//             </div>
            
//         </div>