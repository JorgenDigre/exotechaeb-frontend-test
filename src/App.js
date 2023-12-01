import React from 'react';
import SignUpComponent from './components/Signup'; // Import the SignUpComponent
import LoginComponent from './components/Login';
import LogoutComponent from './components/Logout';
import RefreshTokenComponent from './components/Resfreshtoken';
import GoogleLoginComponent from './components/GoogleLogin';


function App() {
  return (
    <div className="App">
      {/* Other components or content */}
      <SignUpComponent /> {/* Include the SignUpComponent */}
      <LoginComponent />
      <LogoutComponent />
      <RefreshTokenComponent />
      <GoogleLoginComponent />
    </div>
  );
}

export default App;


