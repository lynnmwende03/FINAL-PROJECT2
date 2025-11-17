import React from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import BirthdayParty from "./components/sections/BirthdayParty";
import AllProducts from "./components/sections/AllProducts";
import Testimonial from "./components/sections/Testimonial";
import "./App.css";
import NewInstore from "./components/sections/NewInstore";
import CTA from "./components/sections/CTA";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div className="root">
      <Header />
      <Hero />
       <Features />
      <NewInStore />
      <BirthdayParty />
      <AllProducts />
      <Testimonial />
      <CTA />
      <Footer />
      
       

    </div>
  );
};

export default App;
