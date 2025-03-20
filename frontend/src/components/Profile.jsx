import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login"); // Redirect to login if not logged in
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>

      {/* Profile Image on Top */}
      {user.image && (
        <div className="profile-image">
          <img src={`http://localhost:5000${user.image}`} alt="Profile" width="150" />
        </div>
      )}

      {/* User Details Below Image */}
      <div className="profile-details">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Password:</strong> {user.password}</p>
      </div>

      {/* Logout Button */}
      <button onClick={() => { localStorage.removeItem("user"); navigate("/login"); }}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
