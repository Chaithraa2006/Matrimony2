import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Personalized from "./Personalized";
import Elite from "./Elite";
import "../styles/membership.css";

const MembershipPlans = () => {
    const navigate = useNavigate();
    const [activePlan, setActivePlan] = useState('Online');

    const handlePlanChange = (plan) => {
        setActivePlan(plan);
    };

    const onlinePlans = [
        {
            name: "LV-BASIC",
            color: "#9acd32",
            contacts: 75,
            validity: 3,
            price: "2999"
        },
        {
            name: "LV-SUPER",
            color: "#ffa500",
            contacts: 150,
            validity: 6,
            price: "4999"
        },
        {
            name: "LV-ADVANCE",
            color: "#dc143c",
            contacts: 300,
            validity: 12,
            price: "7499"
        }
    ];

    const renderOnlinePlans = () => (
        <>
            <p className="service-info">
                All online services are self-assisted. Search, Shortlist and Send Interest.
            </p>

            <div className="plans-list">
                {onlinePlans.map((plan, index) => (
                    <div key={index} className="plan-row">
                        <div className="plan-name" style={{backgroundColor: plan.color}}>
                            {plan.name}
                        </div>
                        <div className="plan-details">
                            <div className="view-section">
                                <span>VIEW</span>
                                <div className="contacts-count">
                                    <span className="number">{plan.contacts}</span>
                                    <span className="text">Contacts</span>
                                </div>
                            </div>
                            <div className="validity-section">
                                <span>VALIDITY</span>
                                <div className="months">
                                    <span className="number">{plan.validity}</span>
                                    <span className="text">MONTHS</span>
                                    <span className="refundable">₹ REFUNDABLE</span>
                                </div>
                            </div>
                            <div className="price-section">
                                <span className="price">₹ {plan.price}</span>
                                <button className="buy-now">BUY NOW</button>
                            </div>
                        </div>
                        {index === 0 && (
                            <div className="offer-tag">
                                * Get flat 30% off *
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="features-section">
                <h3>Features of Paid Membership</h3>
                <div className="features-grid">
                    <div className="feature">
                        <div className="feature-icon">
                            <img src="images/contact.png" alt="Contact Details" />
                        </div>
                        <p>View Contact Details</p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">
                            <img src="images/mobile.png" alt="Mobile Number" />
                        </div>
                        <p>View Mobile Number</p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">
                            <img src="images/chat.png" alt="Chat" />
                        </div>
                        <p>Initiate Chat</p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">
                            <img src="images/message.png" alt="Messages" />
                        </div>
                        <p>Send Messages</p>
                    </div>
                </div>
            </div>

            <p className="govt-id-note">
                Providing a valid government issued id proof is mandatory for all paid users to access the features.
            </p>

            <div className="register-section">
                <div className="register-banner">
                    <p>Register Now & Enjoy <span>Unlimited Benefits</span></p>
                    <button className="register-free" onClick={() => navigate('/register')}>
                        REGISTER FREE
                    </button>
                </div>
            </div>

            <div className="free-features">
                <h3>FREE Features for all</h3>
                <div className="free-features-grid">
                    <ul>
                        <li>✓ Create Profile</li>
                        <li>✓ Upload Photos</li>
                        <li>✓ Define Partner Preference</li>
                        <li>✓ Search Relevant Profiles</li>
                    </ul>
                    <ul>
                        <li>✓ View Full Profile</li>
                        <li>✓ View Photos</li>
                        <li>✓ Send Interest</li>
                        <li>✓ Receive Interest</li>
                    </ul>
                    <ul>
                        <li>✓ Block Profile</li>
                        <li>✓ View Visitor to Your Profile</li>
                        <li>✓ Get Auto Matches</li>
                        <li>✓ View Latest Profiles</li>
                    </ul>
                </div>
            </div>

            <p className="trust-score-note">
                *Offer is valid on LV-Basic Membership Plan only to be upgraded within a week of achieving 70% Trust Score.
            </p>
        </>
    );

    return (
        <div>
            <Navbar />
            <div className="membership-container">
                <div className="membership-header">
                    <h1>MEMBERSHIP PLANS</h1>
                    <p>Welcome to LoveVivah.com! We are a leading Indian Matrimonial Matchmaking Service provider.</p>
                </div>

                <div className="plan-switch">
                    <button 
                        className={activePlan === 'Online' ? 'active' : ''} 
                        onClick={() => handlePlanChange('Online')}
                    >
                        Online
                    </button>
                    <button 
                        className={activePlan === 'Personalized' ? 'active' : ''} 
                        onClick={() => handlePlanChange('Personalized')}
                    >
                        Personalized
                    </button>
                    <button 
                        className={activePlan === 'Elite' ? 'active' : ''} 
                        onClick={() => handlePlanChange('Elite')}
                    >
                        Elite
                    </button>
                </div>

                {activePlan === 'Online' && renderOnlinePlans()}
                {activePlan === 'Personalized' && <Personalized />}
                {activePlan === 'Elite' && <Elite />}
            </div>
            <Footer />
        </div>
    );
};

export default MembershipPlans;
