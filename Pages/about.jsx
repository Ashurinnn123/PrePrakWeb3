import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

// ABOUT PAGE
export default class About extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <p>Halaman About Us</p>
        <Footer />
      </div>
    );
  }
}
