"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-primary border-2 text-primary text-xl">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <Image src="/images/logoprism.png" alt="Logo" width={250} height={150} />
          <span className="font-bold text-xl text-primary">Prism of Stories</span>
        </div>

        {/* Right: Links + Social */}
        <div className="flex flex-col md:items-end space-y-4">
          {/* Quick Links */}
          <ul className="flex space-x-6 text-white font-medium">
            <li>
              <Link href="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition">
                About
              </Link>
            </li>
            {/* <li>
              <Link href="/services" className="hover:text-primary transition">
                Services
              </Link>
            </li> */}
            <li>
              <Link href="/contact" className="hover:text-primary transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 text-white text-xl">
            {/* <a href="#" className="hover:text-primary">
              <FaFacebookF />
            </a> */}
            <a href="https://www.instagram.com/p_o_s_2025?igsh=NGVleTBzN2N1azhh" className="hover:text-primary">
              <FaInstagram />
            </a>
            {/* <a href="#" className="hover:text-primary">
              <FaXTwitter />
            </a> */}
            <a href="https://www.linkedin.com/in/prismofstories-stories-06a674382/" className="hover:text-primary">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copy */}
      <div className="bg-primary text-center py-4 text-sm text-white">
        © {new Date().getFullYear()} Prism Of Stories. All rights reserved.
      </div>
    </footer>
  );
}
