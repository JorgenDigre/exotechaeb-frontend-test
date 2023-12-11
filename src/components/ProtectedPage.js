import React from 'react';

const ProtectedPage = () => {
  const handleAccess = () => {
    // Initiate a POST request to your backend to create the Checkout Session
    fetch('http://127.0.0.1:5001/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then(response => response.json())
      .then(data => {
        // Redirect user to the Checkout page using the returned session ID
        window.location.href = data.url;
       
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <button onClick={handleAccess}>Access Protected Page</button>
    </div>
  );
};

export default ProtectedPage;











