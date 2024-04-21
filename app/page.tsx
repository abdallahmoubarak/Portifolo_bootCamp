import React from "react";
import Navbar from "@/components/atom/Navbar";
import HeroSection from "@/components/section/HeroSection";
import Projects from "@/components/section/Projects";
import Footer from "@/components/section/Footer";

export default function page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Projects />
      <Footer />
    </>
  );
}
