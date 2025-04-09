import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import '../styles/search.css';

const Search = () => {
  const [lookingFor, setLookingFor] = useState('bride');
  const [ageFrom, setAgeFrom] = useState('18 Years');
  const [ageTo, setAgeTo] = useState('30 Years');
  const [heightFrom, setHeightFrom] = useState('');
  const [heightTo, setHeightTo] = useState('');
  const [showAdvanceOptions, setShowAdvanceOptions] = useState(false);
  const [profileId, setProfileId] = useState('');
  const navigate = useNavigate();

  const heightOptions = [
    { cm: '122cm', feet: '4ft' },
    { cm: '125cm', feet: '4ft 1in' },
    { cm: '127cm', feet: '4ft 2in' },
    { cm: '130cm', feet: '4ft 3in' },
    { cm: '132cm', feet: '4ft 4in' },
    { cm: '135cm', feet: '4ft 5in' },
    { cm: '137cm', feet: '4ft 6in' },
    { cm: '140cm', feet: '4ft 7in' },
    { cm: '142cm', feet: '4ft 8in' },
    { cm: '145cm', feet: '4ft 9in' },
    { cm: '147cm', feet: '4ft 10in' },
    { cm: '150cm', feet: '4ft 11in' },
    { cm: '152cm', feet: '5ft' },
    { cm: '155cm', feet: '5ft 1in' },
    { cm: '157cm', feet: '5ft 2in' },
    { cm: '160cm', feet: '5ft 3in' },
    { cm: '162cm', feet: '5ft 4in' },
    { cm: '165cm', feet: '5ft 5in' },
    { cm: '167cm', feet: '5ft 6in' },
    { cm: '170cm', feet: '5ft 7in' },
    { cm: '172cm', feet: '5ft 8in' },
    { cm: '175cm', feet: '5ft 9in' },
    { cm: '177cm', feet: '5ft 10in' },
    { cm: '180cm', feet: '5ft 11in' },
    { cm: '182cm', feet: '6ft' },
    { cm: '185cm', feet: '6ft 1in' },
    { cm: '187cm', feet: '6ft 2in' },
    { cm: '190cm', feet: '6ft 3in' },
    { cm: '192cm', feet: '6ft 4in' },
    { cm: '195cm', feet: '6ft 5in' },
    { cm: '197cm', feet: '6ft 6in' },
    { cm: '200cm', feet: '6ft 7in' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search functionality here
    console.log('Searching for', {
      lookingFor,
      ageFrom,
      ageTo,
      heightFrom,
      heightTo,
      profileId
    });
  };

  return (
    <>
      <Navbar />
      <div className="search-container">
        <div className="search-left-panel">
          <div className="search-form-container">
            <div className="looking-for-section">
              <p className="form-label">I'm looking for a</p>
              <div className="gender-buttons">
                <button 
                  className={`gender-btn ${lookingFor === 'bride' ? 'active' : ''}`}
                  onClick={() => setLookingFor('bride')}
                >
                  Bride
                </button>
                <button 
                  className={`gender-btn ${lookingFor === 'groom' ? 'active' : ''}`}
                  onClick={() => setLookingFor('groom')}
                >
                  Groom
                </button>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Age</label>
              <div className="age-range">
                <div className="select-container">
                  <select 
                    value={ageFrom} 
                    onChange={(e) => setAgeFrom(e.target.value)}
                    className="form-select"
                  >
                    <option>18 Years</option>
                    <option>19 Years</option>
                    <option>20 Years</option>
                    <option>21 Years</option>
                    <option>22 Years</option>
                    <option>23 Years</option>
                    <option>24 Years</option>
                    <option>25 Years</option>
                    <option>26 Years</option>
                    <option>27 Years</option>
                    <option>28 Years</option>
                    <option>29 Years</option>
                    <option>30 Years</option>
                    <option>31 Years</option>
                    <option>32 Years</option>
                    <option>33 Years</option>
                    <option>34 Years</option>
                    <option>35 Years</option>
                    <option>36 Years</option>
                    <option>37 Years</option>
                    <option>38 Years</option>
                    <option>39 Years</option>
                    <option>40 Years</option>
                  </select>
                  <div className="select-arrow">▼</div>
                </div>
                <div className="select-container">
                  <select 
                    value={ageTo} 
                    onChange={(e) => setAgeTo(e.target.value)}
                    className="form-select"
                  >
                    <option>18 Years</option>
                    <option>19 Years</option>
                    <option>20 Years</option>
                    <option>21 Years</option>
                    <option>22 Years</option>
                    <option>23 Years</option>
                    <option>24 Years</option>
                    <option>25 Years</option>
                    <option>26 Years</option>
                    <option>27 Years</option>
                    <option>28 Years</option>
                    <option>29 Years</option>
                    <option>30 Years</option>
                    <option>31 Years</option>
                    <option>32 Years</option>
                    <option>33 Years</option>
                    <option>34 Years</option>
                    <option>35 Years</option>
                    <option>36 Years</option>
                    <option>37 Years</option>
                    <option>38 Years</option>
                    <option>39 Years</option>
                    <option>40 Years</option>
                  </select>
                  <div className="select-arrow">▼</div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Height</label>
              <div className="height-range">
                <div className="select-container">
                  <select 
                    value={heightFrom}
                    onChange={(e) => setHeightFrom(e.target.value)}
                    className="form-select"
                  >
                    <option value="">From</option>
                    {heightOptions.map((height, index) => (
                      <option key={`from-${index}`} value={height.cm}>
                        {height.cm} - {height.feet}
                      </option>
                    ))}
                  </select>
                  <div className="select-arrow">▼</div>
                </div>
                <div className="select-container">
                  <select 
                    value={heightTo}
                    onChange={(e) => setHeightTo(e.target.value)}
                    className="form-select"
                  >
                    <option value="">To</option>
                    {heightOptions.map((height, index) => (
                      <option key={`to-${index}`} value={height.cm}>
                        {height.cm} - {height.feet}
                      </option>
                    ))}
                  </select>
                  <div className="select-arrow">▼</div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Religion</label>
              <div className="select-container full-width">
                <select className="form-select">
                  <option>Doesn't matter</option>
                  <option>Hindu</option>
                  <option>Muslim</option>
                  <option>Christian</option>
                  <option>Sikh</option>
                  <option>Jain</option>
                  <option>Buddhist</option>
                  <option>Other</option>
                </select>
                <div className="select-arrow">▼</div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Caste</label>
              <div className="select-container full-width">
                <select className="form-select">
                  <option>Doesn't matter</option>
                  <option>General</option>
                  <option>OBC</option>
                  <option>SC</option>
                  <option>ST</option>
                </select>
                <div className="select-arrow">▼</div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Mother Tongue</label>
              <div className="select-container full-width">
                <select className="form-select">
                  <option>Doesn't matter</option>
                  <option>Hindi</option>
                  <option>English</option>
                  <option>Urdu</option>
                  <option>Marathi</option>
                  <option>Punjabi</option>
                  <option>Thulu</option>    
                  <option>Bengali</option>
                  <option>Telugu</option>
                  <option>Marathi</option>
                  <option>Tamil</option>
                  <option>Gujarati</option>
                  <option>Kannada</option>
                  <option>Malayalam</option>
                  <option>Punjabi</option>
                </select>
                <div className="select-arrow">▼</div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Marital Status</label>
              <div className="select-container full-width">
                <select className="form-select">
                  <option>Doesn't matter</option>
                  <option>Never Married</option>
                  <option>Divorced</option>
                  <option>Widowed</option>
                  <option>Separated</option>
                </select>
                <div className="select-arrow">▼</div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Country</label>
              <div className="select-container full-width">
                <select className="form-select">
                  <option>Doesn't matter</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>UAE</option>
                  <option>Other</option>
                </select>
                <div className="select-arrow">▼</div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">State</label>
              <div className="select-container full-width">
                <select className="form-select">
                  <option>Doesn't matter</option>
                  <option>Andhra Pradesh</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Tamil Nadu</option>
                  <option>Maharashtra</option>
                  <option>Delhi</option>
                  <option>Gujarat</option>
                  <option>Punjab</option>
                  <option>Other</option>
                </select>
                <div className="select-arrow">▼</div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Search By Keyword</label>
              <input 
                type="text" 
                className="keyword-input" 
                placeholder="eg: Doctor, IIT, IIM"
              />
            </div>

            <div className="profile-options">
              <label className="radio-container">
                <input type="radio" name="profile-type" defaultChecked />
                <span className="radio-label">All Profiles</span>
              </label>
              <label className="radio-container">
                <input type="radio" name="profile-type" />
                <span className="radio-label">Profile with Photo Only</span>
              </label>
            </div>

            <div className="advanced-options-toggle" onClick={() => setShowAdvanceOptions(!showAdvanceOptions)}>
              <span className={`toggle-icon ${showAdvanceOptions ? 'open' : ''}`}>▶</span>
              <span className="toggle-text">Show Advance Options</span>
            </div>

            <button className="search-button" onClick={handleSearch}>
              <span className="search-icon">🔍</span> SEARCH
            </button>
          </div>
        </div>
        <div className="search-right-panel">
          <div className="profile-id-search">
            <h3>Search By Profile ID</h3>
            <div className="profile-id-input-container">
              <input 
                type="text" 
                placeholder="Enter Profile ID" 
                value={profileId}
                onChange={(e) => setProfileId(e.target.value)}
                className="profile-id-input"
              />
              <button className="profile-id-search-btn">SEARCH</button>
            </div>
          </div>

          <div className="app-promotion">
            <h3>SEARCH YOUR</h3>
            <p>LIFE PARTNER ON THE GO</p>
            <img src="images\app-preview.png" alt="Mobile App Preview" className="app-phone-image" />
            <div className="app-store-buttons">
              <a onClick={() => navigate('/google-play')} style={{cursor: 'pointer'}}>
                <img src="images\google-play.png" alt="Get it on Google Play" className="app-store-button" />
              </a>
              <a onClick={() => navigate('/app-store')} style={{cursor: 'pointer'}}>
                <img src="images\app-store.png" alt="Download on App Store" className="app-store-button" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
