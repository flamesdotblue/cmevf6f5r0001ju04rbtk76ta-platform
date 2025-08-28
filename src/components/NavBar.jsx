import React from 'react'
import { Flame, Sparkles, Menu } from 'lucide-react'

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="backdrop-blur-xl bg-white/10 border border-white/15 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.4)] rounded-2xl">
          <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 blur-md bg-fuchsia-400/60 rounded-xl" />
                <div className="relative bg-white/10 rounded-xl p-1.5 border border-white/20">
                  <Flame className="h-5 w-5 text-white" />
                </div>
              </div>
              <span className="font-semibold tracking-tight">Aurora Studio</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              <a href="#work" className="hover:text-white transition">Work</a>
              <a href="#services" className="hover:text-white transition">Services</a>
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md hover:bg-white/15 transition">
                <Sparkles className="h-4 w-4 text-fuchsia-300 group-hover:rotate-12 transition" />
                Start a Project
              </button>
            </div>

            <button className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
