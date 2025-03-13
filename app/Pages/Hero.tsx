import React from "react";
import { AnimatedBeams } from "@/app/Pages/Addons/HomeAddons/AnimatedBeams";
function hero() {
  return (
    <section className="max-w-[1920px] h-screen max-h-[1080px] w-full rounded-md max-sm:items-center max-sm:justify-center flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden mx-auto">
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Myenum <br /> Transforming Ideas into Reality
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Defining values with clarity, consistency, and purpose
        </p>
        <AnimatedBeams />
      </div>
    </section>
  );
}

export default hero;
