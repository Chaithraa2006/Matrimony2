import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/profile.css"; // ✅ Import profile CSS

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Load user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login"); // 🔥 Redirect if not logged in
    }
  }, [navigate]);

  // ✅ Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); // 🔥 Redirect to login after logout
  };

  // ❗ Show loading while checking user data
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
  {/* ✅ Welcome Text */}
  <h2>Welcome, {user.name}!</h2>

  {/* ✅ Profile Image Below Welcome */}
  {user.image ? (
  <img
    src={user.image} // ✅ Corrected Image Path
    alt="Profile"
    className="profile-image"
  />
) : (
  <p>No profile image uploaded.</p>
)}


  {/* ✅ Profile Details */}
  <p>
    <strong>Email:</strong> {user.email}
  </p>
  <p>
    <strong>Phone:</strong> {user.phone}
  </p>
  <p>
    <strong>Password:</strong> {user.password}
  </p>

  {/* ✅ Logout Button */}
  <button className="logout-btn" onClick={handleLogout}>
    Logout
  </button>
</div>

    </div>
  );
}

export default Profile;





