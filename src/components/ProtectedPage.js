import React from 'react';

const ProtectedPage = () => {
  const handleAccess = () => {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
      fetch('http://127.0.0.1:5001/checkout', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json', // Adjust content type if necessary
        },
      })
        .then(response => {
          if (response.ok) {
            // Handle success or redirect to protected content
            window.location.href = 'http://127.0.0.1:5001/checkout';
          } else {
            // Handle unauthorized access or other errors
            console.log('Unauthorized access or error:', response.statusText);
          }
        })
        .catch(error => {
          // Handle fetch errors
          console.error('Error:', error);
        });
    }
  };

  return (
    <div>
      <button onClick={handleAccess}>Access Protected Page</button>
    </div>
  );
};

export default ProtectedPage;










