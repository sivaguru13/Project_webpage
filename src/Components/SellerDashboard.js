import React, { useState } from "react";
import "./SellerDashboard.css";

const SellerDashboard = () => {
  const [activeSection, setActiveSection] = useState("addProduct"); // Default section
  const [products, setProducts] = useState([]); // State for managing product list

  const handleAddProduct = (event) => {
    event.preventDefault();
    const newProduct = {
      id: products.length + 1,
      name: event.target.name.value,
      price: event.target.price.value,
      category: event.target.category.value,
    };
    setProducts([...products, newProduct]);
    event.target.reset(); // Reset form fields
    alert("Product added successfully!");
  };

  return (
    <div className="seller-dashboard">
      <h1>Seller Dashboard</h1>
      <div className="navigation">
        <button onClick={() => setActiveSection("addProduct")}>Add Product</button>
        <button onClick={() => setActiveSection("manageListings")}>Manage Listings</button>
        <button onClick={() => setActiveSection("salesReports")}>Sales Reports</button>
      </div>
      <div className="content">
        {activeSection === "addProduct" && (
          <div className="add-product">
            <h2>Add Product</h2>
            <form onSubmit={handleAddProduct}>
              <label>
                Product Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Price:
                <input type="number" name="price" required />
              </label>
              <label>
                Category:
                <input type="text" name="category" required />
              </label>
              <button type="submit">Add Product</button>
            </form>
          </div>
        )}
        {activeSection === "manageListings" && (
          <div className="manage-listings">
            <h2>Manage Listings</h2>
            {products.length > 0 ? (
              <ul>
                {products.map((product) => (
                  <li key={product.id}>
                    {product.name} - ${product.price} - {product.category}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No products listed yet.</p>
            )}
          </div>
        )}
        {activeSection === "salesReports" && (
          <div className="sales-reports">
            <h2>Sales Reports</h2>
            <p>Sales reports feature coming soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerDashboard;
