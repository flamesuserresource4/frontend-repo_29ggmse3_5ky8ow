import React from 'react'
import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'

const services = [
  { slug: 'website-development', title: 'Website Development', desc: 'High-performance websites that convert.', icon: '🌐' },
  { slug: 'app-development', title: 'App Development', desc: 'Cross-platform apps your users love.', icon: '📱' },
  { slug: 'graphic-designing', title: 'Graphic Designing', desc: 'Visual identities that stand out.', icon: '🎨' },
  { slug: 'ui-ux-designing', title: 'UI/UX Designing', desc: 'Elegant experiences that scale.', icon: '✨' },
]

function Services() {
  return (
    <div>
      <PageHeader title="Our Services" subtitle="From idea to impact, we ship value at speed." />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="group p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
              <div className="text-3xl">{s.icon}</div>
              <div className="mt-3 font-semibold text-[#1A3A60]">{s.title}</div>
              <div className="text-sm text-slate-600">{s.desc}</div>
              <div className="mt-3 text-[#1E88E5] text-sm group-hover:underline">Learn more →</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
