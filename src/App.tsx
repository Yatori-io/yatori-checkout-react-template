import "./App.css";
import { YatoriCheckout } from "yatori-checkout/react";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleConfirmation = (event: any) => {
    console.log(event.detail);
  };
  return (
    <>
      <h1 className="absolute top-10">Welcome to the future</h1>

      <div>
        <YatoriCheckout
          wallet="G8RtxPyG2pdrAhrNRMgg7Hia8imCofdCYxvyWiNG14hx"
          amount={0.01}
          onYatoriConfirmed={handleConfirmation}
        />
      </div>
    </>
  );
}

export default App;
