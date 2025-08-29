"use client";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/ui/home/hero-section";
// import { ServicesSection } from "@/components/ui/home/services-sections";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useGSAP(function () {
    const tl = gsap.timeline();
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });
  });
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <div className="h-screen w-full flex fixed z-20 top-0">
        <div className="stair h-full w-1/5 bg-[#553d88]"></div>
        <div className="stair h-full w-1/5 bg-[#553d88]"></div>
        <div className="stair h-full w-1/5 bg-[#553d88]"></div>
        <div className="stair h-full w-1/5 bg-[#553d88]"></div>
        <div className="stair h-full w-1/5 bg-[#553d88]"></div>
      </div>
      <div className="">
        <HeroSection />
        {/* <ServicesSection /> */}
      </div>
    </main>
  );
}
