import React from "react";
import CV from "../../assets/CV.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#kontak" className="btn btn-primary">
        Hubungi Saya
      </a>
    </div>
  );
};

export default CTA;
