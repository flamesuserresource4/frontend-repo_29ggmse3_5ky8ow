import React from 'react'
import PageHeader from '../components/PageHeader'

const STACK = [
  { name: 'React', desc: 'Component-driven UIs for the web.' },
  { name: 'Flutter', desc: 'Native-quality apps for iOS & Android.' },
  { name: 'HTML & CSS', desc: 'The foundation of the web, perfected.' },
  { name: 'Figma', desc: 'Design, prototype, and collaborate.' },
]

function Technologies() {
  return (
    <div>
      <PageHeader title="Technologies" subtitle="The tools we use to build robust experiences." />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6">
          {STACK.map((t) => (
            <div key={t.name} className="p-6 rounded-xl border border-slate-200 bg-white">
              <div className="text-lg font-semibold text-[#1A3A60]">{t.name}</div>
              <div className="text-sm text-slate-600">{t.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Technologies
