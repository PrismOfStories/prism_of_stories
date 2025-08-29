// import HomePage from "@/pages/home";
"use client";
import { useEffect } from "react";
import gsap from "gsap";
// // export default function Home() {
// //   return <HomePage />;
// // }

export default function Basic() {
  useEffect(() => {
    // gsap.to("#box1", {
    //   x: 500,
    //   duration: 2,
    //   delay: 1,
    //   rotate: 360,
    //   repeat: -1,
    //   yoyo: true,
    // });
    // gsap.to("#box2", {
    //   x: 500,
    //   duration: 2,
    //   delay: 3,
    //   rotate: 360,
    //   repeat: -1,
    //   yoyo: true,
    // });
    // const tl = gsap.timeline();
    // tl.to("#box1", {
    //   x: 500,
    //   duration: 2,
    //   delay: 3,
    //   rotate: 360,
    //   repeat: 1,
    // });
    // tl.to("#box2", {
    //   x: 500,
    //   duration: 2,
    //   rotate: 360,
    //   repeat: 1,
    // });
    // gsap.from("h1", {
    //   opacity: 0,
    //   duration: 2,
    //   y: 30,
    //   delay: 1,
    //   stagger: -1,
    // });
    const tl = gsap.timeline();

    tl.from("#nav-wrapper", {
      y: -30,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
    });

    tl.from("h2", {
      y: -30,
      opacity: 0,
      duration: 0.8,
    });

    tl.from("h4", {
      y: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
    });

    tl.from("h1", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      scale: 0.5,
    });
  }, []);
  return (
    <div className="w-full">
      <div
        id="nav-wrapper"
        className="w-full flex justify-between p-4 bg-blue-500 text-white h-11 items-center"
      >
        {/* <div id="box1" className="h-20 w-20 bg-red-500"></div>
      <div id="box2" className="h-20 w-20 bg-green-500"></div> */}
        {/* <h1 className="text-4xl font-bold">Hello</h1>
      <h1 className="text-4xl font-bold">world</h1>
      <h1 className="text-4xl font-bold">Test</h1> */}
        <h2>logo</h2>
        <div className="flex space-x-4">
          <h4>One</h4>
          <h4>Two</h4>
          <h4>Three</h4>
        </div>
      </div>

      <h1 className="absolute top-1/2 left-1/2 text-7xl whitespace-nowrap transform -translate-x-1/2 -translate-y-1/2">
        Gsap Tutorial Test
      </h1>
    </div>
  );
}
