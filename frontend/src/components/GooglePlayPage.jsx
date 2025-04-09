import React from 'react';
import '../styles/GooglePlayPage.css';  
import Navbar from './Navbar';

const GooglePlayPage = () => {
  return (
    <>
      <Navbar />
      <div className="google-play-page">
        <div className="app-main">
          <div className="app-header">
            <div className="app-title-section">
              <img src="images\atozicon.jpg" alt="AtoZMatrimony App Icon" className="app-icon" />
              <div className="app-title-info">
                <h1>AtoZMatrimony.com - Matrimony App</h1>
                <p className="developer">AtoZMatrimony</p>
                <div className="app-meta">
                  <span className="rating">3.5 ★</span>
                  <span className="downloads">50K+ reviews</span>
                </div>
              </div>
            </div>
            <div className="app-actions">
              <button className="install-btn">Install</button>
            </div>
          </div>

          <div className="app-screenshots">
            <div className="screenshot-scroll">
              <img src="images\Screenshot1.png" alt="App Screenshot 1" />
              <img src="images\Screenshot2.png" alt="App Screenshot 2" />
              <img src="images\Screenshot3.png" alt="App Screenshot 3" />
              <img src="images\Screenshot4.png" alt="App Screenshot 4" />
              <img src="images\Screenshot5.png" alt="App Screenshot 5" />
            </div>
          </div>

          <div className="app-details">
            <div className="about-section">
              <h2>About this app</h2>
              <p>This is official matrimony app of AtoZMatrimony.com website. AtoZMatrimony.com App helps you search your life partner from millions of genuine profiles. Create your profile and start searching for your life partner. We are the only matrimony app that provides verified profiles with 100% genuine information. Our app is designed to help you find your perfect match with ease.</p>
            </div>

            <div className="data-safety">
              <h2>Data safety</h2>
              <div className="safety-items">
                <div className="safety-item">
                  <span className="icon">🔒</span>
                  <p>Data is encrypted in transit</p>
                </div>
                <div className="safety-item">
                  <span className="icon">✓</span>
                  <p>You can request that data be deleted</p>
                </div>
              </div>
              <button className="see-details">See details</button>
            </div>

            <div className="similar-apps">
              <h2>Similar apps</h2>
              <div className="app-list">
                <div className="similar-app">
                  <img src="images\chavara.png" alt="Similar App 1" />
                  <p>ThePerfect Dating</p>
                  <span className="rating">4.5 ★</span>
                </div>
                <div className="similar-app">
                  <img src="images/similar2.png" alt="Similar App 2" />
                  <p>SoulGenie</p>
                  <span className="rating">4.2 ★</span>
                </div>
                <div className="similar-app">
                  <img src="images/similar3.png" alt="Similar App 3" />
                  <p>BeMyPartner</p>
                  <span className="rating">4.0 ★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GooglePlayPage;