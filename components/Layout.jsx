import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <article>{children}</article>
      </main>
      <Footer />
    </>
  );
}
