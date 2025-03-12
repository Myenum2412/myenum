import React from "react";
import Image from "next/image";
import aboutImage from "@/assets/homepage/about.jpg";
import { SpinningTextBasic } from "./SpinningTextBasic";

const points = [
  "AI-Driven Efficiency – Automate enumeration processes, reducing manual labor.",
  "100% Accuracy – Minimize human errors and ensure precision in data classification.",
  "User-Friendly Interface – No coding required, just intuitive workflows.",
  "Seamless Integration – Compatible with APIs, databases, and enterprise software.",
  "Customizable & Scalable – Tailor enumeration to fit your unique business needs.",
  "Robust Security – Your data is encrypted, protected, and compliant with industry standards.",
];

// Define types for CardComponent props
interface CardProps {
  title: string;
  description: string;
}

const CardComponent: React.FC<CardProps> = ({ title, description }) => (
  <div className="w-1/2 rounded-2xl max-sm:w-full p-5 border border-gray-300">
    <h2 className="uppercase font-semibold text-2xl">{title}</h2>
    <p className="text-neutral-300 mt-2">{description}</p>
  </div>
);

const AboutUs: React.FC = () => {
  return (
    <section className="my-10">
      <div className="flex gap-3 justify-center mt-10 max-lg:flex-col">
        {/* Image Section */}
        <div className="w-1/2 relative flex justify-center max-lg:w-full px-3">
  <Image
    src={aboutImage}
    alt="About Us"
    width={500}
    height={700}
    className="rounded-2xl"
  />
  <div className="relative bg-white rounded-2xl">
    <div className="absolute bottom-0 right-0">
      <SpinningTextBasic />
    </div>
  </div>
</div>

        {/* Text Content Section */}
        <div className="w-1/2 flex flex-col gap-y-6 px-3 max-lg:w-full">
          <h1 className="text-3xl font-semibold">Why Choose MyEnum?</h1>
          <p className="text-balance flex flex-col gap-y-3 text-xl">
            At MyEnum, we don’t just offer services—we craft experiences that
            drive results. Whether it's Branding, Digital Marketing, Website
            Development, or Software Solutions, we bring expertise, innovation,
            and dedication to every project.
          </p>

          {/* Key Points List */}
          <ul className="flex flex-col gap-y-3">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <p>It&apos;s a great day!</p>

          {/* Mission & Vision Cards */}
          <div className="flex gap-3 max-sm:flex-col">
            <CardComponent
              title="Our Mission"
              description="To redefine enumeration through automation, AI-driven optimization, and seamless data structuring—empowering businesses and organizations with smarter, faster, and more accurate data processing solutions."
            />
            <CardComponent
              title="Our Vision"
              description="To be the global leader in enumeration technology, providing a universal solution for structuring and organizing data across industries, eliminating inefficiencies, and enabling data-driven innovation."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
