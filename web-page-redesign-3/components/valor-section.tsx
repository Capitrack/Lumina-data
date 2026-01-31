"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Sun, AlignLeft, Zap, Lightbulb, Focus, Rocket } from "lucide-react"

function ValueCard({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ElementType
  title: string
  description: string
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
      className={`bg-[rgba(10,28,43,0.5)] border border-[rgba(149,166,255,0.08)] rounded-2xl p-6 flex items-start gap-4 group hover:border-[rgba(75,255,69,0.2)] hover:bg-[rgba(10,28,43,0.8)] transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#95A6FF]/20 to-[#95A6FF]/5 border border-[#95A6FF]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-[#4BFF45]/30 transition-all relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#95A6FF]/10 to-[#4BFF45]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Icon className="w-6 h-6 text-[#95A6FF] group-hover:text-[#4BFF45] relative z-10 transition-colors" strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="font-semibold mb-1 text-lg">{title}</h3>
        <p className="text-white/50 text-sm">{description}</p>
      </div>
    </div>
  )
}

export function ValorSection() {
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
    <section id="valor" className="py-24 border-t border-white/5 bg-[#0a1c2b]/30 relative">
      {/* Floating accent */}
      <div className="absolute top-20 right-[5%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(149,166,255,0.08)_0%,transparent_70%)] blur-[60px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-2 text-[#4BFF45] text-sm font-medium mb-3">
              <Lightbulb className="w-4 h-4" />
              Por que nosotros
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
              Menos reportes.
              <br />
              Mas decisiones.
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              La mayoria de agencias te inundan con graficos. Nosotros te decimos que significan y que accion tomar hoy
              para vender mas.
            </p>
            <Link
              href="#contacto"
              className="text-[#95A6FF] font-medium inline-flex items-center gap-2 hover:gap-3 hover:text-[#4BFF45] transition-all group"
            >
              Hablar con el equipo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Mini stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-semibold text-[#4BFF45]">3-5</p>
                <p className="text-xs text-white/40 mt-1">Iniciativas clave</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-[#4BFF45]">24h</p>
                <p className="text-xs text-white/40 mt-1">Respuesta max</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-[#4BFF45]">100%</p>
                <p className="text-xs text-white/40 mt-1">Accionable</p>
              </div>
            </div>
          </div>

          {/* Right - Values */}
          <div className="space-y-4">
            <ValueCard
              icon={Sun}
              title="Claridad"
              description="Te explicamos el porque sin jerga, para que decidas con confianza."
              delay={0}
            />
            <ValueCard
              icon={Focus}
              title="Prioridad"
              description="Reducimos el ruido a 3-5 iniciativas que mueven la aguja ya."
              delay={100}
            />
            <ValueCard
              icon={Rocket}
              title="Accion"
              description="Cada insight termina con un plan: dueno, fecha y siguiente paso."
              delay={200}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
