// When using JSX, React must be in scope
import React from "react";

function UserLogOut({ name, email }) {
  return (
    <div className="UserLogOut">
      Name: {name}
      <br />
      Email: {email}
      <br />
      <button>Logout</button>
    </div>
  );
}

export default UserLogOut;
