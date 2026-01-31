"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Check, Mail, Calendar, Clock, Sparkles, MessageSquare } from "lucide-react"

const features = [
  "Revision de embudo, checkout y retencion",
  "Lista de prioridades que mueven la aguja",
  "Plan con dueno y siguientes pasos",
]

const tags = ["E-commerce", "Producto", "CRO", "Retencion"]

export function ContactoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contacto" className="py-24 border-t border-white/5 bg-[#0a1c2b]/30 relative">
      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-[#4BFF45]/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-2 text-[#95A6FF] text-sm font-medium mb-3">
              <Mail className="w-4 h-4" />
              Contacto
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Solicita tu auditoria.</h2>
            <p className="text-white/50 leading-relaxed mb-8">
              En 48 horas te devolvemos un diagnostico claro: que esta frenando tus ventas y cual es la proxima accion
              exacta.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#95A6FF]/10 border border-[#95A6FF]/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#95A6FF]" />
                  </div>
                  <span className="text-white/70 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 border border-white/10 rounded-full text-xs text-white/50 hover:border-[#4BFF45]/30 hover:text-white/70 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Improved Contact Card */}
          <div
            className={`bg-[rgba(10,28,43,0.5)] border border-[rgba(149,166,255,0.08)] rounded-2xl overflow-hidden transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#4BFF45]/10 to-[#95A6FF]/10 border-b border-white/5 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#4BFF45]/20 border border-[#4BFF45]/30 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#4BFF45]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Growth Audit Discovery</h3>
                  <p className="text-sm text-white/50">45 minutos de estrategia</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/40">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#95A6FF]" />
                  <span>45 min</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-[#95A6FF]" />
                  <span>Google Meet</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <div className="space-y-6">
                {/* What to expect */}
                <div>
                  <h4 className="text-sm font-medium text-white/70 mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#95A6FF]" />
                    Que incluye la sesion
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Analisis de tu embudo actual",
                      "Identificacion de quick wins",
                      "Roadmap personalizado",
                      "Resolucion de dudas en vivo",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4BFF45]" />
                        <span className="text-sm text-white/60">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* CTA Button */}
                <Link
                  href="https://cal.com/eduardo-malaga-1qzeqp/45min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#4BFF45] text-[#061421] py-4 rounded-xl font-medium hover:translate-y-[-2px] hover:shadow-[0_0_30px_rgba(75,255,69,0.3)] transition-all flex items-center justify-center gap-2 group"
                >
                  <Calendar className="w-5 h-5" />
                  Agendar Auditoria
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Trust badge */}
                <div className="flex items-center justify-center gap-2 text-white/30 text-xs">
                  <div className="w-2 h-2 rounded-full bg-[#4BFF45] animate-pulse" />
                  <span>Tu Socio Estratégico para el Crecimiento</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
