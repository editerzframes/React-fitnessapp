import styles from "./nav.module.css";
import logo from "../assets/logo/LOGO.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Nav() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img alt="" src={logo} className="d-inline-block align-top" />{" "}
          <h2 className={styles.title}>7 Hormone </h2>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );

}
