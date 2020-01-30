import React, { useState } from 'react';
import Header from './components/header/Header.component';
import HomeTeam from './components/HomeTest/HomeTeam.component.jsx';
import CenterStage from './components/CenterStage/CenterStage.component';
import VisitorTeam from './components/VisitorTest/VisitorTeam.component';
import Footer from './components/footer/Footer.component';

import './App.css';






const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <section className='main-section'>
        <div className="home-section">
          <HomeTeam />
        </div>
        <div className="center-section">
          <CenterStage />
        </div>
        <div className="visitor-section">
          <VisitorTeam />
        </div>
      </section>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;


