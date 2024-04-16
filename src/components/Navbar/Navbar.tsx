import React from "react";

interface navbarProps {
  itemsCount: number;
}

const Navbar = ({ itemsCount }: navbarProps) => {
  return <div>Navbar: {itemsCount}</div>;
};

export default Navbar;
