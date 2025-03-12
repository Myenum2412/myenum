import React from 'react';
import Image from "next/image";
import { FlipText } from "@/components/magicui/flip-text";
import Services from "@/assets/services/Services.png"; // Ensure the path is correct

type ContainerProps = {
    children?: React.ReactNode;
    className?: string;
};

function ServicesSelection({ children, className = '' }: ContainerProps) {
  return (
    <>
    <div className={`w-full h-64 bg-gray-200 p-10 rounded-2xl shadow-md mt-20 relative overflow-hidden flex items-center justify-center ${className}`}>
      {/* Background Image */}
      <Image 
    src={Services} 
    alt="Description" 
    fill 
    style={{ objectFit: "cover" }} 
    className="rounded-2xl"
    />
  
  {/* Blur Overlay */}
  <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>

  {/* Centered Text */}
  <FlipText className="text-4xl font-bold -tracking-widest text-white dark:text-white md:text-7xl md:leading-[5rem]">Services</FlipText>
</div>



      {children}

      <div className="content text-left pl-5">
        <p className="text-2xl">
          At Myenum, we specialize in high-quality website development services designed specifically for new startups. We understand the challenges faced by emerging businesses and provide tailored solutions to help them establish a strong online presence. Our expertise in e-commerce and digital solutions ensures that businesses can build, grow, and scale efficiently in the competitive digital market.
        </p>
      </div>

      <div className="content text-left">
        <h2 className="text-6xl font-bold mt-10">Custom Website Development</h2>
        <p className="text-2xl">A website is the foundation of any online business. We offer fully customized website development services to ensure that your online presence aligns with your brand identity and business objectives. Our custom website development includes:</p>
        <ul className="list-disc list-inside mt-2 text-2xl">
          <li><strong>Responsive Design:</strong> Websites optimized for desktops, tablets, and smartphones.</li>
          <li><strong>SEO Optimization:</strong> Search-engine-friendly structuring for increased visibility.</li>
          <li><strong>Fast Performance:</strong> Speed-optimized websites to enhance user engagement.</li>
          <li><strong>Content Management System (CMS):</strong> Integration of WordPress, Shopify, or custom CMS solutions.</li>
        </ul>
      </div>

      <div className="content text-left">
        <h3 className="text-6xl font-bold mt-10">E-Commerce Solutions</h3>
        <p className="text-2xl">
          For startups looking to sell products or services online, we provide end-to-end e-commerce development services. Our solutions help businesses create an intuitive and high-converting online store. Key features include:
        </p>
        <ul className="list-disc list-inside mt-2 text-2xl">
          <li><strong>Secure Payment Gateways:</strong> Integration of PayPal, Stripe, Razorpay, and major card processors.</li>
          <li><strong>User-Friendly Product Catalogs:</strong> Structured listings with filters and search functionalities.</li>
          <li><strong>Shopping Cart Optimization:</strong> Smooth checkout processes to reduce cart abandonment.</li>
          <li><strong>Inventory & Order Management:</strong> Automated stock tracking, order processing, and notifications.</li>
          <li><strong>Multi-Vendor Marketplaces:</strong> Development of marketplaces like Amazon or Etsy.</li>
        </ul>
      </div>

      <div className="content text-left">
        <h3 className="text-6xl font-bold mt-10">UI/UX Design</h3>
        <p className="text-2xl">A well-crafted website plays a crucial role in enhancing user experience and boosting engagement. Our UI/UX design services focus on:</p>
        <ul className="list-disc list-inside mt-2 text-2xl">
          <li><strong>Modern Interfaces:</strong> Sleek, visually appealing, and clutter-free designs that align with modern trends.</li>
          <li><strong>Interactive User Journeys:</strong> Thoughtfully designed navigation that ensures seamless user interactions.</li>
          <li><strong>Accessibility & Usability:</strong> Creating inclusive designs to cater to users of all abilities, ensuring compliance with accessibility standards.</li>
          <li><strong>Conversion-Focused Design:</strong> Every design element is optimized to maximize conversions and improve user engagement.</li>
          <li><strong>Prototyping & Wireframing:</strong> Before development, we provide interactive prototypes and wireframes to visualize the design and get client feedback.</li>
          <li><strong>Mobile-First Approach:</strong> We prioritize responsive designs to ensure a seamless experience across all devices, from desktops to smartphones.</li>
          <li><strong>Brand Identity Integration:</strong> We create designs that reflect your brand's personality, ensuring consistency in colors, typography, and visual elements.</li>
        </ul>
      </div>

      <div className="content text-left">
        <h3 className="text-6xl font-bold mt-10">Website Maintenance & Support</h3>
        <p className="text-2xl">
          A website is an ever-evolving asset that requires continuous updates, monitoring, and improvements. Myenum offers comprehensive maintenance services to keep your website running at peak performance.
        </p>
        <ul className="list-disc list-inside mt-2 text-2xl">
          <li><strong>Regular Security Updates:</strong> We proactively update security patches to safeguard against cyber threats.</li>
          <li><strong>Bug Fixes & Performance Optimization:</strong> ur team ensures your website is always fast and glitch-free.</li>
          <li><strong>Content Updates:</strong> Need to update product details, blog posts, or landing pages? We've got you covered.</li>
          <li><strong>Backup & Disaster Recovery:</strong> We implement automated daily backups to prevent data loss.</li>
          <li><strong>Technical Support:</strong> Our dedicated team is always ready to assist with any website-related concerns.</li>
          <li><strong>Website Scalability:</strong> As your business grows, we help upgrade your website with new features and functionalities.</li>
        </ul>
      </div>

      <div className="content text-left">
  <h3 className="text-6xl font-bold mt-10">SEO & Digital Marketing</h3>
  <p className="text-2xl">
    Building a website is just the first step—getting it noticed is where the real challenge lies. 
    Our SEO & digital marketing services help businesses attract, engage, and convert their target audience.
  </p>

  <h4 className="text-4xl font-bold mt-6">SEO Services:</h4>
  <ul className="list-disc list-inside mt-2 text-2xl">
    <li><strong>On-Page SEO</strong> – Optimizing website structure, content, and meta tags for search engines.</li>
    <li><strong>Off-Page SEO</strong> – Building backlinks and authority to improve search rankings.</li>
    <li><strong>Local SEO</strong> – Optimizing for Google My Business to help startups get discovered locally.</li>
    <li><strong>Technical SEO</strong> – Improving website speed, indexing, and structured data for better search visibility.</li>
  </ul>

  <h4 className="text-4xl font-bold mt-6">Digital Marketing Services:</h4>
  <ul className="list-disc list-inside mt-2 text-2xl">
    <li><strong>Social Media Marketing (SMM)</strong> – Creating engaging campaigns on Facebook, Instagram, LinkedIn, Twitter, and TikTok.</li>
    <li><strong>Pay-Per-Click (PPC) Advertising</strong> – Running targeted ad campaigns on Google and social media platforms for higher ROI.</li>
    <li><strong>Content Marketing</strong> – Crafting high-quality blog posts, articles, and infographics to boost brand authority.</li>
    <li><strong>Email Marketing</strong> – Developing email campaigns that nurture leads and drive conversions.</li>
    <li><strong>Conversion Rate Optimization (CRO)</strong> – Analyzing user behavior and implementing strategies to increase sales.</li>
    <li><strong>Analytics & Performance Tracking</strong> – Using Google Analytics and other tools to monitor website traffic and user engagement.</li>
  </ul>
</div>


<div className="content text-left">
  <h3 className="text-6xl font-bold mt-10">Why Choose Myenum?</h3>
  <p className="text-2xl">
    We understand the unique challenges startups face and offer tailor-made solutions that align with your business goals.
  </p>
  <h3 className="text-6xl font-bold mt-10">What Sets Us Apart?</h3>
  <ul className="list-disc list-inside mt-2 text-2xl">
    <li><strong> Startup-Focused Approach –</strong> We specialize in solutions that cater to the specific needs of new businesses.</li>
    <li><strong> Expert Team –</strong> Our designers, developers, and marketers bring years of experience to the table.</li>
    <li><strong> Customer-Centric Solutions –</strong> We prioritize your business objectives to deliver high-performing websites and marketing campaigns.</li>
    <li><strong> Scalable & Affordable Services –</strong> We offer cost-effective solutions that grow with your business.</li>
    <li><strong> Innovation & Quality –</strong> We use the latest technologies to build feature-rich, high-quality websites.</li>
    <li><strong> Results-Driven Strategy –</strong> Every project we take on is backed by data-driven insights and measurable goals.</li>
  </ul>
</div>

    </>
  );
}

export default ServicesSelection;
