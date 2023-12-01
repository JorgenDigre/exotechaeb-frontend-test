import React from 'react';
import axios from 'axios';

const LogoutComponent = () => {
  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        // Handle scenario when access token is not found in local storage
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      };

      const response = await axios.post('https://exotechweb-backend.onrender.com//logout', {}, config);
      console.log(response.data)
      if (response.data.status) {
        // Logout successful, clear access token from localStorage
        localStorage.removeItem('accessToken');
        // Handle further actions after logout (e.g., redirecting to login page, showing a message, etc.)
      }
    } catch (error) {
      console.error('Logout failed:', error);
      // Handle logout failure
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutComponent;

