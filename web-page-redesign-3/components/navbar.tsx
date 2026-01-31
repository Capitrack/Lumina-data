"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ArrowRight } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#061421]/90 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="#" className="flex items-center hover:scale-105 transition-transform">
            <Image
              src="/luminadatalogo.png"
              alt="Lumina Data"
              width={280}
              height={80}
              className="h-16 md:h-20 lg:h-24 w-auto drop-shadow-[0_0_12px_rgba(75,255,69,0.2)]"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#servicios" className="text-sm text-white/60 hover:text-white transition-colors">
              Servicios
            </Link>
            <Link href="#valor" className="text-sm text-white/60 hover:text-white transition-colors">
              Por que nosotros
            </Link>
            <Link href="#contacto" className="text-sm text-white/60 hover:text-white transition-colors">
              Contacto
            </Link>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="#contacto"
              className="hidden sm:inline-flex bg-[#4BFF45] text-[#061421] px-4 py-2 rounded-lg text-sm font-medium hover:translate-y-[-2px] hover:shadow-[0_0_30px_rgba(75,255,69,0.3)] transition-all items-center gap-1.5"
            >
              Contactar
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-[#061421] border-l border-white/10 p-6 md:hidden transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-lg border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex flex-col gap-4 mt-16">
          <Link
            href="#servicios"
            className="text-white/80 hover:text-white py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Servicios
          </Link>
          <Link href="#valor" className="text-white/80 hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>
            Por que nosotros
          </Link>
          <Link
            href="#contacto"
            className="text-white/80 hover:text-white py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contacto
          </Link>
          <Link
            href="#contacto"
            className="bg-[#4BFF45] text-[#061421] px-4 py-3 rounded-lg text-sm font-medium text-center mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contactar
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-[-1] md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}
    </nav>
  )
}
