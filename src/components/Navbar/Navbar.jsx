import React from "react";
import { Link } from "react-router-dom";
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">Home</Link>
      <Link data-cy="navbar-home-link" to="/products">Products</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button">Login</button>
    </div>
  );
};

export default Navbar;
