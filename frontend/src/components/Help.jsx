import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/help.css";

const Help = () => {
  return (
    <div>
      <Navbar />

      {/* ✅ Offer Banner */}
      <div className="offer-banner">Build 70% or above Trust Score & Get FLAT 30% off**</div>

      {/* ✅ FAQ Header Section */}
      <div className="faq-header">
        <h2>How can we help you today?</h2>
      </div>

      {/* ✅ Contact Info Section */}
      <div className="faq-contact-container">
        <div className="faq-card">
          <img src="/images/email.png" alt="Email" /> {/* ✅ Fixed Path */}
          <p>
            Send your queries to:{" "}
            <a href="mailto:support@lovevivah.com">supportAtozMatrinony.com</a>
          </p>
        </div>
        <div className="faq-card">
          <img src="/images/mobile.png" alt="Phone" /> {/* ✅ Fixed Path */}
          <p>
            Call <strong>+91-7827948215 (India)</strong>
            <br />
            9 am - 6 pm (Mon - Sat)
            <br />
            Call <strong>+1-212-9317139 (USA)</strong>
          </p>
        </div>
        <div className="faq-card">
          <img src="/images/chat.png" alt="Chat" /> {/* ✅ Fixed Path */}
          <p>
            For instant answer
            <br />
            <strong>9 am - 6 pm (Mon - Sat)</strong>
            <br />
            <span className="offline-status">⚫ WE ARE OFFLINE</span>
          </p>
        </div>
      </div>

      {/* ✅ FAQ Section */}
      <div className="faq-container">
        <h3>Most Popular FAQs</h3>
        <p>
          We have created FAQs based on various queries and feedback received from our members. We tried to capture most
          of the topics related to different categories. We are sure that all your queries will get resolved here.
        </p>
        <ul className="faq-list">
          <li><a href="#">1. General FAQs</a></li>
          <li><a href="#">2. Registration & Process</a></li>
          <li><a href="#">3. Profile & Photos</a></li>
          <li><a href="#">4. Login Help</a></li>
          <li><a href="#">5. Contact Members</a></li>
          <li><a href="#">6. Search Options & Getting Responses</a></li>
          <li><a href="#">7. Upgrade & Paid Services</a></li>
        </ul>
      </div>

      {/* ✅ Help Notification */}
      <div className="help-notification">
        <img src="/images/help.png" alt="Help" /> {/* ✅ Fixed Path */}
        <p>
          Need Help? We are here to assist you.{" "}
          <a href="#">Click here</a> to get assistance.
        </p>
        <p className="help-timing">Office Timing: 9 am - 6 pm (Mon - Sat)</p>
      </div>

      {/* ✅ WhatsApp Button */}
    
      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default Help;
