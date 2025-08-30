"use client";

import HeroSection from "@/components/ui/home/hero-section";
import { ServicesSection } from "@/components/ui/home/services-sections";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <HeroSection />

      <section className="mt-48">
        <div className=" max-w-[87rem] mx-auto px-4">
          <div className="w-full flex justify-between items-start gap-8 lg:flex-row flex-col">
            <h1 className="text-7xl text-primary font-bold text-center lg:text-left mb-12 leading-tight">
              Why choose <br /> Prism of Stories?
            </h1>
            <p className="w-full lg:max-w-[50%] text-center lg:text-right font-medium text-xl text-gray-700 leading-relaxed">
              We don’t just build websites we craft digital experiences that
              drive real results. From sleek designs and fast performance to
              SEO, ads, and branding, everything we create is focused on helping
              your business grow, stand out, and win trust online.
            </p>
          </div>{" "}
        </div>

        <div className="mt-32">
          <h2 className="text-5xl font-bold text-primary mb-20 text-center leading-tight">
            Not just another agency. <br /> We’re your growth partner.
          </h2>

          <ul className="h-screen divide-y-2 divide-primary text-center">
            {[
              {
                title: "Modern Design",
                desc: "Sleek, user-friendly, mobile-ready websites that leave a lasting impression.",
              },
              {
                title: "SEO-Ready",
                desc: "Optimized from day one to rank higher on Google and reach more clients.",
              },
              {
                title: "Conversion-Focused",
                desc: "Every page designed to turn visitors into paying customers.",
              },
              {
                title: "Full-Service Team",
                desc: "Web, SEO, Ads, Branding & Video — all under one creative team.",
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden fees, no surprises — just clear, fair value.",
              },
              {
                title: "Future-Proof Tech",
                desc: "Built with Next.js & Tailwind for speed, scalability, and performance.",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="group space-y-4 px-10 py-10 text-primary hover:bg-primary hover:text-white cursor-pointer transform transition-all duration-300"
              >
                <h3 className="text-3xl group-hover:hidden font-bold relative z-10">
                  {item.title}
                </h3>
                <p className="hidden group-hover:block text-gray-600 group-hover:text-white mt-3 leading-relaxed relative text-3xl z-10 transition-all duration-300">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServicesSection />
    </div>
  );
}
