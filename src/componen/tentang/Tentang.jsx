import React from "react";
import "./Tentang.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";

const Tentang = () => {
  return (
    <section id="tentang">
      <h5>Mencari Tahu</h5>
      <h2>Tentang Saya</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Pengalaman</h5>
              <small>3+ Tahun Bekerja</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Pendidikan Terakhir</h5>
              <small>SMK</small>
            </article>

            <article className="about__card">
              <VscFolderActive className="about__icon" />
              <h5>Jurusan</h5>
              <small>Teknik Komputer dan Jaringan</small>
            </article>
          </div>

          <p>
            Saya lahir pada tanggal 27 Agustus 2001 di kota Cilegon. Saya adalah lulusan SMK jurusan Teknik Komputer dan Jaringan pada tahun 2019. Saya memiliki kemampuan dalam bidang IT seperti Mikrotik, HTML&CSS, Javascript, Python, C++,
            .NET, Visual Basic, MySQL, Ms. Word, Ms.Excel. Saya jugal memiliki pengalaman kerja sebagai Helpdesk, QC&QA selama 3 thun sampai sekarang.
          </p>

          <a href="#kontak" className="btn btn-primary">
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
