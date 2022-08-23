// When using JSX, React must be in scope
import React from "react";

function MenuListItem(props) {
  return <div className="component">MenuListItem {props.someOtherNumber}</div>;
}

export default MenuListItem;
