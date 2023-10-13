import "../../App.css";
import "./navBar.css";
import yeLogo from "../../Images/ye_logo.png";

function NavBar() {
  return (
    <div className="navBar">
      <div className="navBar_container">
        <h3 className="navbar_link">MENU</h3>
        <img src={yeLogo} className="ye_logo" />
        <h3 className="navbar_link">SETTINGS</h3>
      </div>
    </div>
  );
}

export default NavBar;
