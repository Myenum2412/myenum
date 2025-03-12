import React from 'react'
import NavBar from '../Pages/NavBar'
import Footer from '../Pages/Footer'
import ServicesSelection from '../Pages/Addons/Services/ServicesSelection'
import { Metadata } from 'next'; // Import Metadata type if using Next.js
import { getMetadata } from '@/app/Pages/utils/metadata'; // Import metadata function

export const metadata: Metadata = getMetadata("services");

function page() {
  return (
    <div className="container mx-auto p-4 w-full h-full bg-cover bg-center flex flex-col items-center justify-center gap-4">
      <NavBar />
      <ServicesSelection children={undefined} />
      <Footer />
    </div>
  )
}

export default page