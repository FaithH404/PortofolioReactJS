import React from "react";
import "./Pengalaman.css";
import { BsPatchCheckFill } from "react-icons/bs";

const pengalaman = () => {
  return (
    <section id="pengalaman">
      <h5>Apa Skill saya</h5>
      <h2>Pengalaman belajar saya</h2>

      <div className="container pengalaman__container">
        {/*================================= Pengalaman Frontend =================================*/}
        <div className="pengalaman__frontend">
          <h3>Frontend Development</h3>
          <div className="pengalaman__content">
            <article className="pengalaman_detail">
              <BsPatchCheckFill className="pengalaman_detail-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Baik</small>
              </div>
            </article>
            <article className="pengalaman_detail">
              <BsPatchCheckFill className="pengalaman_detail-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Baik</small>
              </div>
            </article>
            <article className="pengalaman_detail">
              <BsPatchCheckFill className="pengalaman_detail-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Baik</small>
              </div>
            </article>
            <article className="pengalaman_detail">
              <BsPatchCheckFill className="pengalaman_detail-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Cukup</small>
              </div>
            </article>
            <article className="pengalaman_detail">
              <BsPatchCheckFill className="pengalaman_detail-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Cukup</small>
              </div>
            </article>
          </div>
        </div>

        {/*================================= Pengalaman Beckend =================================*/}
        <div className="pengalaman__backend">
          <h3>Backend Development</h3>
          <div className="pengalaman__content">
            <article className="pengalaman_detail">
              <BsPatchCheckFill className="pengalaman_detail-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Baik</small>
              </div>
            </article>
            <article className="pengalaman_detail">
              <BsPatchCheckFill className="pengalaman_detail-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Baik</small>
              </div>
            </article>
            <article className="pengalaman_detail">
              <BsPatchCheckFill className="pengalaman_detail-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Baik</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default pengalaman;
