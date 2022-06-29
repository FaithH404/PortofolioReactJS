import React from "react";
import "./Kontak.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Kontak = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_4sx19e8", "template_28r7bla", form.current, "7zEHfeipuW2oSoazr");

    e.target.reset();
  };
  return (
    <section id="kontak">
      <h5>Untuk Lebih Dekat</h5>
      <h2>Hubungi Saya</h2>

      <div className="container kontak__container">
        <div className="kontak__options">
          <article className="kontak__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>faatihrastafara319@gmail.com</h5>
            <a href="mailto:faatihrastafara319@gmail.com" target="_blank">
              Kirim Pesan
            </a>
          </article>
          <article className="kontak__option">
            <AiOutlineInstagram />
            <h4>Instagram</h4>
            <h5>Faatih</h5>
            <a href="https://www.instagram.com/fathh_27/" target="_blank">
              Follow
            </a>
          </article>
          <article className="kontak__option">
            <AiOutlineWhatsApp />
            <h4>WhatsApp</h4>
            <h5>+62 878-2695-8039</h5>
            <a href="https://api.whatsapp.com/send?phone=087826958039" target="_blank">
              Chat
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Nama Panjang" required />
          <input type="text" name="email" placeholder="Email" required />
          <textarea name="message" rows="7" placeholder="Masukan Pesan" required></textarea>
          <button type="submit" className="btn btn-primary">
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
};

export default Kontak;
