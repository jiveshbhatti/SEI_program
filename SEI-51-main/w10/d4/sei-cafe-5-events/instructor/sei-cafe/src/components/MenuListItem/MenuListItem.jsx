// When using JSX, React must be in scope
import React from "react";

function MenuListItem(props) {
  return (
    <div className="MenuListItem">
      <div className="emoji flex-ctr-ctr">{props.emoji}</div>
      <div className="name">{props.name}</div>
      <div className="buy">
        <span>${props.price}</span>
        <button
          className="btn-sm"
          onClick={() => props.handleAddItem(props.id)}
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default MenuListItem;
