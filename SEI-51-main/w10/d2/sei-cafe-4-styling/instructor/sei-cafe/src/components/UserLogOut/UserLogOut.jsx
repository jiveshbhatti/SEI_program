import React from "react";
import "./UserLogOut.css";
import Button from "@mui/material/Button";

class UserLogOut extends React.Component {
  render() {
    return (
      <div className="UserLogOut">
        <div>Name: {this.props.name}</div>
        <div>Email: {this.props.email}</div>
        {/* <button className="btn-lg">Logout</button> */}
        <Button variant="outlined">Logout</Button>
      </div>
    );
  }
}

export default UserLogOut;
