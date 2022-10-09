import { NavLink } from "react-router-dom";
import { Navbar as NavbarBs, Container, Nav, Button } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            variant="outline-primary"
            className="rounded-circle"
            style={{ height: "3rem", width: "3rem", position: "relative" }}
            onClick={openCart}
          >
            <Cart size={22} />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
              style={{
                color: "#fff",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                transform: "translate(25%, 25%)",
                bottom: 0,
                right: 0,
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
