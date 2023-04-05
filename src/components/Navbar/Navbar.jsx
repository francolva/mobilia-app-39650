import { Button } from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import imgLogo from "../../assets/images/mobilia-logo.png";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src={imgLogo}
        alt="Mobilia logo"
      />
      <ul style={{ display: "flex", gap: "30px", listStyleType:"none" }}>
        <Button> Dormitorio </Button>
        <Button> Home Office </Button>
        <Button> Living </Button>
        <Button> Cocina </Button>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;