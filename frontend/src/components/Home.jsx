import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessStoryDetails from './SuccessStoryDetails';
import Footer from './Footer';
import Menu from './Menu';

import '../styles/home.css';

<Menu/>
const Home = () => {
  const navigate = useNavigate();
  const [showGenderOptions, setShowGenderOptions] = useState(false);
  const [selectedGender, setSelectedGender] = useState('Bride');
  const [showAgeOptions, setShowAgeOptions] = useState(false);
  const [selectedAge, setSelectedAge] = useState('20 yrs');
  const [showReligionOptions, setShowReligionOptions] = useState(false);
  const [selectedReligion, setSelectedReligion] = useState('Select Religion');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const ageOptions = ['20 yrs', '22 yrs', '24 yrs', '26 yrs', '28 yrs', '30 yrs', '32 yrs', '34 yrs', '36 yrs', '38 yrs', '40+ yrs'];
  const religionOptions = ['Hindu', 'Muslim', 'Christian', 'Sikh', 'Jain', 'Buddhist', 'Jewish', 'Kannada', 'English', 'Tulu', 'Other'];

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleLoginClick = () => {
    setShowLogoutPopup(true);
  };

  const handleLogoutConfirm = () => {
    localStorage.removeItem("user");
    navigate('/login');
  };

  const handleLogoutCancel = () => {
    setShowLogoutPopup(false);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleReadMore = (coupleName) => {
    // Navigate to success story details page with the couple's name
    navigate(`/success-story/${encodeURIComponent(coupleName)}`);
  };

  const handleSearchClick = () => {
    // Directly navigate to login page when search is clicked
    navigate('/login');
  };

  // Close dropdowns when clicking outside
  const handleClickOutside = (e) => {
    if (!e.target.closest('.gender-selection') && !e.target.closest('.age-selection') && !e.target.closest('.religion-selection')) {
      setShowGenderOptions(false);
      setShowAgeOptions(false);
      setShowReligionOptions(false);
    }
  };

  // Add click outside listener
  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="love-thash-container">
      {/* Logout Confirmation Popup */}
      {showLogoutPopup && (
        <div className="logout-popup">
          <div className="logout-popup-content">
            <h3>Are you sure you want to logout?</h3>
            <div className="logout-buttons">
              <button className="logout-yes" onClick={handleLogoutConfirm}>Yes</button>
              <button className="logout-no" onClick={handleLogoutCancel}>No</button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Header Section */}
      <header className="header">
        <h1>AtoZ Matrimony</h1>
        <div className="menu-icon" onClick={handleMenuClick}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* ✅ Side Menu */}
        {menuOpen && (
          <div className="side-menu">
            <ul>
              <li onClick={() => navigate('/')}>Home</li>
              <li onClick={() => navigate('/about')}>About Us</li>
              <li onClick={() => navigate('/membership')}>Membership</li>
              <li onClick={() => navigate('/help')}>Help</li>
              <li onClick={() => navigate('/contact')}>Contact Us</li>
              <li onClick={() => navigate('/freeHoroscope')}>FreeHoroscope</li>
              <li onClick={() => navigate('/blog')}>Blog</li>
            </ul>
          </div>
        )}

        {/* ✅ Auth Buttons */}
        <div className="auth-buttons">
          <button className="register-btn" onClick={handleRegisterClick}>
            REGISTER FREE
          </button>
          <button className="login-btn" onClick={handleLoginClick}>Logout</button>
        </div>
      </header>

      {/* ✅ Hero Section */}
      <section className="hero">
        <h2>Dream it. Believe it. Make it happen!</h2>
        <div className="search-box">
          {/* Gender Selection */}
          <div
            className={`gender-selection ${showGenderOptions ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setShowGenderOptions(!showGenderOptions);
              setShowAgeOptions(false);
              setShowReligionOptions(false);
            }}
          >
            <div className="selected-option">Looking for a {selectedGender}</div>
            <span className="dropdown-arrow">▼</span>
            {showGenderOptions && (
              <div className="dropdown-options">
                <div
                  className={`option ${selectedGender === 'Bride' ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedGender('Bride');
                    setShowGenderOptions(false);
                  }}
                >
                  Bride
                </div>
                <div
                  className={`option ${selectedGender === 'Groom' ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedGender('Groom');
                    setShowGenderOptions(false);
                  }}
                >
                  Groom
                </div>
              </div>
            )}
          </div>

          {/* Age Selection */}
          <div
            className={`age-selection ${showAgeOptions ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setShowAgeOptions(!showAgeOptions);
              setShowGenderOptions(false);
              setShowReligionOptions(false);
            }}
          >
            <div className="selected-option">{selectedAge}</div>
            <span className="dropdown-arrow">▼</span>
            {showAgeOptions && (
              <div className="dropdown-options">
                {ageOptions.map(age => (
                  <div
                    key={age}
                    className={`option ${selectedAge === age ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedAge(age);
                      setShowAgeOptions(false);
                    }}
                  >
                    {age}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Religion Selection */}
          <div
            className={`religion-selection ${showReligionOptions ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setShowReligionOptions(!showReligionOptions);
              setShowGenderOptions(false);
              setShowAgeOptions(false);
            }}
          >
            <div className="selected-option">{selectedReligion}</div>
            <span className="dropdown-arrow">▼</span>
            {showReligionOptions && (
              <div className="dropdown-options">
                {religionOptions.map(religion => (
                  <div
                    key={religion}
                    className={`option ${selectedReligion === religion ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedReligion(religion);
                      setShowReligionOptions(false);
                    }}
                  >
                    {religion}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ✅ Search Button */}
          <button className="search-btn" onClick={handleSearchClick}>SEARCH</button>
        </div>
      </section>

      {/* ✅ Success Stories Section */}
      <section className="success-stories">
        <h2>Be inspired by Real Weddings</h2>
        <p>Find inspiration for your Special Day. Yours could be the next Success Story.</p>

        <div className="stories-container">
          {[
            {
              name: 'Shobhit & Gaurangi',
              imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQfGX32ESP4Int23G9sjXrnUr0cJCSOQkEg&s',
              story: "We enrolled with LoveVivah last year in December..."
            },
            {
              name: 'Priyanka and Pawan',
              imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw6rxjTvpXA-C4izUchNVWHJBb8hsea5O7rw&s',
              story: "We found our perfect match through LoveVivah..."
            },
            {
              name: 'Rahul and Latika',
              imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Mj66RVJlbnNle1cw2AJ75ziGvav09MWFvg&s',
              story: "Our journey to finding love was beautiful..."
            }
          ].map((story, index) => (
            <div className="story-card" key={index}>
              <div className="couple-image-container">
                <img
                  src={story.imgSrc}
                  alt={`${story.name} couple`}
                  className="couple-image"
                />
              </div>
              <div className="story-content">
                <h3>{story.name}</h3>
                <p>We are thankful for this wonderful platform to find our match...</p>
                <button onClick={() => handleReadMore(story.name)} className="read-more-btn">READ MORE</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
