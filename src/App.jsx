import { useState } from 'react';
import Event from './Event';
import './App.css';
import Ripple from './components/ui/ripple';
import ParticleBackground from './components/ui/ParticleBackground';


function App() {
  return (
    <div className="app-container">
      <div className="ripple-container">
      <Ripple sizes={{ mainCircleSize: 200, logoSize: 10 }} />
      </div>
      <ParticleBackground />
      <div className="event">
        <Event />
      </div>
    </div>
  );
}

export default App;
