import React from "react";
import Image from "next/image";
import { LinkPreview } from "@/components/ui/link-preview"; 
import { FlipText } from "@/components/magicui/flip-text";
import { SpinningTextBasic } from "../HomeAddons/SpinningTextBasic";
import myImage from "@/assets/about/about.png"; 
import AboutPic from "@/assets/about/aboutpic1.jpg" // Adjust the path based on your file structure


type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <>
    <div className={`w-full h-64 bg-gray-200 p-10 rounded-2xl shadow-md mt-20 relative overflow-hidden flex items-center justify-center ${className}`}>
      {/* Background Image */}
      <Image 
    src={myImage} 
    alt="Description" 
    fill 
    style={{ objectFit: "cover" }} 
    className="rounded-2xl"
    />
  
  {/* Blur Overlay */}
  <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>

  {/* Centered Text */}
  <FlipText className="text-4xl font-bold -tracking-widest text-white dark:text-white md:text-7xl md:leading-[5rem]">About Us</FlipText>
</div>

      <div className="content text-left pl-5">
      
        <p className="text-2xl font-bold mt-10">At Myenum, we are more than just a website development company. we are the driving force behind digital transformation. In today’s fast-paced world, having a strong online presence is not just an option; it’s a necessity. We exist to help businesses, especially startups and emerging brands, establish their footprint in the digital space with powerful, scalable, and conversion-focused websites. Whether you are launching a new venture, expanding your business, or looking to elevate your e-commerce platform, Myenum is your trusted technology partner in achieving success.</p>
      
      <div className="content text-left">
        <h1 className="text-6xl font-bold mt-10">Our Vision & Leadership</h1>
        <p className="text-2xl">Myenum was founded with a bold vision to bridge the gap between businesses and digital success. At the heart of this vision is Amarnath, a leader with a passion for innovation, technology, and business growth. He is also an active BNI Member in the <LinkPreview url="https://bni-salem.in/en-IN/memberdetails?encryptedMemberId=VyR43%2BVKzpyWOMxTHyv88A%3D%3D&name=Amarnath+M+K" className="font-bold text-red-500">BNI Happy Chapter</LinkPreview>, where he collaborates with like-minded entrepreneurs and professionals to drive business success through networking, referrals, and strategic partnerships.</p>
        <p className="text-2xl mt-6">Under <LinkPreview url="https://www.linkedin.com/in/amarnath-mk/" className="font-bold text-blue-500">Amarnath’s leadership</LinkPreview> Myenum has carved a niche in providing customized solutions that cater to both B2B and B2C markets. Understanding that no two businesses are the same, we work closely with our clients to create strategic, tailor-made websites that align with their brand, industry demands, and customer expectations.</p>

      <div className="container mx-auto p-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Side Image */}
        <div className="md:w-1/2 w-full">
          <div className="relative w-full h-[800px]">
            <Image 
              src={AboutPic} 
              alt="Description" 
              fill 
              style={{ objectFit: "cover" }} 
              className="rounded-2xl"
            />
            <div className="relative bg-white rounded-2xl">
              <div className="absolute bottom-0 right-0">
                <SpinningTextBasic />
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side Content */}
        <div className="md:w-1/2 w-full text-left">
          <h2 className="text-6xl font-bold mt-10">What We Do</h2>
          <p className="text-2xl mt-4">
            At Myenum, we specialize in cutting-edge website development, e-commerce solutions, and UX/UI design that help businesses convert visitors into loyal customers. Our expertise covers a broad spectrum of digital services, including:
          </p>
          <ul className="list-disc list-inside mt-4 text-2xl space-y-2">
            <li><strong>Custom Website Development:</strong> From concept to execution, we build responsive, fast, and visually compelling websites that align with your brand identity and business goals.</li>
            <li><strong>E-commerce Solutions:</strong> We develop feature-rich, scalable, and secure online stores designed to enhance user experience and maximize conversions.</li>
            <li><strong>UI/UX Design:</strong> A seamless user experience is at the core of every successful website. Our designs ensure that your customers enjoy a smooth, engaging, and intuitive journey.</li>
            <li><strong>Performance Optimization:</strong> Speed, security, and efficiency are non-negotiable. We ensure that every website we build is optimized for maximum performance.</li>
            <li><strong>Scalable Digital Solutions:</strong> Whether you are a startup or an established business, we provide flexible, growth-ready solutions that evolve with your brand.</li>
          </ul>
        </div>
      </div>
    </div>

      <div className="content text-left ">
      <h2 className="text-6xl font-bold mt-10">Why Choose Myenum?</h2>
      <p className="text-2xl">
        At Myenum, we don’t believe in one-size-fits-all solutions. We understand that every business has unique challenges and goals, and our mission is to deliver customized digital experiences that drive real, measurable results.
      </p>
      <ul className="list-disc list-inside mt-2 text-2xl">
        <li><strong>Startup-Focused Approach</strong> – We love working with new businesses, helping them build a strong foundation in the digital world.</li>
        <li><strong>Innovative and Future-Ready</strong> – Our team stays ahead of industry trends to deliver solutions that are modern, scalable, and future-proof.</li>
        <li><strong>Client-Centric Process</strong> – We prioritize collaboration and transparency, ensuring that our clients are actively involved at every stage of development.</li>
        <li><strong>End-to-End Support</strong> – From development to maintenance, we provide ongoing support to ensure that your website remains functional, secure, and up to date.</li>
        <li><strong>Strong Business Network</strong> – With Amarnath’s active involvement in <LinkPreview url="https://bni-salem.in/en-IN/memberdetails?encryptedMemberId=VyR43%2BVKzpyWOMxTHyv88A%3D%3D&name=Amarnath+M+K" className="font-bold text-red-500">BNI Happy Chapter</LinkPreview>, we leverage a powerful network of business leaders to create meaningful connections and </li>
      </ul>
      </div>

      <div className="content text-left">
      <h2 className="text-6xl font-bold mt-10">Let’s Build Something Extraordinary Together</h2>
      <p className="text-2xl">
        At Myenum, our goal is to help businesses succeed in the digital landscape by creating high-performance, conversion-driven websites that leave a lasting impact. Whether you're taking your first step online or looking to revamp your existing platform, we are here to turn your vision into reality.
      </p>
      <p className="text-2xl">
        Get in touch with us today and let’s build something remarkable!
      </p>
      </div>
      
      </div>
      </div>
    </>
  );
};

export default Container;
