import React from 'react';
import "../styles/personalized.css";

const Personalized = () => {
    const personalizedPlans = [
        {
            name: "LV-EXCLUSIVE",
            color: "#0099ff",
            profiles: 4,
            validity: 3,
            price: "21000"
        },
        {
            name: "LV-SUPREME",
            color: "#9933cc",
            profiles: 4,
            validity: 6,
            price: "35000"
        },
        {
            name: "LV-SUPREME-PLUS",
            color: "#4CAF50",
            profiles: 4,
            validity: 12,
            price: "39000"
        }
    ];

    // Array of locations
    const locations = [
        "Bangalore",
        "Mumbai",
        "Karnataka",
        "Delhi",
        "Chennai",
        "Hyderabad",
        "Kolkata",
        "Pune",
        "Ahmedabad",
        "Mysore",
        "Mangalore",
        "Hubli",
        "Dharwad",
        "Belgaum",
        "Gulbarga",
        "Bellary",
        "Davanagere",
        "Shimoga",
        "Tumkur",
        "Udupi",
        "Hassan",
        "Mandya",
        "Chikmagalur",
        "Kolar",
        "Raichur",
        "Bidar",
        "Hospet",
        "Gadag",
        "Karwar",
        "Chitradurga",
        "Bagalkot"
    ];

    return (
        <div className="personalized-container">
            <h2>Handpicked Profiles</h2>
            <p className="service-description">
                You will get smart guidance from 15 years and all communication will be managed by assigned expert on your behalf.
            </p>

            {/* Plans List */}
            <div className="personalized-plans">
                {personalizedPlans.map((plan, index) => (
                    <div key={index} className="plan-row">
                        <div className="plan-name" style={{backgroundColor: plan.color}}>
                            {plan.name}
                        </div>
                        <div className="plan-details">
                            <div className="view-section">
                                <span>VIEW</span>
                                <div className="profile-count">
                                    <span className="number">{plan.profiles}</span>
                                    <span className="text">Profiles / Week</span>
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
                                <span className="price">₹ {plan.price}*</span>
                                <button className="buy-now">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Features Section */}
            <div className="features-section">
                <h3>All Paid Membership Features + Personalized Service</h3>
                <div className="features-grid">
                    <div className="feature">
                        <div className="feature-icon">👤</div>
                        <p>Dedicated Relationship Manager</p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">📋</div>
                        <p>Handpicked Profiles</p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">✍️</div>
                        <p>Free Profile Writing Service</p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">⭐</div>
                        <p>Free Profile Highlighter</p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">📞</div>
                        <p>View Contact Details</p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">📱</div>
                        <p>View Mobile Number</p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">💬</div>
                        <p>Initiate Chat</p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">✉️</div>
                        <p>Send Messages</p>
                    </div>
                </div>

                <div className="contact-info">
                    For More Details, call us at +91-7827948215 (India)
                </div>

                {/* Consultation Form */}
                <div className="consultation-section">
                    <h3>Avail Free Expert Consultation</h3>
                    <p>Request a call back from our Personalized Service Matchmaking Expert</p>
                    <form className="consultation-form">
                        <input type="text" placeholder="Name" className="form-input" />
                        <select className="form-select location-select">
                            <option value="">Select Location</option>
                            {locations.map((location, index) => (
                                <option key={index} value={location.toLowerCase()}>
                                    {location}
                                </option>
                            ))}
                        </select>
                        <div className="phone-input">
                            <select className="country-code">
                                <option value="91">+91</option>
                                <option value="1">+1</option>
                                <option value="44">+44</option>
                                <option value="61">+61</option>
                                <option value="65">+65</option>
                            </select>
                            <input type="tel" placeholder="Mobile Number" className="form-input" />
                        </div>
                        <button type="submit" className="request-call">REQUEST A CALL</button>
                    </form>
                </div>
            </div>

            <p className="additional-note">
                *Additional amount will be charged after marriage fixation
            </p>
        </div>
    );
};

export default Personalized; 