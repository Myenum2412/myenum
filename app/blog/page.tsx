import React from 'react'
import NavBar from '../Pages/NavBar'
import Footer from '../Pages/Footer'
import BlogSelection from '../Pages/Addons/BlogAddons/BlogSelection'

function page() {
  return (
    <div className="container mx-auto p-4 w-full h-full bg-cover bg-center flex flex-col items-center justify-center gap-4">
      <NavBar />
      <BlogSelection children={undefined} />
      <Footer />
    </div>
  )
}

export default page