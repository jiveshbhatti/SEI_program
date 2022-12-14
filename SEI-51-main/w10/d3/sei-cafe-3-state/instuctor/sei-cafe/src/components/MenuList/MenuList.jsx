// When using JSX, React must be in scope
import React from "react";
import MenuListItem from "../MenuListItem/MenuListItem";

function MenuList(props) {
  return (
    <div className="MenuList">
      {props.menuItems.map((item) => (
        <MenuListItem {...item} />
      ))}
    </div>
  );
}

export default MenuList;
