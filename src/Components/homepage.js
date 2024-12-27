<<<<<<< Updated upstream
// App.js
import React, { useState } from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
//   const [view, setView] = useState(""); // State to track current view (Seller/Buyer)
    const navigate=useNavigate();
    const sellerPage = () =>{
        navigate('/dashboard')
    }
    const buyerPage = () =>{
        navigate('/seller')
    }

  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <div className="button-group">
        <button onClick={sellerPage} className="btn">
          Seller
        </button>
        <button onClick={buyerPage} className="btn">
          Buyer
        </button>
      </div>
      <div className="content">
        {/* {view === "seller" && (
          <div className="seller-options">
            <h2>Seller Options</h2>
            <ul>
              <li>List a Product</li>
              <li>Manage Listings</li>
              <li>View Sales</li>
            </ul>
          </div>
        )} */}
        {/* {view === "buyer" && (
          <div className="buyer-options">
            <h2>Buyer Options</h2>
            <ul>
              <li>Browse Products</li>
              <li>View Cart</li>
              <li>Purchase History</li>
            </ul>
          </div>
        )} */}
        {/* {!view && <p>Please select an option to proceed.</p>} */}
      </div>
    </div>
  );
};

export default Dashboard;
=======
>>>>>>> Stashed changes
