"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerPage() {
  useEffect(() => {
    gsap.from("#page-1 #box-1", {
      scale: 0,
      delay: 1,
      duration: 2,
      rotate: 360,
    });

    gsap.from("#page-2 #box-2", {
      scale: 0,
      delay: 1,
      duration: 2,
      rotate: 360,
      scrollTrigger: {
        trigger: "#page-2 #box-2",
        scroller: "body",
        markers: false,
        start: "top 60%",
      },
    });

    gsap.from("#page-2 h1", {
      opacity: 0,
      duration: 2,
      x: 500,
      scrollTrigger: {
        trigger: "#page-2 h1",
        scroller: "body",
        markers: false,
        start: "top 50%",
      },
    });

    gsap.from("#page-2 h2", {
      opacity: 0,
      duration: 2,
      x: -500,
      scrollTrigger: {
        trigger: "#page-2 h2",
        scroller: "body",
        markers: false,
        start: "top 50%",
      },
    });

    gsap.from("#page-3 #box-3", {
      scale: 0,
      delay: 1,
      duration: 2,
      rotate: 720,
      scrollTrigger: {
        trigger: "#page-3 #box-3",
        scroller: "body",
        markers: false,
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
      },
    });

    gsap.to("#page-4 h1", {
      x: "-100%",
      scrollTrigger: {
        trigger: "#page-4 h1",
        scroller: "body",
        markers: false,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
      },
    });
  }, []);
  return (
    <div className="h-full w-full">
      <div
        id="page-1"
        className="h-screen w-full bg-blue-200 flex items-center justify-center"
      >
        <div id="box-1" className="h-48 w-48 bg-red-500"></div>
      </div>
      <div
        id="page-2"
        className="h-screen w-full bg-blue-300 flex flex-col gap-5 text-2xl font-bold items-center justify-center"
      >
        {" "}
        <h1 className="bg-red-200 p-2">Hello</h1>
        <h2 className="bg-red-300 p-2">World</h2>
      </div>
      <div
        id="page-3"
        className="h-screen w-full bg-blue-400 flex items-center justify-center"
      >
        {" "}
        <div id="box-3" className="h-48 w-48 bg-red-500"></div>
      </div>
      <div
        id="page-4"
        className="h-screen w-full bg-blue-500 flex items-center justify-center"
      >
        <h1 className="text-[10vw] uppercase font-bold transform translate-x-1/3">
          Experience
        </h1>
      </div>
      <div
        id="page-5"
        className="h-screen w-full bg-blue-600 flex items-center justify-center"
      >
        <div id="box-5" className="h-48 w-48 bg-red-500"></div>
      </div>
    </div>
  );
}
