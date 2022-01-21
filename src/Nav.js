import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav(props) {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const scrollListener = window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div>
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
      </div>

      {/* <img
          className="nav__avtar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
          alt="Netflix Logo"
        /> */}
      <div>
        <button onClick={props.signOut} className="signout_button">
          Sign out
        </button>
      </div>
    </div>
  );
}

export default Nav;
