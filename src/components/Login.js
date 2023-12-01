import React, { useState } from 'react';
import axios from 'axios';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://exotechweb-backend.onrender.com//login-token', {
        email: email,
        password: password
      });
      console.log(response.data)

      if (response.data.status) {
        setLoginStatus('Login successful');
        // Handle successful login - save token in local storage, redirect user, etc.
        localStorage.setItem('accessToken', response.data.access_token);
      } else {
        setLoginStatus('Invalid email or password');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setLoginStatus('Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>{loginStatus}</p>
    </div>
  );
};

export default LoginComponent;
