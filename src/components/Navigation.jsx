import { Logo } from "./Logo";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "./NavLink";
import "../assets/Global.css";

export const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-green-dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle
          className="toggle-btn"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="pages/recipes/Recipes.jsx">Recipes</NavLink>
            <NavLink to="pages/reviews/Reviews.jsx">Reviews</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
