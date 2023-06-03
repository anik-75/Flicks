import React from "react";
import styles from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAstronaut,
  faClapperboard,
} from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.link_logo}>
        <h1 className={styles.logo}>
          <FontAwesomeIcon icon={faClapperboard} size="xl" />
          Flicks
        </h1>
      </Link>
      <Search />
      <a href="#">
        <FontAwesomeIcon icon={faUserAstronaut} size="2xl" />
      </a>
    </nav>
  );
}

export default Nav;
