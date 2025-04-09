import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/about.css";

const About = ({ hideNavbar }) => {
  return (
    <>
      {!hideNavbar && <Navbar />}
      <div className="about-hero">
       
      </div>
      <div className="about-content-wrapper">
        <p className="intro-text">
          Welcome to AtoZMatrimony.com! We are a leading Indian matrimonial matchmaking service provider. Our experienced and highly dedicated team is committed to provide 360 degree solutions to all prospective Indian brides and grooms. We are technology driven company providing the best platform to those who are genuinely looking for their soul mates. We have a long list of Happy Customers, who are pleased with our end-to-end services.
        </p>

        <div className="section">
          <h2 className="section-title">What makes AtoZMatrimony Different?</h2>
          <p>
            We are the only platform that ensures a five point verification of all new registered profiles. AtoZMatrimony.com is a genuine matrimonial site, this platform opens a new world for those who are serious about commitments and register with us for marriage purpose only. This is not a dating site, and to discourage the registration of fake users, we ask for a few mandatory documents and details to authenticate the profile of the new users. All new users are required to complete the authentication process before we make their profiles live on our portal.
          </p>
        </div>

        <div className="section">
          <h3>Five points of Authentication</h3>
          <ol>
            <li>Aadhaar card or Voter Id or PAN Card or Passport verification</li>
            <li>Phone number verification</li>
            <li>Email id verification</li>
            <li>Verifying information from Facebook profile</li>
            <li>Verifying education and other details from LinkedIn profile</li>
          </ol>
          <p className="note">To ensure the genuineness and authentication of profiles we have created this process.</p>
        </div>

        <div className="section">
          <h3>How this process is useful?</h3>
          <p>
            This process helps us to check the different details of the new users at different levels. Uploading the identity document like Aadhaar Card, Voter Id, Passport or PAN card is mandatory for new profiles. Without giving this information you can't move forward and register with us. Even to ensure this, we also ask our users to login through their Facebook and LinkedIn profiles, so that we can authenticate their profile. Post to check further, we have different tools to verify the other details from Facebook and LinkedIn profiles. We have created this cumbersome process for registration to ensure the safety of our users and make this platform safe for all.
          </p>
        </div>

        <div className="section">
          <h2>Wider & Better Search Options</h2>
          <p>
            We serve to all Indian communities in India and abroad with prime focus on USA, Canada, UK, Australia and Singapore. In a short span of time, we have become the first choice of all Indian communities to search the perfect life partner with ease. This is one of the best platforms to search and connect with the special someone.
          </p>
        </div>

        <div className="section">
          <h2>AtoZMatrimony helps you better</h2>
          <p>
            The site is solely managed by Tanisha Systems Pvt. Ltd. AtoZMatrimony was started with the vision to provide a customer friendly and highly authentic platform for all potential users. We provide an exclusive matchmaking experience that enables our users to find the perfect match for them without any hassle. We believe that ATOZMATRIMONY can help you to find that special person in the world for whom you have been waiting for all your life! All we ask is to give us a chance! What makes our experienced team a go-getter?
          </p>
          <ol>
            <li>We understand your requirements and try to meet your criteria from the Day 1.</li>
            <li>We provide completely personalized service to our customers.</li>
            <li>We offer seamless experience through our user friendly interface and features that can help you to manage your profile with ease.</li>
            <li>We give relevant search results, unmatched filtration, 100% authentic profiles and more features.</li>
          </ol>
          <p>
            We understand the importance of privacy and integrity. All communication between members goes through a secured email network. The names, personal details and all other information are kept confidential until the member himself decides to share the information with a potential match.
          </p>
        </div>

        <div className="company-footer">
          <img src="images\tanisha_systems_inc_logo.jpg" alt="Tanisha Systems Logo" className="company-logo" />
          <div className="company-details">
            <strong>Tanisha Systems, Inc.</strong>
            <p>AtoZMatrimony.com - Owned & Managed by Tanisha Systems Pvt. Ltd.</p>
          </div>
        </div>
      </div>
      {!hideNavbar && <Footer />}
    </>
  );
};

export default About;