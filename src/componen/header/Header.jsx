import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, Saya</h5>
        <h1>M. Saiful Faatih Al Avian</h1>
        <h5 className="text-light">Web Developer | IT Support | Freelancer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#kontak" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
