import React from 'react'
import Hero from '../components/Hero'

function Home() {
  return (
    <div>
      <Hero />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {["Innovation","Reliability","Quality"].map((k, i) => (
            <div key={k} className="p-6 rounded-xl border border-slate-200 shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-[#1A3A60]">{k}</div>
              <p className="mt-2 text-slate-600">We champion {k.toLowerCase()} in every deliverable, ensuring your product is future-proof and delightful.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
