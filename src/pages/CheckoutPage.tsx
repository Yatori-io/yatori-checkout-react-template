import { useNavigate } from "react-router-dom";
import { YatoriCheckout } from "yatori-checkout/react";
import type { CheckoutData } from "../types";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const navigate = useNavigate();

  // Product details
  const productName = "Vans Classic Slip-On";
  const productPrice = 0.75;
  const merchantWallet = "G8RtxPyG2pdrAhrNRMgg7Hia8imCofdCYxvyWiNG14hx"; // Replace with your actual merchant wallet

  const handleConfirmation = (event: CustomEvent<CheckoutData>) => {
    console.log("YATORI Confirmed:", event.detail);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAnimationComplete = (event: any) => {
    const { signature } = event.detail;
    navigate("/success", {
      state: {
        signature,
        productName,
        productPrice,
      },
    });
  };

  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <h1>Checkout</h1>
        <button onClick={() => navigate("/")}>Back to Store</button>
      </header>

      <div className="checkout-container">
        <div className="checkout-summary">
          <h2>Order Summary</h2>
          <div className="order-item">
            <div className="item-info">
              <h3>{productName}</h3>
              <p>Quantity: 1</p>
            </div>
            <div className="item-price">${productPrice.toFixed(2)}</div>
          </div>

          <div className="order-totals">
            <div className="total-row">
              <span>Subtotal:</span>
              <span>${productPrice.toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="total-row total">
              <span>Total:</span>
              <span>${productPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="checkout-payment">
          <h2>Payment</h2>
          <p className="payment-description">
            Complete your purchase using Solana. Click the button below to
            connect your wallet and pay.
          </p>

          <div className="yatori-checkout-wrapper ">
            <YatoriCheckout
              className="yatori-checkout"
              wallet={merchantWallet}
              amount={productPrice}
              onYatoriConfirmed={handleConfirmation}
              onYatoriAnimationComplete={handleAnimationComplete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
