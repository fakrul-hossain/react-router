import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <nav className="flex gap-6 font-semibold text-green-400 justify-center mt-6">
      <Link className="" to="/">Home</Link>
      <ActiveLink to="/about">About</ActiveLink>
      <ActiveLink to="/pricing">Pricing</ActiveLink>
      <ActiveLink to="/posts">Posts</ActiveLink>
      <ActiveLink to="/friends">Friends</ActiveLink>
    </nav>
  );
};

export default Header;
