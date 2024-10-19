import React, { useEffect } from 'react';
import './event.css';
// import sep from './components/ui/separator.png';
import poster from './poster.jpg';
import BB from './components/Posters/Brain_Brawl.png';
import CNC from './components/Posters/ChooseNCode.png';
import CB from './components/Posters/CONCEPT BREAKDOWN.png';
import IS from './components/Posters/IDEA SPOTLIGHT.png';
import LL from './components/Posters/Loader&Logic.png';
import PA from './components/Posters/page_asthetics.jpg';
import SG from './components/Posters/Squid Game.png';
import VR from './components/Posters/Vision Reel.png';
import WC from './components/Posters/Wonder crate.jpg';
import QR from './components/Posters/Quest for Riches.png';
import SP from './components/Posters/Strategy Pitch.png';
import PG from './components/Posters/Photography.png';
import { Underline } from 'lucide-react';

const techEventData = [
  {
    id: 1,
    title: 'Concept Breakdown',
    image: CB,
    theam: 'Paper Presentation',
    idea: 'Max members in a team : 2\nTime for presentation: 5 mins (4+1)\nLast Date for Registration: 21/10/2024',
    formLink: 'https://forms.gle/sMBRDR2e7GRNPYVw8',
  },
  {
    id: 2,
    title: 'Strategy Pitch',
    image: SP,
    theam: 'Project Presentation',
    idea: 'Maximum members in a team: 3\nTime for presentation: 5 mins (4+1)\nLast date for Registration : 21/10/2024',
    formLink: 'https://forms.gle/i8SSfHtezkTWsQjs6',
  },
  {
    id: 3,
    title: 'Idea spotlight',
    image: IS,
    theam: 'Idea Presentation',
    idea: 'Exclusively for 2nd years\nMaximum Members in team: 3\nLast date for Registration : 21/10/2024',
    formLink: 'https://forms.gle/UGUz5M3kWLHQVQ5w6',
  },
  {
    id: 4,
    title: 'Vision Reel',
    image: VR,
    theam: 'Topic Visualization',
    idea: 'Mini-Hackathon\nTeam size: 3\nTiming: 9.30 am to 12:15 pm',
    formLink: 'https://forms.gle/qaEfi8gt68eJRWEa9',
  },
  {
    id: 5,
    title: 'Choose and Code',
    image: CNC,
    theam: 'Coding Contest',
    idea: 'Exclusive to 2nd year students\nIndividual participation\nTiming: 10:45 am - 12:15 pm',
    formLink: 'https://forms.gle/6gCXsxSQwpvPctMt6',
  },
  {
    id: 6,
    title: 'Loader logic',
    image: LL,
    theam: 'Coding Contest',
    idea: 'Exclusively to 3rd year students\nMax members in a team: 2\nTiming: 10:45 am - 12:15 pm',
    formLink: 'https://forms.gle/c777SH8wmZCeXbMD9',
  },
  {
    id: 7,
    title: 'Brain Brawl',
    theam: 'Tech Quiz',
    image: BB,
    idea: 'Max Members in Team: 2\nVarious levels of rounds\nTiming: 10:45 am - 12:15 pm',
    formLink: 'https://forms.gle/Frf8kRszE68h8Wfs5',
  },
  {
    id: 8,
    title: 'Page Aesthetics',
    image: PA,
    theam: 'Web Page Designing',
    idea: 'Tool for 2nd years: Figma\nTool for 3rd years: React\nTiming: 10:45 am - 12:15 pm',
    formLink: 'https://forms.gle/2HfA1Pv76CGc1XTK8',
  },
];

const nonTechEventData = [
  {
    id: 9,
    title: 'Wonder Crate',
    image: WC,
    theam: 'Mystry Box',
    idea: '3 members per team\nTiming: 1:15 pm - 3:15 pm',
    formLink: 'https://forms.gle/mLaF6Kz6rScKo3e88',
  },
  {
    id: 10,
    title: 'Squid Game',
    image: SG,
    theam: 'Survival Stakes',
    idea: 'Solo participation\nTiming: 1:15 pm - 2:30 pm',
    formLink: 'https://forms.gle/Gkvu24Amyk6UsGKE8',
  },
  {
    id: 11,
    title: 'Visual Clip',
    theam: 'Photography',
    image: PG,
    idea: 'Solo participation\nTiming: 1:15 pm - 2:00 pm',
    formLink: 'https://forms.gle/ToWEUDdkqzEE1frJ9',
  },
  {
    id: 12,
    title: 'Quest For Riches',
    theam: 'Treasure Hunt',
    image: QR,
    idea: '3 members per team\nTiming: 2:30 pm - 3:30 pm',
    formLink: 'https://forms.gle/3fXLLxK6ehH1JN3U8',
  },
];

const Event = () => {
  useEffect(() => {
    const eventCards = document.querySelectorAll('.event-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add the 'visible' class
        }
      });
    });

    eventCards.forEach(card => {
      observer.observe(card);
    });
  }, []);

  return (
    <div className="event-container">
      <img 
        src={poster} 
        alt="Event Poster" 
        className="event-poster" 
      />

      <h2 className="section-title">TECH EVENTS</h2>
      <div className="event-grid">
        {techEventData.map((event) => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.title} className="event-image" />
            <h3 className="event-title">{event.title}</h3>
            <h3 className="event-thm">{event.theam}</h3>
            {/* <img src={sep}></img> */}
            <h3 className='event-guid'>GUIDELINES :</h3>
            <ul className="event-idea">
              {event.idea.split('\n').map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <a href={event.formLink} target="_blank" rel="noopener noreferrer" className="register-button">
              Register
            </a>
          </div>
        ))}
      </div>
      <h2 className="section-title">NON-TECH EVENTS</h2>
      <div className="event-grid">
        {nonTechEventData.map((event) => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.title} className="event-image" />
            <h3 className="event-title">{event.title}</h3>
            <h3 className="event-thm">{event.theam}</h3>
            {/* <hr /> */}
            <h3 className='event-guid'>GUIDELINES :</h3>
            <ul className="event-idea">
              {event.idea.split('\n').map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <a href={event.formLink} target="_blank" rel="noopener noreferrer" className="register-button">
              Register
            </a>
          </div>
        ))}
      </div>

      <div className="footer">
        <p>© CSEA 2024. All Rights Reserved.</p>
        <p>Department of Computer Science and Engineering,Kongu Engineering College</p>
        <p>
          Designed & Developed by <a className='hover-link' href="https://senthanvigasm.netlify.app/" target='_blank'>SENTHAN VIGAS M </a><br />Maintained by  <a className='hover-link' href="https://guruprasaaths.netlify.app/" target='_blank'>Guruprasaath S</a>
        </p>
      </div>  

    </div>
  );
};

export default Event;
