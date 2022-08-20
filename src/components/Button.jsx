import { Link } from "react-router-dom";

export const Button = ({ buttonTypeClass, to, children }) => {
  return (
    <Link className={`button ${buttonTypeClass} px-4 py-1 fs-4`} to={to}>
      {children}
    </Link>
  );
};
