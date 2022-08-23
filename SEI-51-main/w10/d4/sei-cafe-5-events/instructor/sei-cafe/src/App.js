import React, { Component } from "react";
import "./App.css";
import MenuList from "./components/MenuList/MenuList";
import OrderDetail from "./components/OrderDetail/OrderDetail";
import Logo from "./components/Logo/Logo";
import CategoryList from "./components/CategoryList/CategoryList";
import UserLogOut from "./components/UserLogOut/UserLogOut";

class App extends Component {
  state = {
    name: "Cardi B", // TEMPORARY to test logout: normally name should be initialized to ""
    email: "",
    isPaid: "no",
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
    menuCategories: ["Sandwiches", "Desserts"], // TEMPORARY: normally should be initialized to [] and populated from DB
    activeCategory: "Sandwiches",
    lineItems: [
      // TEMPORARY: to test checkout. normally the initial cart is []
      // {
      //   qty: 2,
      //   item: {
      //     id: "0",
      //     name: "Hamburger",
      //     price: 5.95,
      //     emoji: "🍔",
      //     category: "Sandwiches",
      //   },
      // },
    ],
    orderTotal: 0,
    totalQty: 0,
    orderId: "---",
  };

  handleAddItem = (id) => {
    this.setState((state) => {
      let found = state.lineItems.find((li) => li.item.id === id);
      if (!found) {
        let menuItem = state.menuItems.find((mi) => mi.id === id);
        return { lineItems: [...state.lineItems, { qty: 1, item: menuItem }] };
      } else {
        const newLineItem = { ...found, qty: found.qty + 1 };
        const newLineItemsArr = state.lineItems.map((li) => {
          return li === found ? newLineItem : li;
        });
        return { lineItems: newLineItemsArr };
      }
    });
  };

  handlePaid = () => {
    this.setState({ isPaid: "yes" });
  };

  handleLogout = () => {
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <Logo />
          <CategoryList categories={this.state.menuCategories} />
          <UserLogOut
            handleLogout={this.handleLogout}
            name={this.state.name}
            email={this.state.email}
          />
        </nav>
        <MenuList
          menuItems={this.state.menuItems}
          handleAddItem={this.handleAddItem}
        />
        <OrderDetail
          lineItems={this.state.lineItems}
          orderTotal={this.state.orderTotal}
          isPaid={this.state.isPaid}
          orderId={this.state.orderId}
          handlePaid={this.handlePaid}
        />
      </div>
    );
  }
}

export default App;
