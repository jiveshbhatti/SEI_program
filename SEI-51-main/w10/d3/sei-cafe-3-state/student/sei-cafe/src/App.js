import React, { Component } from 'react';
import './App.css';
import MenuList from './components/MenuList/MenuList';
import OrderDetail from './components/OrderDetail/OrderDetail';
import Logo from './components/Logo/Logo';
import CategoryList from './components/CategoryList/CategoryList';
import UserLogOut from './components/UserLogOut/UserLogOut';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav">
            <Logo />
            <CategoryList />
            <UserLogOut />
        </nav>
        <MenuList />
        <OrderDetail />
      </div>
    );
  }
}

export default App;