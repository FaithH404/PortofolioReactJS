import React from "react";
import "./Footer.css";
import { MdFacebook } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        FaitH404
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#tentang">Tentang Saya</a>
        </li>
        <li>
          <a href="#pengalaman">Pengalaman</a>
        </li>
        <li>
          <a href="#kontak">Kontak Saya</a>
        </li>
      </ul>

      <div className="footer__social">
        <a href="https://www.facebook.com/faatih.rastafaravartii">
          <MdFacebook />
        </a>
        <a href="https://www.instagram.com/fathh_27">
          <BsInstagram />
        </a>
        <a href="https://www.tiktok.com/@fathh09">
          <FaTiktok />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; M. Sasiful Faatih Al Avian. All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
