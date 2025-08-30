"use client";

import { motion } from "framer-motion";
import { Rocket, Search, PenTool, Handshake, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="bg-gray-50 mt-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-violet-700 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            About Prism of Stories
          </motion.h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            A modern <strong>digital marketing agency</strong> blending design,
            technology, and strategy to help brands shine online.
          </p>
        </div>
      </div>

      <div className=" max-w-[87rem] mx-auto px-6 py-28">
        <div className="w-full flex justify-between items-start gap-8 lg:flex-row flex-col">
          <h1 className="text-6xl text-primary font-bold text-center lg:text-left mb-12 leading-tight">
            Who We Are
          </h1>
          <p className="w-full lg:max-w-[50%] text-center lg:text-right font-medium text-xl text-gray-700 leading-relaxed">
            At <strong>Prism of Stories</strong>, we believe every business has
            a story worth telling and the digital world is the best place to
            share it. We craft <strong>websites</strong>,{" "}
            <strong>SEO strategies</strong>, branding, ads, and{" "}
            <strong>video content</strong> to help your business grow in today’s
            competitive digital landscape.
          </p>
        </div>{" "}
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            To empower businesses of all sizes with smart{" "}
            <strong>digital solutions</strong> that drive growth, build trust,
            and create lasting impressions. We don’t just deliver projects — we
            build partnerships where{" "}
            <strong>your success is our success</strong>.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To become a leading <strong>digital growth partner</strong>, known
            for combining creativity with strategy, and delivering{" "}
            <strong>measurable results</strong> that matter.
          </p>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">
            What Makes Us Different
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Modern & Fresh Approach",
                text: "Fast, sleek, mobile-ready designs for today’s users.",
              },
              {
                icon: Search,
                title: "Result-Driven SEO & Marketing",
                text: "Not just traffic, but the right audience that converts.",
              },
              {
                icon: PenTool,
                title: "Creative Branding & Content",
                text: "Visuals and videos that connect emotionally with audiences.",
              },
              {
                icon: Handshake,
                title: "Partnership, Not Just Service",
                text: "We work alongside you, understanding your goals & industry.",
              },
              {
                icon: Lightbulb,
                title: "Transparent Process",
                text: "Clear timelines, honest pricing, no hidden surprises.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-md p-8 text-left"
              >
                <item.icon className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Meet Your Growth Partner
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Whether you’re a startup launching your first site, a growing business
          scaling up, or an established brand in need of a refresh{" "}
          <strong>Prism of Stories</strong> is here to help you{" "}
          <strong>stand out, connect, and grow</strong>.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/contact"
          className="inline-block bg-primary  text-white px-8 py-4 rounded-full font-semibold shadow-lg"
        >
          Let’s Write Your Story
        </motion.a>
      </div>
    </section>
  );
}
