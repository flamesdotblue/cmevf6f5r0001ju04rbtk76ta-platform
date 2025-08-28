import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="relative py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold">Let's build something beautiful</h4>
              <p className="text-white/75 mt-1">Tell us about your timeline, goals, and vision.</p>
            </div>
            <form className="w-full sm:w-auto grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <input
                type="text"
                placeholder="Company or project"
                className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button type="submit" className="w-full rounded-xl bg-white text-slate-900 px-4 py-3 text-sm font-semibold hover:-translate-y-0.5 transition">
                Request intro
              </button>
            </form>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/70">
            <p>© {new Date().getFullYear()} Aurora Studio. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Dribbble</a>
              <a href="#" className="hover:text-white">Behance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
