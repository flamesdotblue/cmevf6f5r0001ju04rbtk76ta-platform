import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

// Curated internet images (Unsplash) with design/branding/product focus
const projects = [
  {
    title: 'Fintech Brand System',
    tag: 'Identity + Web',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop',
    href: 'https://unsplash.com/photos/gray-laptop-computer-near-mug-on-brown-wooden-table-e076c223a692',
    author: 'Bundo Kim',
  },
  {
    title: 'SaaS Analytics UI',
    tag: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop',
    href: 'https://unsplash.com/photos/people-sitting-on-chairs-beside-their-desks-in-an-office-3a6694fb2f61',
    author: 'Annie Spratt',
  },
  {
    title: 'E‑commerce Editorial',
    tag: 'Art Direction',
    image: 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=1600&auto=format&fit=crop',
    href: 'https://unsplash.com/photos/person-holding-black-dslr-camera-6e0fd518b4a6',
    author: 'Christian Wiediger',
  },
  {
    title: 'Wellness App',
    tag: 'Product Design',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop',
    href: 'https://unsplash.com/photos/people-inside-a-conference-room-8e7e53415bb0',
    author: 'Campaign Creators',
  },
  {
    title: 'AR Launch Microsite',
    tag: 'Creative Tech',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    href: 'https://unsplash.com/photos/black-and-white-laptop-computer-b586d89ba3ee',
    author: 'Markus Spiske',
  },
  {
    title: 'NeoBank Mobile',
    tag: 'Motion + UI',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
    href: 'https://unsplash.com/photos/person-holding-black-android-smartphone-97eda2d62296',
    author: 'Yura Fresh',
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
              href={p.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[0_12px_60px_-20px_rgba(0,0,0,0.6)]"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={`${p.image}&w=1200`}
                  srcSet={`${p.image}&w=600 600w, ${p.image}&w=900 900w, ${p.image}&w=1200 1200w`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt={`${p.title} — by ${p.author}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
                {/* Subtle overlays for glass/dribbble feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(120deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 12px)' }} />
              </div>

              <div className="absolute inset-0 flex flex-col justify-between p-5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-black/25 px-2 py-1 text-[11px] text-white/85 backdrop-blur-md">
                    {p.tag}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">{p.title}</h3>
                    <p className="text-xs text-white/75 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">Photo: {p.author} (Unsplash)</p>
                  </div>
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
