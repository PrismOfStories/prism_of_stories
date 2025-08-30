"use client";

import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    if (loading) {
      const tl = gsap.timeline();
      tl.from(".stair", { height: 0, stagger: { amount: -0.25 } });
      tl.to(".stair", { y: "100%", stagger: { amount: -0.25 } });
    }
  }, [loading]);

  if (!loading) return null;

  return (
    <div id="preloader" className="fixed inset-0 z-50 flex h-screen w-full">
      <div className="stair h-full w-1/5 bg-[#553d88]"></div>
      <div className="stair h-full w-1/5 bg-[#553d88]"></div>
      <div className="stair h-full w-1/5 bg-[#553d88]"></div>
      <div className="stair h-full w-1/5 bg-[#553d88]"></div>
      <div className="stair h-full w-1/5 bg-[#553d88]"></div>
    </div>
  );
}
