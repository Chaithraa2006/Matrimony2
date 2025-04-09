import React from 'react';
import "../styles/elite.css";

const Elite = () => {
    const elitePlans = [
        {
            name: "LV-Elite",
            price: "51000",
            validity: "3",
            features: [
                "Dedicated Relationship Manager",
                "Personal Session by RM",
                "Exclusive Profile Creation",
                "Handpicked Premium Matches",
                "Prime Meeting & Weekly Feedback",
                "3 Months Exclusive Service"
            ]
        },
        {
            name: "LV-Elite Super",
            price: "101000",
            validity: "6",
            features: [
                "Dedicated Relationship Manager",
                "Personal Session by RM",
                "Exclusive Profile Creation",
                "Handpicked Premium Matches",
                "Prime Meeting & Weekly Feedback",
                "6 Months Exclusive Service"
            ]
        },
        {
            name: "LV-Elite Plus",
            price: "175000",
            validity: "12",
            features: [
                "Dedicated Relationship Manager",
                "Personal Session by RM",
                "Exclusive Profile Creation",
                "Handpicked Premium Matches",
                "Prime Meeting & Weekly Feedback",
                "12 Months Exclusive Service"
            ]
        }
    ];

    // Array of locations
    const locations = [
        "Bangalore",
        "Mumbai",
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
        "Raichur"
    ];

    return (
        <div className="elite-container">
            <h1>Elite Matrimony Services</h1>
            <p className="elite-description">
                Experience our premium matchmaking service with handpicked profiles and dedicated relationship managers
            </p>

            <div className="elite-plans">
                {elitePlans.map((plan, index) => (
                    <div key={index} className="elite-card">
                        <h2>{plan.name}</h2>
                        <div className="price">
                            <span className="rupee">₹</span> {plan.price} /-*
                        </div>
                        <div className="validity">
                            {plan.validity} Months
                        </div>
                        <button className="buy-now">
                            BUY NOW
                        </button>
                        <div className="features">
                            {plan.features.map((feature, fIndex) => (
                                <div key={fIndex} className="feature-item">
                                    <span className="check">✓</span> {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Consultation Form */}
            <div className="consultation-section">
                <h3>Avail Free Expert Consultation</h3>
                <p>Request a call back from our Elite Service Matchmaking Expert</p>
                <form className="consultation-form">
                    <div className="form-row">
                        <input type="text" placeholder="Name" className="name-input" />
                        <select className="location-select">
                            <option value="">Select Location</option>
                            {locations.map((location, index) => (
                                <option key={index} value={location.toLowerCase()}>
                                    {location}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-row">
                        <div className="phone-input">
                            <select className="country-code">
                                <option value="91">+91</option>
                                <option value="1">+1</option>
                                <option value="44">+44</option>
                                <option value="61">+61</option>
                                <option value="65">+65</option>
                            </select>
                            <input type="tel" placeholder="Mobile Number" />
                        </div>
                        <button type="submit" className="request-call">REQUEST A CALL</button>
                    </div>
                </form>
            </div>

            <p className="additional-note">
                *Additional charges may apply based on selected services
            </p>
        </div>
    );
};

export default Elite; 