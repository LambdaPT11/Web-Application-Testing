import React, { useState } from 'react';
import { VisitorHeader } from '../Headers';

import './VisitorTeam.styles.scss';


const VisitorTeam = () => {

    const [hit, setHit] = useState(0);
    const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);
    const [foul, setFoul] = useState(0);
    const [base, setBase] = useState(0);
    const [score, setScore] = useState(0);

    const reset = () => {
        setHit(0)
        setBall(0)
        setStrike(0)
        setFoul(0);
    }

    const addHit = () => {
        if (strike === 3 && ball === 4) {
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

    const addBall = () => {
        if (ball === 4) {
            setBall(0);
        }else{
            setBall(ball + 1);
        }
        
    }

    const addStrike = () => {
        if (strike === 3) {
            setStrike(0);
        }else{
            setStrike(strike + 1);
        }
        
    }

    const addFoul = () => {
        if (strike === 0) {
            setFoul(foul + 1);
            setStrike(1);
        }else{
        if (strike === 1) {
            setFoul(foul + 1);
            setStrike(2);
        }
            }
        } 


    return(
        <div class="grid-container">
            <div class="header">
                <VisitorHeader />
            </div>
            <div class="score">

                <div className="score-box">
                    <label className="home-score" data-testid="v-score-test">{score}</label>
                    <label className="score-label" >SCORE</label>
                </div>
                <div className="base-box">
                    <label className="base-on" data-testid="v-base-test">{base}</label>
                    <label className="base-label" >BASE</label>
                </div>
            </div>

            <div class="hit-label">
                <label className="v-hit-label" data-testid="v-hit-test" >{hit}</label>
            </div>
            <div class="strike-label">
                <label className="v-strike-label" data-testid="v-strike-test" >{strike}</label>
            </div>
            <div class="ball-label">
                <label className="v-ball-label" data-testid="v-ball-test" >{ball}</label>
            </div>
            <div class="foul-label">
                <label className="v-foul-label" data-testid="v-foul-test" >{foul}</label>
            </div>

            <div class="hit-btn">
                <button className="v-hit-btn" onClick = {addHit}>Hit</button>
            </div>
            <div class="ball-btn">
                <button className="v-ball-btn" onClick = {addBall}>Ball</button>
            </div>
            <div class="strike-btn">
                <button className="v-strike-btn" onClick = {addStrike}>Strike</button>    
            </div>
            <div class="foul-btn">
                <button className="v-foul-btn" onClick = {addFoul}>Foul</button>
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