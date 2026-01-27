import { useLocation, useNavigate } from 'react-router-dom';
import type { LocationState } from '../types';
import './SuccessPage.css';

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;

  // Fallback if no state (direct navigation)
  const signature = state?.signature || 'N/A';
  const productName = state?.productName || 'Vans Classic Slip-On';
  const productPrice = state?.productPrice || 0.75;

  return (
    <div className="success-page">
      <div className="success-container">
        <div className="success-icon">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="#646cff" opacity="0.2"/>
            <path d="M30 50 L45 65 L70 35" stroke="#646cff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1>Order Confirmed!</h1>
        <p className="success-message">
          Thank you for your purchase. Your order has been successfully processed.
        </p>

        <div className="receipt">
          <h2>Receipt</h2>
          
          <div className="receipt-section">
            <h3>Order Details</h3>
            <div className="receipt-row">
              <span>Product:</span>
              <span>{productName}</span>
            </div>
            <div className="receipt-row">
              <span>Quantity:</span>
              <span>1</span>
            </div>
            <div className="receipt-row">
              <span>Price:</span>
              <span>${productPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="receipt-section">
            <h3>Payment Information</h3>
            <div className="receipt-row">
              <span>Amount Paid:</span>
              <span>${productPrice.toFixed(2)} USDC</span>
            </div>
            <div className="receipt-row">
              <span>Transaction Signature:</span>
              <span className="signature">{signature}</span>
            </div>
          </div>

          <div className="receipt-section">
            <h3>Shipping Information</h3>
            <div className="receipt-row">
              <span>Status:</span>
              <span className="status-processing">Processing</span>
            </div>
            <div className="receipt-row">
              <span>Estimated Delivery:</span>
              <span>5-7 business days</span>
            </div>
          </div>

          <div className="receipt-total">
            <div className="receipt-row">
              <span>Total:</span>
              <span>${productPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="success-actions">
          <button onClick={() => navigate('/')} className="btn-primary">
            Continue Shopping
          </button>
          <button 
            onClick={() => window.open(`https://solscan.io/tx/${signature}`, '_blank')}
            className="btn-secondary"
          >
            View on Solscan
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
