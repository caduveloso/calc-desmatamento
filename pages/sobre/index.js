"use client"

import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Sobre from "../../components/Sobre"

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen max-w-screen-sm md:max-w-screen-2xl mx-auto border-l-8 border-r-8 border-black bg-white bg-opacity-100">
      <Navbar />
      <Sobre />
      <Footer />
    </div>
  )
}
