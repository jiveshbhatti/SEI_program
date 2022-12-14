// When using JSX, React must be in scope
import React from "react";

function CategoryList(props) {
  return (
    <div>
      <ul className="CategoryList">
        {props.categories.map((c) => (
          <li> {c} </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
