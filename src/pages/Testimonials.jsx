import React from 'react'
import PageHeader from '../components/PageHeader'

const DATA = [
  { name: 'Sarah Lee', role: 'CEO, NovaHealth', quote: 'Qodex delivered our MVP ahead of schedule with flawless UX.' },
  { name: 'James Park', role: 'CTO, Finlytics', quote: 'Their engineering standards and communication are top-tier.' },
  { name: 'Amelia Khan', role: 'Product Lead, ShopZen', quote: 'A reliable partner for iterative product development.' },
]

function Testimonials() {
  return (
    <div>
      <PageHeader title="Testimonials" subtitle="What our clients say about working with us." />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {DATA.map((t) => (
            <div key={t.name} className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
              <div className="text-slate-700">“{t.quote}”</div>
              <div className="mt-4 text-sm font-semibold text-[#1A3A60]">{t.name}</div>
              <div className="text-xs text-slate-500">{t.role}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Testimonials
