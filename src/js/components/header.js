import React from "react";
import Container from "./container";

const Header = () => (
  <header>
    <Container>
      <div className="logos-contanner">
       <div className="logo">
          <img
          src="//www.comolohago.cl/wp-content/uploads/2015/01/logo-web-original.png"
          alt="Main logo"
        />
       </div>
       <div className="logo">
          <img
          src="//www.comolohago.cl/wp-content/uploads/2015/03/Banner-web.jpg"
          alt="Banner"
        />
       </div>
      </div>
    </Container>
  </header>
);

export default Header;
