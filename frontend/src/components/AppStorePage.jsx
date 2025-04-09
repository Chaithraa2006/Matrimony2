import React from 'react';
import '../styles/AppStorePage.css';    // In AppStorePage.jsx  // In GooglePlayPage.jsx

const AppStorePage = () => {
  return (
    <div className="app-store-page">
      <h1>App Store Preview</h1>
      
      <div className="app-listing">
        <div className="app-header">
          <h2>Live</h2>
          <div className="app-info">
            <h3>Lovewhat</h3>
            <p>Tanisha Systems</p>
            <p>Designed for iPad</p>
            <p>#4 in Lifestyle | 3.5★ | 1.0 login</p>
            <p>Free (Offers In-App Purchases)</p>
          </div>
        </div>

        <div className="screenshots">
          <h3>Screenshots</h3>
          <div className="size-info">
            <span>Size</span>
            <span>Phone</span>
          </div>
        </div>

        <div className="app-features">
          <div className="feature">
            <h4>Highly Authentic & Audited Profiles</h4>
            <p>Verified versions of your profile</p>
          </div>
          
          <div className="profile-section">
            <h4>User Profile</h4>
            <button className="download">Downloads</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStorePage;