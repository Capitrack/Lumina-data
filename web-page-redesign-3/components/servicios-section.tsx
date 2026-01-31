"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronRight, LineChart, Compass, Cpu, Sparkles, Zap, Target } from "lucide-react"

function ServiceCard({
  icon: Icon,
  title,
  description,
  delivery,
  delay,
}: {
  icon: React.ElementType
  title: string
  description: string
  delivery: string
  delay: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`bg-[rgba(10,28,43,0.5)] border border-[rgba(149,166,255,0.08)] rounded-2xl p-6 sm:p-8 hover:border-[rgba(75,255,69,0.2)] hover:bg-[rgba(10,28,43,0.8)] transition-all duration-300 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#95A6FF]/20 to-[#95A6FF]/5 border border-[#95A6FF]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#4BFF45]/30 transition-all relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#95A6FF]/10 to-[#4BFF45]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Icon className="w-6 h-6 text-[#95A6FF] group-hover:text-[#4BFF45] relative z-10 transition-colors" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/50 text-sm leading-relaxed mb-6">{description}</p>
      <div className="flex items-center justify-between pt-6 border-t border-white/5">
        <span className="text-xs text-white/30 tracking-wider">{delivery}</span>
        <Link
          href="#contacto"
          className="text-[#4BFF45] text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
        >
          Ver mas
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export function ServiciosSection() {
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
    <section id="servicios" className="py-24 border-t border-white/5 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4BFF45]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <div className="inline-flex items-center gap-2 text-[#4BFF45] text-sm font-medium mb-3">
              <Sparkles className="w-4 h-4" />
              Servicios
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-balance">
              Tres formas de desbloquear
              <br className="hidden sm:block" />
              tu crecimiento.
            </h2>
          </div>
          <p className="text-white/50 max-w-md">Detectar fugas, decidir mejor y optimizar la experiencia. Todo con datos.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <ServiceCard
            icon={LineChart}
            title="Auditoria de Growth"
            description="Analizamos tu embudo para encontrar fugas de dinero y oportunidades de optimizacion."
            delivery="48H ENTREGA"
            delay={100}
          />
          <ServiceCard
            icon={Compass}
            title="Acompañamiento Estratégico"
            description="Tu Director de Estrategia externo. Sesiones de analisis para guiar cada paso."
            delivery="MENSUAL"
            delay={200}
          />
          <ServiceCard
            icon={Cpu}
            title="Optimizacion de Producto"
            description="Mejoramos la experiencia y retencion mediante analisis profundo de comportamiento."
            delivery="CONTINUO"
            delay={300}
          />
        </div>
      </div>
    </section>
  )
}
