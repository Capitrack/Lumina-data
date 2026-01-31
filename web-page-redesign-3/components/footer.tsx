"use client"

import Link from "next/link"
import { Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Column - Menu + Copyright */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <nav className="flex flex-wrap items-center justify-center md:justify-start gap-6">
              <Link
                href="#servicios"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Servicios
              </Link>
              <Link
                href="#valor"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Por que nosotros
              </Link>
              <Link
                href="#contacto"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Contacto
              </Link>
            </nav>
            <p className="text-sm text-white/30">
              {currentYear} Lumina Data. Todos los derechos reservados.
            </p>
          </div>

          {/* Right Column - Social + Email */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-4">
              <Link
                href="https://www.instagram.com/luminadata.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#95A6FF] hover:border-[#95A6FF]/30 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/luminadata1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#95A6FF] hover:border-[#95A6FF]/30 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
            <Link
              href="mailto:hola@luminadata.io"
              className="text-sm text-white/60 hover:text-[#95A6FF] transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              hola@luminadata.io
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
