import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'NeoBank Mobile',
    tag: 'Product Design',
    gradient: 'from-fuchsia-400/30 via-indigo-400/30 to-cyan-400/30',
  },
  {
    title: 'SaaS Dashboard',
    tag: 'UI/UX + Dev',
    gradient: 'from-indigo-300/30 via-fuchsia-300/30 to-purple-300/30',
  },
  {
    title: 'E‑commerce Brand',
    tag: 'Identity + Web',
    gradient: 'from-cyan-300/30 via-fuchsia-300/30 to-rose-300/30',
  },
  {
    title: 'AR Launch Site',
    tag: 'Creative Tech',
    gradient: 'from-violet-300/30 via-fuchsia-300/30 to-amber-300/30',
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Selected Work</h2>
            <p className="text-white/75 mt-1">A glimpse of projects where craft meets conversion.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
            Get in touch <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              href="#"
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[0_12px_60px_-20px_rgba(0,0,0,0.6)]"
            >
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 10%, rgba(255,255,255,0.6) 0, transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.35) 0, transparent 45%)' }} />
                <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(120deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 12px)' }} />
              </div>

              <div className="absolute inset-0 flex flex-col justify-between p-5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-black/20 px-2 py-1 text-[11px] text-white/85 backdrop-blur-md">
                    {p.tag}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">{p.title}</h3>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}

          {/* Wide feature card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="sm:col-span-2 lg:col-span-3 relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-400/20 via-indigo-400/20 to-cyan-400/20 blur-2xl -z-10" />
            <div className="flex flex-col lg:flex-row items-center gap-6 p-6">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold">Have an idea? Let's make it iconic.</h3>
                <p className="mt-1 text-white/80 max-w-2xl">We partner with startups and global brands to design delightful products that move metrics. Strategy, design, and high‑fidelity builds—under one roof.</p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-[0_10px_40px_-12px_rgba(255,255,255,0.5)] hover:-translate-y-0.5 transition">
                Start a Project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
