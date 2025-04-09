import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";
import Navbar from "./Navbar";

const Register = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg'
  ];

  const backgroundColors = [
    'rgba(255, 255, 255, 0.95)',
    'rgba(255, 240, 245, 0.95)',
    'rgba(245, 245, 255, 0.95)',
    'rgba(255, 250, 240, 0.95)'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    mobile: "",
    profileFor: "",
    firstName: "",
    lastName: "",
    gender: "",
    dobDay: "01",
    dobMonth: "January",
    dobYear: "2000",
    country: "",
    religion: "",
    motherTongue: "",
    alerts: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    // Clear error when user starts typing
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.password,
          phone: formData.mobile,
          profileFor: formData.profileFor,
          gender: formData.gender,
          dob: `${formData.dobDay} ${formData.dobMonth} ${formData.dobYear}`,
          country: formData.country,
          religion: formData.religion,
          motherTongue: formData.motherTongue,
          alerts: formData.alerts
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Registration successful! Please check your email for OTP verification.");
        // Redirect to verify-otp page after 2 seconds
        setTimeout(() => {
          navigate("/verify-otp", { state: { email: formData.email } });
        }, 2000);
      } else {
        setError(data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-page" style={{ 
      background: 'linear-gradient(45deg, #ff4081, #9c27b0)',
      minHeight: "100vh",
      padding: "20px"
    }}>
      <Navbar />
      <div className="register-container" style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "2px solid rgba(255, 255, 255, 0.3)"
      }}>
        <div className="register-content">
          <h2>Create Profile on AtoZMatrimony</h2>
          <p>Start your journey with confidence. 100% Genuine and Trustworthy Profiles</p>

          {error && (
            <div className="message error-message">
              <span className="icon">❌</span>
              <span className="message-text">{error}</span>
            </div>
          )}

          {success && (
            <div className="message success-message">
              <span className="icon">✅</span>
              <span className="message-text">{success}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="register-form">
            <label>Email address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" required />

            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Password" required />

            <label>Mobile Number</label>
            <div className="mobile-input">
              <select name="countryCode">
                <option value="+91">India (+91)</option>
                <option value="+1">USA (+1)</option>
              </select>
              <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter Mobile Number" required />
            </div>

            <label>Profile creating for</label>
            <select name="profileFor" value={formData.profileFor} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Self">Self</option>
              <option value="Son">Son</option>
              <option value="Daughter">Daughter</option>
              <option value="Friend">Friend</option>
            </select>

            <label>First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter First Name" required />

            <label>Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter Last Name" required />

            <label>Gender</label>
            <div className="gender-buttons">
              <button type="button" className={formData.gender === "Male" ? "active" : ""} onClick={() => setFormData({ ...formData, gender: "Male" })}>
                Male
              </button>
              <button type="button" className={formData.gender === "Female" ? "active" : ""} onClick={() => setFormData({ ...formData, gender: "Female" })}>
                Female
              </button>
            </div>

            <label>Date of Birth</label>
            <div className="dob-container">
              <select name="dobDay" value={formData.dobDay} onChange={handleChange}>
                {[...Array(31).keys()].map((day) => (
                  <option key={day + 1} value={day + 1}>
                    {day + 1}
                  </option>
                ))}
              </select>
              <select name="dobMonth" value={formData.dobMonth} onChange={handleChange}>
                {["January", "February", "March", "April", "May", "June", "July", "August",
                  "September", "October", "November", "December"].map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
              </select>
              <select name="dobYear" value={formData.dobYear} onChange={handleChange}>
                {[...Array(30).keys()].map((year) => (
                  <option key={year + 1995} value={year + 1995}>
                    {year + 1995}
                  </option>
                ))}
              </select>
            </div>

            <label>Country</label>
            <select name="country" value={formData.country} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cabo Verde">Cabo Verde</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Greece">Greece</option>
              <option value="Grenada">Grenada</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-Bissau">Guinea-Bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Honduras">Honduras</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea, North">Korea, North</option>
              <option value="Korea, South">Korea, South</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Laos">Laos</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia">Micronesia</option>
              <option value="Moldova">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="North Macedonia">North Macedonia</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Qatar">Qatar</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">Sao Tome and Principe</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Sudan">South Sudan</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syria">Syria</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Thailand">Thailand</option>
              <option value="Timor-Leste">Timor-Leste</option>
              <option value="Togo">Togo</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States of America">United States of America</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vatican City">Vatican City</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>

            <label>Religion</label>
            <select name="religion" value={formData.religion} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
              <option value="Sikh">Sikh</option>
              <option value="Buddhist">Buddhist</option>
              <option value="Jain">Jain</option>
              <option value="Parsi">Parsi</option>
              <option value="Jewish">Jewish</option>
              <option value="Bahá'í">Bahá'í</option>
              <option value="Tribal">Tribal</option>
              <option value="Other">Other</option>
            </select>

            <label>Mother Tongue</label>
            <select name="motherTongue" value={formData.motherTongue} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Kannada">Kannada</option>
              <option value="Telugu">Telugu</option>
              <option value="Tamil">Tamil</option>
              <option value="Malayalam">Malayalam</option>
              <option value="Hindi">Hindi</option>
              <option value="Marathi">Marathi</option>
              <option value="Gujarati">Gujarati</option>
              <option value="Bengali">Bengali</option>
              <option value="Odia">Odia</option>
              <option value="Punjabi">Punjabi</option>
              <option value="Urdu">Urdu</option>
              <option value="Assamese">Assamese</option>
              <option value="Konkani">Konkani</option>
              <option value="Sindhi">Sindhi</option>
              <option value="Sanskrit">Sanskrit</option>
              <option value="Maithili">Maithili</option>
              <option value="Santhali">Santhali</option>
              <option value="Dogri">Dogri</option>
              <option value="Bodo">Bodo</option>
              <option value="Manipuri">Manipuri</option>
              <option value="Rajasthani">Rajasthani</option>
              <option value="Chhattisgarhi">Chhattisgarhi</option>
              <option value="Tulu">Tulu</option>
              <option value="Bhili">Bhili</option>
              <option value="Garo">Garo</option>
              <option value="Khasi">Khasi</option>
              <option value="Mizo">Mizo</option>
              <option value="Ladakhi">Ladakhi</option>
              <option value="Kashmiri">Kashmiri</option>
            </select>

            <div className="checkbox-container">
              <input type="checkbox" name="alerts" checked={formData.alerts} onChange={handleChange} />
              <span>Receive Alerts Via SMS</span>
            </div>

            <p>By submitting you agree to our <a href="#">Privacy Policy</a> and <a href="#">T&C</a>.</p>

            <button type="submit" className={`signup-button ${isLoading ? 'loading' : ''}`}>
              {isLoading ? (
                <span className="loader"></span>
              ) : (
                'Sign Up'
              )}
            </button>

            <div className="signin-link">
              Already have an account? <span onClick={() => navigate('/login')}>LOGIN</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
