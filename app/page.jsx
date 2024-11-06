"use client";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Services from "@/components/Services";
import Work from "@/components/Work";

const Home = () => {
  // implement locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Journey />
      <Work />
      <Contact />
      {/* temporary div */}
      <div className="h-[3000px]"></div>
    </div>
  );
};

export default Home;
