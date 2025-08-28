import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Star, Rocket } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-10 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Glow orbs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
          <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-xl mb-4">
              <Rocket className="h-3.5 w-3.5 text-fuchsia-300" />
              Glassmorphic Design Agency
            </div>
            <h1 className="text-4xl sm:text-6xl leading-[1.05] font-semibold tracking-tight">
              We craft award‑winning digital experiences.
            </h1>
            <p className="mt-4 text-white/80 text-base sm:text-lg max-w-2xl">
              Brand systems, web apps, and product design that feel as good as they look. From concept to launch, we blend strategy, aesthetics, and motion.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-[0_10px_40px_-12px_rgba(255,255,255,0.5)] hover:-translate-y-0.5 transition"
              >
                View Our Work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur-xl hover:bg-white/15 transition"
              >
                Start a Project
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 max-w-md gap-3">
              <Badge icon={<Award className='h-3.5 w-3.5' />} label="Awwwards" value="Site of the Day" />
              <Badge icon={<Star className='h-3.5 w-3.5' />} label="Dribbble" value="Top Studio" />
              <Badge icon={<Award className='h-3.5 w-3.5' />} label="CSSDA" value="WOTM" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-fuchsia-400/50 to-indigo-400/50 blur-xl" />
              <div className="relative aspect-[4/5] rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,0,0,0.6)]">
                {/* Decorative stripes */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 2px, transparent 2px, transparent 10px)'}} />
                <div className="absolute bottom-0 w-full p-5">
                  <div className="rounded-2xl border border-white/20 bg-black/20 backdrop-blur-xl p-4">
                    <p className="text-sm text-white/80">
                      We design interfaces that move—micro-interactions, immersive 3D, and motion systems that tell your brand story.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Badge({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-xl">
      <div className="flex items-center gap-2 text-[11px] text-white/80">
        <span className="text-fuchsia-200">{icon}</span>
        <span>{label}</span>
      </div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  )
}
