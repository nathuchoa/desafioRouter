import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to="/home">
          Home
        </Link>
        <Link  to="/clientes">
          Clientes
        </Link>
        <Link to="/cadastro">
          Cadastro
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
