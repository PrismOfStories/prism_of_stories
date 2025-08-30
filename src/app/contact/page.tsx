"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="bg-gray-50 min-h-screen mt-10">
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
      <div className="max-w-7xl mx-auto px-6 py-36 grid md:grid-cols-2 gap-12 ">
        {/* Left: Info */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
          <ul className="space-y-6 text-primary">
            <li className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-primary" />
              <span>hello@prismofstories.com</span>
            </li>
            <li className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary" />
              <span>Dubai, UAE</span>
            </li>
          </ul>

          {/* Socials */}
          <div className="mt-8 flex space-x-4">
            <a
              href="#"
              className="p-3 bg-white rounded-full shadow hover:bg-indigo-50"
            >
              <Facebook className="w-5 h-5 text-primary" />
            </a>
            <a
              href="#"
              className="p-3 bg-white rounded-full shadow hover:bg-indigo-50"
            >
              <Twitter className="w-5 h-5 text-primary" />
            </a>
            <a
              href="#"
              className="p-3 bg-white rounded-full shadow hover:bg-indigo-50"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-primary mb-6">
            Send Us a Message
          </h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-primary">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 block w-full rounded-lg border-primary shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 block w-full rounded-lg border-primary shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="mt-1 block w-full rounded-lg border-primary shadow-sm focus:ring-primary focus:border-primary"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold shadow-lg"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
