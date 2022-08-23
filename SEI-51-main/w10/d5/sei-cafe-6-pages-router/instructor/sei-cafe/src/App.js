import React, { Component } from "react";
import "./App.css";
import NewOrderPage from "./pages/NewOrderPage/NewOrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage/OrderHistoryPage";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  let goToOrder = () => {
    navigate("/orders");
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/orders/new" element={<NewOrderPage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
      </Routes>
      <button onClick={() => goToOrder()}>Go To Order</button>
    </div>
  );
}

export default App;
