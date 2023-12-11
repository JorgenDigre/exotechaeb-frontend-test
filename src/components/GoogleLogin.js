import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GoogleLoginComponent = () => {
  const [jwtToken, setJwtToken] = useState('');

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        // Extract the token from the URL after Google login
        const queryParams = new URLSearchParams(window.location.search);
        const jwtToken = queryParams.get('access_token');

        if (jwtToken) {
          // Store the JWT token in local storage
          localStorage.setItem('access_token', jwtToken);

          // Set the JWT token in the component state
          setJwtToken(jwtToken);
        }
      } catch (error) {
        console.error('Error occurred while handling redirect:', error);
      }
    };

    handleRedirect();
  }, []);

  return (
    <div>
      {jwtToken ? (
        <p>Login successful! JWT token stored in local storage.</p>
      ) : (
        <button onClick={() => window.location.href = 'https://exotechweb-backend.onrender.com/login'}>Login with Google</button>
      )}
    </div>
  );
};

export default GoogleLoginComponent;


