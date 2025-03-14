"use client";
import Image from "next/image";
import React from "react";
import DashBoard from "@/assets/homepage/dashboard.png"
import { WobbleCard } from "@/components/ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Elevate Your Brand
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Empower your business with cutting-edge branding, digital marketing,
            and website development solutions to help you stand out.
          </p>
        </div>
        <Image
          src={DashBoard}
          width={500}
          height={500}
          alt="branding demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Digital Strategies That Work
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Our data-driven approach ensures your business reaches the right
          audience with maximum impact.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Get Started Today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Whether you are launching a new brand or scaling an existing one, we
            provide the tools and expertise to accelerate your growth.
          </p>
        </div>
        <Image
          src={DashBoard}
          width={500}
          height={500}
          alt="digital marketing demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
