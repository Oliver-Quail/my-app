import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {

    return (
        <nav className={styles.navBar}>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Pump n Dump</Link>
            <Link to="/">Chat GPT</Link>
            <Link to="/">Block chains</Link>
        </nav>
    )
}


export default Navbar;