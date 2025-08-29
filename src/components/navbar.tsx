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
        .from(".nav-btn", {
          y: -30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
        })
        .from(".menu-icon", {
          y: -30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
        });
    },
    { scope: container }
  );

  return (
    <nav
      ref={container}
      id="nav-wrapper"
      className="w-full z-50 bg-white/95 backdrop-blur-sm py-1"
    >
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[8vh]">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="logo-navbar"
              height={70}
              width={70}
              className="logo"
            />
            <span className="text-2xl font-bold text-[#553d88] lg:flex hidden logo">
              Prism of Stories
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-item text-[#553d88] hover:text-primary transition-colors font-semibold "
              >
                {item.label}
              </Link>
            ))}
            <button className="nav-btn gradient-brand-subtle py-2 rounded-lg text-[#553d88] hover:opacity-90 font-semibold">
              Get Quote
            </button>
          </div>

          <div className="md:hidden">
            <button className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <button className="w-full gradient-brand-subtle px-4 py-2 rounded-lg text-white hover:opacity-90">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
