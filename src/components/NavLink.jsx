import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const NavLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link className={`link ${isActive ? "active" : ""}`} to={to} {...props}>
      {children}
    </Link>
  );
};
