"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin,Instagram } from "lucide-react";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";


export default function ContactPage() {

  
    const formRef = useRef<HTMLFormElement | null>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<string | null>(null);
  
    const sendEmail = (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setStatus(null);
  
      if (!formRef.current) return;
  
      emailjs
        .sendForm(
          "service_6o2kbyn", 
          "template_tfkengi", 
          formRef.current,
          "V0qdN6L58lCJUb07j" 
        )
        .then(
          () => {
            setStatus("Message sent successfully ✅");
            setLoading(false);
            formRef.current?.reset();
          },
          (error) => {
            console.error("FAILED...", error.text);
            setStatus("Something went wrong ❌ Please try again.");
            setLoading(false);
          }
        );
    };
  return (
    <section className="bg-black min-h-screen mt-10">
      {/* Hero */}
      <div className="bg-gradient-to-r from-violet-700 via-purple-600 to-indigo-700 text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Let’s Connect
        </motion.h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Have a project in mind? Reach out — we’d love to help you grow your
          story.
        </p>
      </div>

      {/* Contact Section */}
     <div className="max-w-7xl mx-auto px-6 py-36 grid md:grid-cols-2 gap-12">
  {/* Left: Info */}
  <div>
    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
      Get in Touch
    </h2>
    <ul className="space-y-6 text-gray-300">
      <li className="flex items-center space-x-4">
        <span className="p-3 bg-primary/10 rounded-full">
          <Phone className="w-6 h-6 text-primary" />
        </span>
        <span className="text-lg">+91 97456 43726</span>
      </li>
      <li className="flex items-center space-x-4">
        <span className="p-3 bg-primary/10 rounded-full">
          <Mail className="w-6 h-6 text-primary" />
        </span>
        <span className="text-lg">Prismofstories25@gmail.com</span>
      </li>
      {/* <li className="flex items-center space-x-4">
        <span className="p-3 bg-primary/10 rounded-full">
          <MapPin className="w-6 h-6 text-primary" />
        </span>
        <span className="text-lg">Dubai, UAE</span>
      </li> */}
    </ul>

    {/* Socials */}
    <div className="mt-10 flex space-x-4">
      <a
        href="https://www.instagram.com/p_o_s_2025?igsh=NGVleTBzN2N1azhh"
        className="p-3 bg-white/10 backdrop-blur-md rounded-full shadow hover:bg-primary/20 transition"
      >
        <Instagram className="w-5 h-5 text-primary" />
      </a>
      {/* <a
        href="#"
        className="p-3 bg-white/10 backdrop-blur-md rounded-full shadow hover:bg-primary/20 transition"
      >
        <Twitter className="w-5 h-5 text-primary" />
      </a> */}
      <a
        href="https://www.linkedin.com/in/prismofstories-stories-06a674382/"
        className="p-3 bg-white/10 backdrop-blur-md rounded-full shadow hover:bg-primary/20 transition"
      >
        <Linkedin className="w-5 h-5 text-primary" />
      </a>
    </div>
  </div>

  {/* Right: Form */}
 <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
      <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="mt-2 block w-full rounded-lg bg-gray-900/60 border border-white/10 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className="mt-2 block w-full rounded-lg bg-gray-900/60 border border-white/10 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">Message</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your project..."
            required
            className="mt-2 block w-full rounded-lg bg-gray-900/60 border border-white/10 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3"
          ></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-primary/40 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </form>

      {status && (
        <p className="mt-4 text-sm text-center text-gray-300">{status}</p>
      )}
    </div>
</div>

    </section>
  );
}
