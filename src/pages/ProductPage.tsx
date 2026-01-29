import { useNavigate } from "react-router-dom";
import { YatoriCheckout } from "yatori-checkout/react";
import "./ProductPage.css";

const ProductPage = () => {
  const navigate = useNavigate();

  const productPrice = 0.75;
  const merchantWallet = "G8RtxPyG2pdrAhrNRMgg7Hia8imCofdCYxvyWiNG14hx";

  const handleViewCart = () => {
    navigate("/checkout");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleYatoriConfirmation = (event: any) => {
    console.log("YATORI Confirmed:", event.detail);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAnimationComplete = (event: any) => {
    const { signature } = event.detail;
    navigate("/success", {
      state: {
        signature,
        productName: "Vans Classic Slip-On",
        productPrice,
      },
    });
  };

  return (
    <div className="product-page">
      <header className="product-header">
        <h1>
          Vans Store
          <br />
          <span className="yatori-checkout-subtitle">yatori-checkout demo</span>
        </h1>
        <nav>
          <button
            className="cart-icon-btn"
            onClick={() => navigate("/checkout")}
            title="View Cart"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H16.55C17.3 13 17.96 12.59 18.3 11.97L21.88 5.48C22.25 4.82 21.77 4 21.01 4H6.21L5.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </nav>
      </header>

      <div className="product-container">
        <div className="product-image">
          <div className="shoe-image">
            <img src="/classic-slipon.avif" alt="Vans Classic Slip-On" />
          </div>
        </div>

        <div className="product-details">
          <h2>Vans Classic Slip-On</h2>
          <p className="product-price">$0.75</p>
          <p className="product-description">
            The Vans Classic Slip-On is the original checkerboard slip-on shoe.
            Featuring a low profile silhouette, padded collars, elastic side
            accents, and signature waffle outsoles for superior grip and board
            feel.
          </p>

          <div className="product-specs">
            <div className="spec-item">
              <strong>Size:</strong> One Size Fits Most
            </div>
            <div className="spec-item">
              <strong>Color:</strong> Classic Black/White Checkerboard
            </div>
            <div className="spec-item">
              <strong>Material:</strong> Canvas Upper, Rubber Sole
            </div>
          </div>

          <div className="product-buttons">
            <YatoriCheckout
              wallet={merchantWallet}
              amount={productPrice}
              onYatoriConfirmed={handleYatoriConfirmation}
              onYatoriAnimationComplete={handleAnimationComplete}
            />

            <button className="view-cart-btn" onClick={handleViewCart}>
              View Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
