import React, { useState } from 'react';
import { HomeHeader } from '../Headers.jsx';

import './HomeTeam.styles.scss';


const HomeTeam = () => {

    const [hit, setHit] = useState(0);
    const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);
    const [score, setScore] = useState(0);

    const addHit = () => {
        setHit(hit + 1);
        setScore(score + 1);
    }

    return(
        <div className="base">
            <header>
                <HomeHeader />
            </header>
            <section className="score-section">
                <label className="home-score" data-testid="home-score">{score}</label>
            </section>
            <section className="btn-section">
                <div className="home-hit" >
                    <label className="home-label" data-testid="home-label" >{hit}</label>
                    <button className="home-button" onClick = {addHit}>Hit</button>
                </div>
                <div className="home-ball" >
                    <label className="home-label" data-testid="home-label" >{hit}</label>
                    <button className="home-button" onClick = {addHit}>Ball</button>
                </div>
                <div className="home-strike" >
                    <label className="home-label" data-testid="home-label" >{hit}</label>
                    <button className="home-button" onClick = {addHit}>Strike</button>
                </div>
            </section>
        </div>
    )
}

export default HomeTeam;