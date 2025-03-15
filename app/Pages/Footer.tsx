import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SiMinutemailer } from "react-icons/si";
import {
  FaBuilding,
  FaFacebookSquare,
  FaInstagram,
  FaPhone,
  FaYoutube,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="py-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={"/iconc.png"}
              alt="logo"
              width={1920}
              rel="noo"
              height={1080}
              className="w-10 cursor-pointer mr-4 "
            />
            <div>
              <h1 className="text-2xl font-semibold max-md:text-xl max-sm:text-sm">
                <span className="text-gold">MyEnum Services</span> Agency
              </h1>
              <p className="max-md:text-xs max-sm:text-[8px]">
                We are a team of passionate developers and designers that love
                to build amazing products.
              </p>
            </div>
          </div>
          <p className="max-sm:text-xs">
            {Date().split(" ").slice(0, 4).join(" ")}
          </p>
        </div>
        <div className="border-b mt-1 border-gold w-4/5 mx-auto"></div>
        <div className="grid grid-cols-5 gap-10 my-10 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          <div className="flex flex-col col-span-2 max-sm:col-auto gap-8">
            <h2 className="text-3xl font-normal">Our Newsletter</h2>
            <div className="flex ">
            <a
            href="mailto:myenumam@gmail.com"
            className="block rounded-none h-full p-5 bg-white text-black border border-gray-300"
            >
              newsletter@myenum.in
            </a>

              <Button className="w-[20%] h-full font-normal rounded-none border bg-transparent  text-white">
                {/* <Button className="w-[20%] h-full font-normal rounded-none bg-gold text-white hover:bg-[#9D8A39]  max-xl:text-xl max-lg:text-[16px] max-md:text-[8px] max-md:p-2  max-sm:p-2 "> */}
                <SiMinutemailer className="text-xl" />
              </Button>
            </div>
            <ul className="flex gap-3 items-center text-3xl">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61572140267076"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/myenum.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919042376479"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCpGnUW_i_lqFFJRyHTLqoTA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/myenum-am-45aa56349"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-normal">Quick Links</h2>
            <ul className="flex flex-col gap-4 mt-8 cursor-pointer">
              <Link href={"/"}>
                <li>Home</li>
              </Link>
              <Link href={"/about"}>
                <li>About</li>
              </Link>
              <Link href={"/services"}>
                <li>Services</li>
              </Link>
              <Link href={"/contact"}>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-normal">Our Support</h2>
            <ul className="flex flex-col gap-4 mt-8">
              <Link href={"/privacy"}>
                <li>Privacy Policy</li>
              </Link>
              <Link href={"/support"}>
                <li>Support</li>
              </Link>
              <Link href={"/disclaimer"}>
                <li>Disclaimer</li>
              </Link>
              <Link href={"/terms&Conditions"}>
                <li>Terms & Conditions</li>
              </Link>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-normal">Our Contact</h2>
            <div className="flex flex-col gap-4 mt-8">
            <div className="space-y-3">
      <div className="flex items-center gap-3">
        <FaBuilding className="text-gold" />
        <p>Salem - Tamilnadu</p>
      </div>
      <div className="flex items-center gap-3">
        <FaPhone className="text-gold" />
        <a href="tel:+919042376479" className="text-blue-500 hover:underline">
          +91 90423 76479
        </a>
      </div>
      <div className="flex items-center gap-3 overflow-x-auto">
        <MdEmail className="text-gold" />
        <a href="mailto:myenumam@gmail.com" className="text-blue-500 hover:underline">
          support@myenum.in
        </a>
      </div>
    </div>
            </div>
          </div>
        </div>
        <div className="border-b mt-1 "></div>
        <p className="text-center text-neutral-600 mt-10">
          © 2025 myenum services. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
