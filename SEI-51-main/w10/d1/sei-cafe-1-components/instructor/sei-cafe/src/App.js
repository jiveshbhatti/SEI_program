import React, { Component } from "react";
import "./App.css";
import MenuList from "./components/MenuList/MenuList";
import OrderDetail from "./components/OrderDetail/OrderDetail";
import Logo from "./components/Logo/Logo";
import CategoryList from "./components/CategoryList/CategoryList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">SEI-Cafe</header>
        <nav className="component">
          <Logo />
          <CategoryList />
        </nav>
        <MenuList />
        <OrderDetail />
      </div>
    );
  }
}

export default App;
