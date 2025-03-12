import React from "react";
import Image from "next/image";
import { FlipText } from "@/components/magicui/flip-text";
import Blog from "@/assets/blog/blog.png"; // Ensure the path is correct

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
    src={Blog} 
    alt="Description" 
    fill 
    style={{ objectFit: "cover" }} 
    className="rounded-2xl"
    />
  
  {/* Blur Overlay */}
  <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>

  {/* Centered Text */}
  <FlipText className="text-4xl font-bold -tracking-widest text-white dark:text-white md:text-7xl md:leading-[5rem]">Coming Soon...</FlipText>
</div>
    </>
  );
};

export default Container;
