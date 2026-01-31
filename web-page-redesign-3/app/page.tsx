"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServiciosSection } from "@/components/servicios-section"
import { ValorSection } from "@/components/valor-section"
import { ContactoSection } from "@/components/contacto-section"
import { Footer } from "@/components/footer"

export default function LuminaDataPage() {
  return (
    <main className="min-h-screen bg-[#061421] text-white antialiased overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServiciosSection />
      <ValorSection />
      <ContactoSection />
      <Footer />
    </main>
  )
}
