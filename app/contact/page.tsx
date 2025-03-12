import React from 'react'
import NavBar from '@/app/Pages/NavBar'
import { WorldMapDemo } from '@/app/Pages/Addons/AboutUsAddons/WorldMapDemo'
import Footer from '@/app/Pages/Footer'
import ContactForm from '@/app/contact/ContactForm'
import { Metadata } from 'next'; // Import Metadata type if using Next.js
import { getMetadata } from '@/app/Pages/utils/metadata'; // Import metadata function

export const metadata: Metadata = getMetadata("contact");

function page() {
  return (
    <div className="container mx-auto p-4 w-full h-full bg-cover bg-center flex flex-col items-center justify-center gap-4">
        <NavBar />
        <WorldMapDemo />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default page