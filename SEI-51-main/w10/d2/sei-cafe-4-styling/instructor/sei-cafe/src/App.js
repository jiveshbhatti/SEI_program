import React, { Component } from "react";
import "./App.css";
import MenuList from "./components/MenuList/MenuList";
import OrderDetail from "./components/OrderDetail/OrderDetail";
import Logo from "./components/Logo/Logo";
import CategoryList from "./components/CategoryList/CategoryList";
import UserLogOut from "./components/UserLogOut/UserLogOut";

class App extends Component {
  // initial state of the app when it first loads
  state = {
    name: "",
    email: "",
    currentOrderId: "---",
    isPaid: false,
    orderTotal: 0,
    menuCategories: ["Sandwiches", "Desserts", "Drinks"], // TEMPORARY: normally should be initialized to [] and populated from DB
    activeCategory: "Sandwiches",
    lineItems: [
      // TEMPORARY: to test checkout. normally the initial cart is []
      {
        qty: 2,
        item: {
          id: "0",
          name: "Hamburger",
          price: 5.95,
          emoji: "🍔",
          category: "Sandwiches",
        },
      },
      {
        qty: 2,
        item: {
          id: "1",
          name: "Ice Cream",
          price: 1.95,
          emoji: "🍨",
          category: "Desserts",
        },
      },
    ],
    menuItems: [
      // TEMPORARY: normally should be initialized to [] and populated from DB
      {
        id: "0",
        name: "Hamburger",
        price: 5.95,
        emoji: "🍔",
        category: "Sandwiches",
      },
      {
        id: "1",
        name: "Ice Cream",
        price: 1.95,
        emoji: "🍨",
        category: "Desserts",
      },
    ],
    color: false,
  };

  changeColor = () => {
    console.log("button clicked");
    this.setState((state) => {
      return { color: !state.color };
    });
  };

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <Logo />
          <CategoryList menuCategories={this.state.menuCategories} />
          <UserLogOut name={this.state.name} email={this.state.email} />
        </nav>
        <MenuList menuItems={this.state.menuItems} />
        <OrderDetail
          currentOrderId={this.state.currentOrderId}
          changeColor={this.changeColor}
          color={this.state.color}
        />
      </div>
    );
  }
}

export default App;
