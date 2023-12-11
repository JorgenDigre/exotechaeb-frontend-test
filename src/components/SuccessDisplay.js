import React from 'react';

const SuccessDisplay = ({ sessionId }) => (
    <section>
    <div className="product Box-root">
      
      <div className="description Box-root">
        <h3>Subscription to starter plan successful!</h3>
      </div>
    </div>
    <form action="http://127.0.0.1:5001/create-portal-session" method="POST">
      <input type="hidden" id="session-id" name="session_id" value={sessionId} />
      <button id="checkout-and-portal-button" type="submit">
        Manage your billing information
      </button>
    </form>
  </section>
);

export default SuccessDisplay;
