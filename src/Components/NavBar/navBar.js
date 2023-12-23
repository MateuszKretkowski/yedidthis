import "../../App.css";
import "./navBar.css";
import "../Bibliography/biblio.js"
import "../yeezy/yeezy.tsx"
import yeLogo from "../../ye_logo.png";
import {Link} from 'react-router-dom';

function NavBar() {

  return (
    <div className="navBar">
      <div className="navBar_container">

      <button className="button">
      <a href={'#biblio'}>
        <h3 className="navbar_link">BIBLIOGRAPHY</h3>
      </a>
      </button>
        <img src={yeLogo} className="ye_logo" />
      <button className="button">
      <a href={'#yeezy'}>
        <h3 className="navbar_link">YEEZY</h3>
      </a>
      </button>
      </div>
    </div>
  );
}

export default NavBar;
