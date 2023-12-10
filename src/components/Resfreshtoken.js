import React from 'react';
import axios from 'axios';

const RefreshTokenComponent = () => {
  const handleRefreshToken = async () => {
    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        // Handle scenario when access token is not found in local storage
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      };

      const response = await axios.post('https://exotechweb-backend.onrender.com//refresh-token', {}, config);
      console.log(response.data)
      if (response.data.status && response.data.access_token) {
        // Update access token in local storage with the new token
        localStorage.setItem('access_token', response.data.access_token);
        // Handle further actions after token refresh if needed
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
      // Handle token refresh failure
    }
  };

  return (
    <div>
      <h2>Refresh Token</h2>
      <button onClick={handleRefreshToken}>Refresh Token</button>
    </div>
  );
};

export default RefreshTokenComponent;
