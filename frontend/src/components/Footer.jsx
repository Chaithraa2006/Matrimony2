import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* ✅ Browse Matrimonial Section */}
      <div className="browse-section">
        <h3>Browse Matrimonial Profiles By</h3>
        <p>
          <strong className="badge">Religion:</strong> Hindu | Jain | Muslim | Christian | Sikh | Parsi | Buddhist | Jewish
        </p>
        <p>
          <strong className="badge">Caste:</strong> Agarwal | Gupta | Arora | Baniya | Brahmin | Jat | Kayastha | Khatri | Rajput | Sunni
        </p>
        <p>
          <strong className="badge">State:</strong> Delhi | Chandigarh | Gujarat | Karnataka | Maharashtra | Punjab | Rajasthan | Tamil Nadu
        </p>
        <p>
          <strong className="badge">Regional:</strong> Bengali | Gujarati | Hindi | Kannada | Malayalam | Marathi | Punjabi | Tamil | Telugu | Urdu
        </p>
        <p>
          <strong className="badge">Country:</strong> India | USA | UK | Canada | Australia
        </p>
      </div>

      {/* ✅ Company Section */}
      <div className="footer-links">
        <div className="column">
          <h4>Company</h4>
          <ul>
            <li>✅ About Us</li>
            <li>✅ Success Stories</li>
            <li>✅ Blogs</li>
            <li>✅ Media & PR</li>
            <li>✅ Careers</li>
          </ul>
        </div>

        {/* ✅ Help & Support Section */}
        <div className="column">
          <h4>Help & Support</h4>
          <ul>
            <li>✅ Live Support</li>
            <li>✅ Online Help - FAQ</li>
            <li>✅ Contact us</li>
            <li>✅ Sitemap</li>
          </ul>
        </div>

        {/* ✅ Policies Section */}
        <div className="column">
          <h4>Policies</h4>
          <ul>
            <li>✅ Privacy Policy</li>
            <li>✅ Terms of Use</li>
            <li>✅ Disclaimer</li>
            <li>✅ Payment Policy</li>
          </ul>
        </div>

        {/* ✅ Services Section */}
        <div className="column">
          <h4>Our other Services</h4>
          <button className="btn AtoZMatrimony-btn">AtoZMatrimony HARMONY</button>
          <button className="btn planyourvivah-btn">PlanYourVivah.com</button>
        </div>

        {/* ✅ Follow Us Section */}
        <div className="column">
          <h4>Follow Us</h4>
          <div className="social-icons">
              <a href="https://sympsearch.com/Auth" target="_blank">
                <img src="/images/Sympsearch.png" alt="Sympsearch" />
              </a>
              <a href="https://gtongue.com/" target="_blank">
                <img src="\images\Gtounge.png" alt="Gtounge" />
              </a>
              <a href="https://glawhub.com" target="_blank">
                <img src="/images\Glaw.png" alt="GLaw" />
              </a>
              <a href="https://atozmap.com" target="_blank">
                <img src="\images\Map.png" alt="Map" />
              </a>
          </div>
        </div>
      </div>

      <p className="copyright">Copyrights 2025, AtoZMatrimony.com. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
