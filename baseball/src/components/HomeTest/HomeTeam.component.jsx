import React, { useState } from 'react';
import { HomeHeader } from '../Headers.jsx';

import './HomeTeam.styles.scss';


const HomeTeam = () => {

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
                <HomeHeader />
            </div>
            <div class="score">

                <div className="score-box">
                    <label className="home-score" data-testid="h-score-test">{score}</label>
                    <label className="score-label" >SCORE</label>
                </div>
                <div className="base-box">
                    <label className="base-on" data-testid="h-base-test">{base}</label>
                    <label className="base-label" >BASE</label>
                </div>
            </div>

            <div class="hit-label">
                <label className="h-hit-label" data-testid="h-hit-test" >{hit}</label>
            </div>
            <div class="strike-label">
                <label className="h-strike-label" data-testid="h-strike-test" >{strike}</label>
            </div>
            <div class="ball-label">
                <label className="h-ball-label" data-testid="h-ball-test" >{ball}</label>
            </div>
            <div class="foul-label">
                <label className="h-foul-label" data-testid="h-foul-test" >{foul}</label>
            </div>

            <div class="hit-btn">
                <button className="h-hit-btn" onClick = {addHit}>Hit</button>
            </div>
            <div class="ball-btn">
                <button className="h-ball-btn" onClick = {addBall}>Ball</button>
            </div>
            <div class="strike-btn">
                <button className="h-strike-btn" onClick = {addStrike}>Strike</button>    
            </div>
            <div class="foul-btn">
                <button className="h-foul-btn" onClick = {addFoul}>Foul</button>
            </div>
        </div>
    )
}

export default HomeTeam;