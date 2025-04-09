import React, { useState } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";
import WhyLoveVivah from "./WhyLoveVivah"; 
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    securityCode: "",
    confirmSecurityCode: "",
  });

  const captchaCode = "RGAKO";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.securityCode !== captchaCode) {
      alert("Invalid Security Code!");
      return;
    }
    if (formData.securityCode !== formData.confirmSecurityCode) {
      alert("Security Code does not match!");
      return;
    }
    alert("✅ Form Submitted Successfully!");
  };

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-form-section">
          {/* Left Contact Form */}
          <div className="contact-form">
            <h1>Let's Get In Touch!</h1>
            <p>
              We always love to hear from our customers! We are happy to answer
              your questions and assist you.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Comment*</label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group security-code">
                <label>Security Code*</label>
                <div className="captcha">{captchaCode}</div>
                <input
                  type="text"
                  name="securityCode"
                  value={formData.securityCode}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Confirm Security Code*</label>
                <input
                  type="text"
                  name="confirmSecurityCode"
                  value={formData.confirmSecurityCode}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                SUBMIT
              </button>
            </form>
          </div>

          {/* Right Office Info */}
          <div className="office-info">
            <h2>Our Office Locations</h2>
            <div className="office">
              <h3>Gurgaon Office - Head Office</h3>
              <p>
                Address: SF709-713, JMD Megapolis Building, 7TH Floor,
                Sector-48, Sohna Road, Gurugram, HR 122018 INDIA
              </p>
              <p>Email: support@AtoZMatrimony.com</p>
              <p>Tel: +91-7827948215 (India)</p>
            </div>
            <div className="office">
              <h3>Noida Office</h3>
              <p>
                Address: Building No. 52, H Block, Sector 63, Electronic City,
                Noida, UP 201307 - INDIA
              </p>
              <p>Email: support@AtoZMatrimony.com</p>
            </div>
            <div className="office">
              <h3>Hyderabad Office</h3>
              <p>
                Address: Door No-6-3-1093, Office space no-102/A, 1st Floor,
                V.V. Vintage Boulevard, Raj Bhavan Road, Hyderabad-500082
              </p>
              <p>Landmark: Above Cafe Coffee Day</p>
              <p>Email: support@AtoZMatrimony.com</p>
            </div>
            <div className="office">
              <h3>New Jersey, USA Office</h3>
              <p>
                Address: 99 Wood Ave South, Suite # 308, Iselin, NJ 08830 USA
              </p>
              <p>Email: support@AtoZMatrimony.com</p>
              <p>Tel: +1-212-9317139 (USA)</p>
            </div>
            <div className="working-hours">
              <h3>Our Office Working Hours</h3>
              <p>Monday to Saturday : 9 am to 6 pm</p>
            </div>
          </div>
        </div>
        <WhyLoveVivah />
      </div>
      <About hideNavbar={true} />
      <Footer />
    </>
  );
};

export default Contact;


