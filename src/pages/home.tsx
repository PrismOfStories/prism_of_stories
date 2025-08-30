"use client";

import HeroSection from "@/components/ui/home/hero-section";
import { ServicesSection } from "@/components/ui/home/services-sections";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ServicesSection />
    </div>
  );
}
