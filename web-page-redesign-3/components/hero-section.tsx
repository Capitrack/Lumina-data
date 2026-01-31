"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Clock, Users, TrendingUp, Shield, Plus, Database, BarChart3, Layers, Activity } from "lucide-react"

// Animated Counter Component
function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const start = performance.now()

    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

// Progress Bar with animation
function ProgressBar({ progress, delay = 0 }: { progress: number; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="h-1 bg-white/5 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-[#4BFF45] to-[#95A6FF] rounded-full transition-all duration-1500 ease-out"
        style={{
          width: isVisible ? `${progress}%` : "0%",
          transitionDuration: "1.5s",
        }}
      />
    </div>
  )
}

// Incremental Value Display
function IncrementalValue({
  value,
  increment,
  label,
}: {
  value: string
  increment: string
  label: string
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-4xl sm:text-5xl font-semibold">{value}</span>
      <div className="flex flex-col">
        <span className="inline-flex items-center gap-0.5 text-[#4BFF45] text-xs font-medium bg-[#4BFF45]/10 px-2 py-0.5 rounded-full">
          <Plus className="w-3 h-3" />
          {increment}
        </span>
        <span className="text-white/40 text-xs mt-0.5">{label}</span>
      </div>
    </div>
  )
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(149, 166, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(149, 166, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Gradient Orbs / Soft Glow */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(75,255,69,0.2)_0%,transparent_70%)] blur-[100px] animate-float-1 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(149,166,255,0.15)_0%,transparent_70%)] blur-[80px] animate-float-2 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(75,255,69,0.12)_0%,transparent_70%)] blur-[80px] animate-float-3 pointer-events-none" />

      {/* Floating Elements */}
      <div className="absolute top-40 left-[10%] hidden lg:flex items-center gap-2 bg-[#0a1c2b]/80 backdrop-blur-sm border border-[#95A6FF]/20 rounded-full px-4 py-2 animate-float-badge">
        <Activity className="w-4 h-4 text-[#95A6FF]" />
        <span className="text-xs text-[#95A6FF]/80">Live Analytics</span>
      </div>

      <div className="absolute top-60 right-[8%] hidden lg:flex items-center gap-2 bg-[#0a1c2b]/80 backdrop-blur-sm border border-[#95A6FF]/20 rounded-xl px-4 py-3 animate-float-badge-delayed">
        <TrendingUp className="w-4 h-4 text-[#95A6FF]" />
        <div className="flex flex-col">
          <span className="text-xs text-[#95A6FF]/60">Revenue</span>
          <span className="text-sm font-semibold text-white">+24.5%</span>
        </div>
      </div>

      <div className="absolute bottom-40 left-[12%] hidden lg:flex items-center gap-2 bg-[#0a1c2b]/80 backdrop-blur-sm border border-[#95A6FF]/20 rounded-full px-4 py-2 animate-float-badge">
        <TrendingUp className="w-4 h-4 text-[#4BFF45]" />
        <span className="text-xs text-white/70">Data-Driven Growth</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Centered Hero Content */}
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-3 bg-[#0a1c2b]/80 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 animate-float-badge">
            <div className="flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-[#4BFF45]" />
              <span className="text-sm text-white/70">Data</span>
            </div>
            <span className="text-white/20">+</span>
            <div className="flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-[#95A6FF]" />
              <span className="text-sm text-white/70">Growth</span>
            </div>
            <span className="text-white/20">+</span>
            <div className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#4BFF45]" />
              <span className="text-sm text-white/70">Product</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight mb-6 text-balance">
            Convertimos datos en decisiones que
            <br />
            <span className="bg-gradient-to-r from-[#4BFF45] to-[#95A6FF] bg-clip-text text-transparent">
              escalan tu revenue.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto mb-6 text-pretty">
            Tu socio de crecimiento en e-commerce y productos digitales.
          </p>
          <p className="text-base sm:text-lg text-white/40 leading-relaxed max-w-xl mx-auto mb-10 text-pretty">
            Embudos, retención y North Star Metrics con impacto directo en ingresos.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://cal.com/eduardo-malaga-1qzeqp/45min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4BFF45] text-[#061421] px-8 py-4 rounded-xl font-medium hover:translate-y-[-2px] hover:shadow-[0_0_30px_rgba(75,255,69,0.3)] transition-all inline-flex items-center justify-center gap-2"
            >
              Solicitar Auditoria
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#servicios"
              className="border border-white/20 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/5 transition-colors inline-flex items-center justify-center"
            >
              Explorar servicios
            </Link>
          </div>
        </div>

        {/* Stats with Incremental Design */}
        <div
          className={`mt-24 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="bg-[rgba(10,28,43,0.5)] border border-[rgba(149,166,255,0.08)] rounded-2xl p-6 sm:p-10 hover:border-[rgba(75,255,69,0.2)] hover:bg-[rgba(10,28,43,0.8)] transition-all">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {/* Stat 1 */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#95A6FF]/20 to-[#95A6FF]/5 border border-[#95A6FF]/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#95A6FF]" strokeWidth={1.5} />
                  </div>
                  <span className="text-white/40 text-sm">Auditoria</span>
                </div>
                <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-semibold">
                    <AnimatedCounter target={48} />
                  </span>
                  <span className="text-[#4BFF45] text-2xl font-semibold">h</span>
                  <span className="inline-flex items-center gap-0.5 text-[#4BFF45] text-xs font-medium bg-[#4BFF45]/10 px-2 py-0.5 rounded-full ml-1">
                    <Plus className="w-3 h-3" />
                    rapido
                  </span>
                </div>
                <p className="text-white/40 text-sm mb-3">Diagnostico accionable</p>
                <ProgressBar progress={95} delay={0} />
              </div>

              {/* Stat 2 */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#95A6FF]/20 to-[#95A6FF]/5 border border-[#95A6FF]/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#95A6FF]" strokeWidth={1.5} />
                  </div>
                  <span className="text-white/40 text-sm">Empresas</span>
                </div>
                <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-semibold">
                    +<AnimatedCounter target={30} />
                  </span>
                  <span className="inline-flex items-center gap-0.5 text-[#4BFF45] text-xs font-medium bg-[#4BFF45]/10 px-2 py-0.5 rounded-full">
                    <Plus className="w-3 h-3" />5 este mes
                  </span>
                </div>
                <p className="text-white/40 text-sm mb-3">Acompanadas al exito</p>
                <ProgressBar progress={75} delay={100} />
              </div>

              {/* Stat 3 */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#95A6FF]/20 to-[#95A6FF]/5 border border-[#95A6FF]/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#95A6FF]" strokeWidth={1.5} />
                  </div>
                  <span className="text-white/40 text-sm">Revenue</span>
                </div>
                <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-semibold">
                    +<AnimatedCounter target={18} />
                  </span>
                  <span className="text-[#4BFF45] text-2xl font-semibold">%</span>
                  <span className="inline-flex items-center gap-0.5 text-[#4BFF45] text-xs font-medium bg-[#4BFF45]/10 px-2 py-0.5 rounded-full">
                    <TrendingUp className="w-3 h-3" />
                    creciendo
                  </span>
                </div>
                <p className="text-white/40 text-sm mb-3">Uplift promedio</p>
                <ProgressBar progress={85} delay={200} />
              </div>

              {/* Stat 4 */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#95A6FF]/20 to-[#95A6FF]/5 border border-[#95A6FF]/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#95A6FF]" strokeWidth={1.5} />
                  </div>
                  <span className="text-white/40 text-sm">Enfoque</span>
                </div>
                <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-semibold text-[#4BFF45]">ROI</span>
                  <span className="inline-flex items-center gap-0.5 text-[#4BFF45] text-xs font-medium bg-[#4BFF45]/10 px-2 py-0.5 rounded-full">
                    <Plus className="w-3 h-3" />
                    garantizado
                  </span>
                </div>
                <p className="text-white/40 text-sm mb-3">Medible desde el dia 1</p>
                <ProgressBar progress={100} delay={300} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-30px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(25px); }
        }
        @keyframes float-badge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-1 { animation: float-1 8s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 10s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 12s ease-in-out infinite; }
        .animate-float-badge { animation: float-badge 4s ease-in-out infinite; }
        .animate-float-badge-delayed { animation: float-badge 4s ease-in-out infinite; animation-delay: 2s; }
      `}</style>
    </section>
  )
}
