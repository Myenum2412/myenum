"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function ContactForm() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        try {
            const result = await emailjs.sendForm(
                "service_wa4xnpg",  // Replace with your EmailJS Service ID
                "template_mg2idkt", // Replace with your EmailJS Template ID
                form.current,
                "gMwf_mtI7NHo9hCkA" // Replace with your EmailJS Public Key
            );

            alert("Message sent successfully!");
            console.log("EmailJS Response:", result.text);
            form.current.reset(); // Reset form after submission
        } catch (error) {
            alert("Failed to send message. Please try again.");
            console.error("EmailJS Error:", error);
        }
    };

    return (
        <div className="container mx-auto p-4 w-full h-full bg-cover bg-center flex flex-col items-center gap-6">
            {/* Google Map */}
            <div className="w-full h-600 md:h-80 lg:h-100 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                    className="w-full h-full border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31818.0!2d78.055724!3d11.6538915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ccf52cba0b%3A0xee9989007068ca47!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710197400000!5m2!1sen!2sin"
                    loading="lazy"            
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 mt-0">
                {/* Left Side - Company Details */}
                <div className="w-full md:w-1/2 lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
                    <p className="text-gray-600 mt-2">
                        We are here to assist you! Whether you need expert advice, project collaboration, or customer support, feel free to get in touch with us.
                    </p>
                    <div className="mt-6 space-y-4">
                        <ContactDetail icon="fas fa-map-marker-alt" text="Narayanan Nagar, Salem" />
                        <ContactDetail icon="fas fa-phone" text="+91 90423 76479" />
                        <ContactDetail icon="fas fa-envelope" text="myenumam@gmail.com" />
                        <ContactDetail icon="fas fa-link" text="linktr.ee/myenum" />
                    </div>
                    {/* Social Media Icons */}
                    <SocialLinks />
                </div>

                {/* Right Side - Contact Form */}
                <div className="w-full md:w-1/2 lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold text-gray-800 rounded-2xl">Send us a message</h2>
                    <form ref={form} onSubmit={sendEmail} className="mt-4 space-y-4 rounded-2xl">
                        <InputField label="Your Name" name="name" type="text" placeholder="Enter your name" />
                        <InputField label="Email Address" name="email" type="email" placeholder="Enter your email" />
                        <TextAreaField label="Message" name="message" placeholder="Write your message..." />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

const ContactDetail = ({ icon, text }: { icon: string; text: string }) => (
    <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600">
            <i className={icon}></i>
        </div>
        <p className="text-gray-700">{text}</p>
    </div>
);

const SocialLinks = () => (
    <div className="mt-6 flex space-x-4">
        <SocialIcon link="https://www.facebook.com/profile.php?id=61572140267076" icon="fab fa-facebook" color="blue-600" />
        <SocialIcon link="https://www.instagram.com/myenum.in" icon="fab fa-instagram" color="pink-600" />
        <SocialIcon link="https://wa.me/919042376479" icon="fab fa-whatsapp" color="green-500" />
        <SocialIcon link="https://www.youtube.com/myenum" icon="fab fa-youtube" color="red-600" />
        <SocialIcon link="https://linkedin.com/in/myenum-am-45aa56349" icon="fab fa-linkedin" color="blue-700" />
    </div>
);

const SocialIcon = ({ link, icon, color }: { link: string; icon: string; color: string }) => (
    <a href={link} className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:text-${color}`}>
        <i className={icon}></i>
    </a>
);

const InputField = ({ label, name, type, placeholder }: { label: string; name: string; type: string; placeholder: string }) => (
    <div>
        <label className="text-gray-700">{label}</label>
        <input
            type={type}
            name={name}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={placeholder}
            required
        />
    </div>
);

const TextAreaField = ({ label, name, placeholder }: { label: string; name: string; placeholder: string }) => (
    <div>
        <label className="text-gray-700">{label}</label>
        <textarea
            rows={4}
            name={name}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={placeholder}
            required
        ></textarea>
    </div>
);
