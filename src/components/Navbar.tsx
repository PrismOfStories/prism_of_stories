"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef(null);
  const mobileMenuRef = useRef(null);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from("#nav-wrapper", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
      })
        .from(".logo", {
          y: -30,
          opacity: 0,
          duration: 0.8,
        })
        .from(".nav-item", {
          y: -30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
        })
        .from(".cta-btn", {
          y: -30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
        });
    },
    { scope: container }
  );

  useGSAP(
    () => {
      if (isOpen) {
        const tl = gsap.timeline();

        tl.fromTo(
          ".mobile-menu-overlay",
          {
            clipPath: "inset(0% 0% 100% 0%)",
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.6,
            ease: "power2.out",
          }
        ).from(
          ".mobile-menu-item",
          {
            y: 50,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.2"
        );
      }
    },
    { dependencies: [isOpen] }
  );

  const toggleMenu = () => {
    if (isOpen) {
      const tl = gsap.timeline();
      tl.to(".mobile-menu-item", {
        y: -50,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
      }).to(
        ".mobile-menu-overlay",
        {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => setIsOpen(false),
        },
        "-=0.2"
      );
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <nav
        ref={container}
        id="nav-wrapper"
        className=" w-full z-50 bg-black backdrop-blur-sm "
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 pt-4 lg:px-8 flex justify-between items-center h-[8vh]">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/pos.svg"
              alt="logo-navbar"
              height={100}
              width={100}
              className="logo"
            />
            {/* <span className="text-2xl font-bold  text-primary lg:flex hidden logo">
              Prism of Stories
            </span> */}
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-item relative text-primary font-semibold transition-colors after:absolute after:left-0 after:bottom-[-4px] after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
            <button className="cta-btn rounded-lg text-primary hover:opacity-90 font-semibold cursor-pointer transform transition-all duration-300 hover:bg-primary hover:text-white py-1 px-2">
              Get Quote
            </button>
          </div>

          <div className="md:hidden">
            <button
              className="cursor-pointer z-[60] relative"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="h-8 w-8 text-primary" />
              ) : (
                <Menu className="h-8 w-8  text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="mobile-menu-overlay  fixed top-0 left-0 w-full h-screen z-[55] bg-black backdrop-blur-sm flex flex-col items-center justify-center md:hidden"
          style={{ clipPath: "inset(0% 0% 100% 0%)" }}
        >
          <Image
            src="/images/pos.svg"
            alt="logo-navbar"
            height={100}
            width={100}
            className="logo absolute top-5 left-5"
          />
          <button
            className="cursor-pointer z-[60] absolute top-5 right-5 "
            onClick={toggleMenu}
          >
            {isOpen ? (
              <X className="h-8 w-8 text-primary" />
            ) : (
              <Menu className="h-8 w-8 text-primary" />
            )}
          </button>
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-menu-item text-4xl font-semibold text-primary hover:text-primary transition-colors relative after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full
                "
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            <button className="mobile-menu-item gradient-brand-subtle rounded-lg text-4xl text-primary hover:opacity-90 font-semibold transform transition-all duration-300 hover:px-2 hover:py-1.5 hover:bg-primary hover:text-white">
              Get Quote
            </button>
          </div>
        </div>
      )}
    </>
  );
}
