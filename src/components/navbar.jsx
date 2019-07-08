import React, { Component } from "react";

// class NavBar extends Component {
//   render() {

//   }
// }

const NavBar = ({ totalCounters }) => {
  return (
    <nav class="nav nav-pills nav-fill">
      <a class="nav-item nav-link active" href="#">
        Active
      </a>
      <span className="badge badge-pill badge-secondary">{totalCounters}</span>
    </nav>
  );
};

export default NavBar;
