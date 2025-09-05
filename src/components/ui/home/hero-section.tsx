"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { motion } from "motion/react";
import Link from "next/link";

export default function HeroSection() {
  useEffect(() => {
    gsap.from("#intro-img", {
      opacity: 0,
      duration: 0.8,
      delay: 1,
      scale: 0.2,
      borderRadius: "20px",
    });

    gsap.to("#intro-img", {
      opacity: 0.8,
      duration: 0.8,
      delay: 1.2,
      scale: 1,
      borderRadius: "20px",
    });

    gsap.from("#hero-right-img", {
      opacity: 0,
      duration: 1,
      x: 120,
      delay: 1.2,
      ease: "power2.out",
    });

    gsap.to("#hero-right-img", {
      opacity: 1,
      duration: 1,
      x: 0,
      delay: 2,
      ease: "power2.out",
    });
  }, []);
  return (
    <section className="h-full lg:h-[80vh] max-w-[90rem] mx-auto overflow-hidden mt-10 px-4">
      <div className="relative h-full w-full py-4 lg:py-0 ">
        <Image
          src="/images/hero-bg.jpg"
          alt="intro-hero"
          fill
          className="object-cover opacity-0 "
          id="intro-img"
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-6 sm:px-12 text-white">
          <div className="max-w-xl text-center lg:text-left mt-6 lg:mt-0 ">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Transform Your Business with{" "}
              <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Cutting-Edge Technology
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
              className="mt-4 text-lg opacity-90"
            >
              Your one-stop digital agency for Website Development, SEO, Digital
              Marketing, Branding, and Creative Design everything you need to
              thrive online.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="flex items-center border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition"
              >
                <Play className="mr-2 h-5 w-5" />
                Get Started Today
              </Link>

            </motion.div>
          </div>

          <div className="lg:w-1/2 flex justify-center items-center">
            <Image
              src="/images/hero-right-img.png"
              alt="Hero Illustration"
              width={630}
              height={700}
              className="object-contain opacity-0 "
              priority
              id="hero-right-img"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
