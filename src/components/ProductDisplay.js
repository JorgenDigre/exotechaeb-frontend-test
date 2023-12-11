import React from 'react';

const ProductDisplay = () => (
    <section>
    <div className="product">
      
      <div className="description">
        <h3>Starter plan</h3>
        <h5>$20.00 / month</h5>
      </div>
    </div>
    <form action="http://127.0.0.1:5001/create-checkout-session" method="POST">
      <input type="hidden" name="lookup_key" value="{{PRICE_LOOKUP_KEY}}" />
      <button id="checkout-and-portal-button" type="submit">
        Checkout
      </button>
    </form>
  </section>
);

export default ProductDisplay;