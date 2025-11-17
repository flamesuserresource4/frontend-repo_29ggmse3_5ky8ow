import React, { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader'

const ITEMS = [
  { id: 1, title: 'Fintech Dashboard', category: 'Web', tech: ['React','Node'], img: '' },
  { id: 2, title: 'Health App', category: 'App', tech: ['Flutter'], img: '' },
  { id: 3, title: 'SaaS Landing', category: 'Web', tech: ['Next.js','Tailwind'], img: '' },
  { id: 4, title: 'Design System', category: 'UI/UX', tech: ['Figma'], img: '' },
]

const FILTERS = ['All','Web','App','UI/UX']

function Portfolio() {
  const [filter, setFilter] = useState('All')
  const data = useMemo(() => filter === 'All' ? ITEMS : ITEMS.filter(i=>i.category===filter), [filter])

  return (
    <div>
      <PageHeader title="Portfolio" subtitle="Selected work across web, mobile, and design." />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-8">
            {FILTERS.map(f => (
              <button key={f} onClick={()=>setFilter(f)} className={`px-4 py-2 rounded-full border text-sm ${filter===f? 'bg-[#1E88E5] text-white border-[#1E88E5]' : 'bg-white border-slate-200 text-slate-700'}`}>
                {f}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map(p => (
              <div key={p.id} className="rounded-xl border border-slate-200 overflow-hidden bg-white hover:shadow-md transition-shadow">
                <div className="h-40 bg-gradient-to-br from-[#1A3A60] to-[#1E88E5]" />
                <div className="p-4">
                  <div className="font-semibold text-[#1A3A60]">{p.title}</div>
                  <div className="text-xs text-slate-600">{p.category} • {p.tech.join(', ')}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
