// When using JSX, React must be in scope
import React from "react";

function OrderDetail(props) {
  return (
    <div className="OrderDetail">
      <div className="OrderDetail-heading">
        <span>ORDER #{props.generateOrder()}</span>
        <span>{props.todaysDate}</span>
      </div>
      <div className="OrderDetail-container">{props.welcomeText}</div>
    </div>
  );
}

export default OrderDetail;
