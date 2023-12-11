import React from 'react';
import SignUpComponent from './components/Signup'; // Import the SignUpComponent
import LoginComponent from './components/Login';
import LogoutComponent from './components/Logout';
import RefreshTokenComponent from './components/Resfreshtoken';
import GoogleLoginComponent from './components/GoogleLogin';
import ProtectedPage from './components/ProtectedPage';
import GoogleLoginComponent2 from './components/GoogleLogin2';
import ProductDisplay from './components/ProductDisplay'; // Import the ProductDisplay component
import SuccessDisplay from './components/SuccessDisplay.js'; // Import the SuccessDisplay component
import Message from './components/Message'; // Import the Message component
import Logo from './components/Logo';
import CheckoutForm from './components/CheckoutForm.js'; // Import the Message component
import PaymentComponent from './components/PaymentComponent.js';



function App() {
  return (
    <div className="App">
      {/* Other components or content */}
      <SignUpComponent />
      <LoginComponent />
      <LogoutComponent />
      <RefreshTokenComponent />
      <GoogleLoginComponent />
      <ProtectedPage />
      <GoogleLoginComponent2 />

      <PaymentComponent />
      <CheckoutForm />

      
    </div>
  );
}

export default App;



