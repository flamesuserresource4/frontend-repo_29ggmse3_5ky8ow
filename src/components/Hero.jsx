import React from 'react'
import Spline from '@splinetool/react-spline'

const DARK_BLUE = '#1A3A60'
const VIBRANT_BLUE = '#1E88E5'
const LIGHT_GREY = '#F0F2F5'

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: LIGHT_GREY }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight" style={{ color: DARK_BLUE }}>
              Qodex Software
            </h1>
            <p className="mt-4 text-lg md:text-xl font-semibold" style={{ color: VIBRANT_BLUE }}>
              Code the Future
            </p>
            <p className="mt-4 text-slate-700 max-w-xl">
              We craft beautiful, scalable, and secure digital products. From concept to launch, our team builds software that moves businesses forward.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/contact" className="px-5 py-3 rounded-md text-white font-semibold shadow-sm hover:shadow transition-all" style={{ backgroundColor: VIBRANT_BLUE }}>
                Get Started
              </a>
              <a href="/services" className="px-5 py-3 rounded-md font-semibold border hover:shadow-sm transition-all" style={{ color: DARK_BLUE, borderColor: DARK_BLUE }}>
                Let’s Build Together
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { title: 'About', href: '/about', desc: 'Who we are and what drives us' },
                { title: 'Services', href: '/services', desc: 'What we can build for you' },
                { title: 'Contact', href: '/contact', desc: 'Let’s talk about your idea' },
              ].map((c) => (
                <a key={c.title} href={c.href} className="group p-4 rounded-lg bg-white/80 backdrop-blur border border-slate-200 hover:border-[#1E88E5] transition-colors">
                  <div className="text-sm font-semibold" style={{ color: DARK_BLUE }}>{c.title}</div>
                  <div className="text-xs text-slate-600 mt-1">{c.desc}</div>
                  <div className="text-xs mt-2 text-[#1E88E5] group-hover:underline">Explore →</div>
                </a>
              ))}
            </div>
          </div>

          <div className="pointer-events-none">
            <div className="w-full aspect-[4/3] rounded-xl border border-slate-200 bg-white/60 backdrop-blur shadow-sm flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm uppercase tracking-widest text-slate-500">Our Identity</div>
                <div className="mt-2 text-2xl font-bold" style={{ color: DARK_BLUE }}>Qodex Software</div>
                <div className="text-sm font-medium" style={{ color: VIBRANT_BLUE }}>Code the Future</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent" />
    </section>
  )
}

export default Hero
