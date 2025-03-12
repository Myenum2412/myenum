type PageMetadata = {
    title: string;
    description: string;
    keywords?: string;
    openGraph?: {
      title: string;
      description: string;
      url: string;
      type: string;
      images?: { url: string; width: number; height: number; alt: string }[];
    };
    twitter?: {
      card: string;
      site?: string;
      title: string;
      description: string;
      images?: string[];
    };
    socialMedia?: {
      facebook: string;
      instagram: string;
      whatsapp: string;
      youtube: string;
      linkedin: string;
    };
  };
  
  // Define metadata for each page
  export const getMetadata = (page: string): PageMetadata => {
    const baseUrl = "https://www.myenum.com"; // Replace with your actual website URL
  
    const metadata: Record<string, PageMetadata> = {
      home: {
        title: "Transform Your Brand with MyEnum – Expert Branding, Digital Marketing & Web Development",
        description: "At MyEnum, we craft powerful brand identities, implement data-driven digital marketing strategies, and develop high-performance websites.",
        keywords: "branding, digital marketing, web development, SEO, e-commerce solutions, MyEnum",
        openGraph: {
          title: "Transform Your Brand with MyEnum",
          description: "We specialize in branding, digital marketing, and web development.",
          url: `${baseUrl}/`,
          type: "website",
          images: [{ url: `${baseUrl}/og-image.jpg`, width: 1200, height: 630, alt: "MyEnum Branding" }]
        },
        twitter: {
          card: "summary_large_image",
          site: "@MyEnum",
          title: "Transform Your Brand with MyEnum",
          description: "Expert Branding, Digital Marketing & Web Development.",
          images: [`${baseUrl}/og-image.jpg`]
        },
        socialMedia: {
          facebook: "https://www.facebook.com/profile.php?id=61572140267076",
          instagram: "https://www.instagram.com/myenum.in",
          whatsapp: "https://wa.me/919042376479",
          youtube: "https://www.youtube.com/myenum",
          linkedin: "https://linkedin.com/in/myenum-am-45aa56349"
        }
      },
      about: {
        title: "About MyEnum – Your Partner in Digital Success",
        description: "Discover MyEnum’s mission and expertise in branding, digital marketing, and web development. Learn how we help businesses thrive in the digital era.",
        keywords: "about MyEnum, company mission, branding experts, digital marketing team",
        openGraph: {
          title: "About MyEnum",
          description: "Our mission is to help businesses thrive with top-notch branding, digital marketing, and web development services.",
          url: `${baseUrl}/about`,
          type: "website",
          images: [{ url: `${baseUrl}/about-og.jpg`, width: 1200, height: 630, alt: "About MyEnum" }]
        },
        socialMedia: {
          facebook: "https://www.facebook.com/profile.php?id=61572140267076",
          instagram: "https://www.instagram.com/myenum.in",
          whatsapp: "https://wa.me/919042376479",
          youtube: "https://www.youtube.com/myenum",
          linkedin: "https://linkedin.com/in/myenum-am-45aa56349"
        }
      },
      services: {
        title: "MyEnum Services – Web Development, Branding & Digital Growth",
        description: "Explore our expert services in website development, branding, and digital marketing, designed to help startups and businesses achieve success online.",
        keywords: "branding services, digital marketing solutions, web development, SEO, social media marketing",
        openGraph: {
          title: "Our Services – MyEnum",
          description: "Discover our professional services in branding, digital marketing, and web development.",
          url: `${baseUrl}/services`,
          type: "website",
          images: [{ url: `${baseUrl}/services-og.jpg`, width: 1200, height: 630, alt: "MyEnum Services" }]
        },
        socialMedia: {
          facebook: "https://www.facebook.com/profile.php?id=61572140267076",
          instagram: "https://www.instagram.com/myenum.in",
          whatsapp: "https://wa.me/919042376479",
          youtube: "https://www.youtube.com/myenum",
          linkedin: "https://linkedin.com/in/myenum-am-45aa56349"
        }
      },
      contact: {
        title: "Contact MyEnum – Let’s Build Your Digital Presence",
        description: "Reach out to MyEnum for expert branding, digital marketing, and website development solutions. Let’s bring your vision to life.",
        keywords: "contact MyEnum, get in touch, business inquiries, digital marketing support",
        openGraph: {
          title: "Contact MyEnum",
          description: "Reach out to us for expert branding, marketing, and web development services.",
          url: `${baseUrl}/contact`,
          type: "website",
          images: [{ url: `${baseUrl}/contact-og.jpg`, width: 1200, height: 630, alt: "Contact MyEnum" }]
        },
        socialMedia: {
          facebook: "https://www.facebook.com/profile.php?id=61572140267076",
          instagram: "https://www.instagram.com/myenum.in",
          whatsapp: "https://wa.me/919042376479",
          youtube: "https://www.youtube.com/myenum",
          linkedin: "https://linkedin.com/in/myenum-am-45aa56349"
        }
      }
    };
  
    return metadata[page] || metadata["home"];
  };
  