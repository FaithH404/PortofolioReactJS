import React from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "Active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#tentang" onClick={() => setActiveNav("#tentang")} className={activeNav === "#tentang" ? "Active" : ""}>
        <AiOutlineUser />
      </a>
      <a href="#pengalaman" onClick={() => setActiveNav("#pengalaman")} className={activeNav === "#pengalaman" ? "Active" : ""}>
        <BsFillJournalBookmarkFill />
      </a>
      <a href="#kontak" onClick={() => setActiveNav("#kontak")} className={activeNav === "#kontak" ? "Active" : ""}>
        <BsTelephone />
      </a>
    </nav>
  );
};

export default Nav;
