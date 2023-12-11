// Sample code using react-google-login
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginComponent2 = () => {
  const responseGoogle = async (response) => {
    try {
      const { accessToken } = response; // Obtain the access token from Google response
      
      // Send the access token securely to your Flask backend
      const res = await fetch('http://127.0.0.1:5001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ access_token: accessToken }),
      });

      if (res.ok) {
        // Handle successful authentication in your React app
        // Redirect to the dashboard or perform other actions as needed
        // For example, store the received JWT token in local storage
        const data = await res.json();
        localStorage.setItem('access_token', data.access_token);
        // Redirect or perform other actions in your React app
      } else {
        // Handle authentication failure
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  return (
    <div>
      <GoogleLogin
        clientId="966253249737-mjspomjkhkm62uksonemndf42erhsq1g.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        redirectUri="https://exotechweb.com/" 
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleLoginComponent2;
