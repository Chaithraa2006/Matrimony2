import React from "react";
import Navbar from "./Navbar";
import "../styles/WhyLoveVivah.css";

const WhyLoveVivah = () => {
  return (
    <section className="why-lovevivah">
      <h2 className="section-title">AtoZMatrimony?</h2>
      
      <div className="features-grid">
        {/* Feature 1 */}
        <div className="feature-card">
          <div className="feature-icon">
            <img src="images\trust.png" alt="Trustworthy" />
          </div>
          <h3>100% Trustworthy</h3>
          <p>
            We are highly authentic, 100% trustworthy matrimonial platform. 
            We follow individual authorizations to ensure genuine profiles.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-card">
          <div className="feature-icon">
            <img src="images\verify-icon.png" alt="Authentication" />
          </div>
          <h3>Higher Authentication</h3>
          <p>
            Higher level of verification to keep false users at low. 
            We authenticate Aernavi card's number between 1000 and no greater credibility of members.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-card">
          <div className="feature-icon">
            <img src="images\search-icon.png" alt="Search" />
          </div>
          <h3>Better Search & Matches</h3>
          <p>
            Better search results & matches based on your preferences. 
            Search the desired profiles without any issues & get relevant matches.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="feature-card">
          <div className="feature-icon">
            <img src="images\connect-icon.png" alt="Connect" />
          </div>
          <h3>Explore & Connect</h3>
          <p>
            Explore and connect anytime, anywhere with registered users at your store. 
            Get access to unlimited profiles as share interest with the one you like.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default WhyLoveVivah;