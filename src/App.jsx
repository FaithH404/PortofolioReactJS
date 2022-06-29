import React from "react";
import Footer from "./componen/footer/Footer";
import Header from "./componen/header/Header";
import Nav from "./componen/nav/Nav";
import Tentang from "./componen/tentang/Tentang";
import Kontak from "./componen/kontak/Kontak";
import Pengalaman from "./componen/pengalaman/Pengalaman";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Tentang />
      <Pengalaman />
      <Kontak />
      <Footer />
    </>
  );
};

export default App;
