import React from 'react'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const DETAILS = {
  'website-development': {
    title: 'Website Development',
    tools: ['React', 'Next.js', 'Tailwind', 'Node.js'],
  },
  'app-development': {
    title: 'App Development',
    tools: ['Flutter', 'React Native', 'Firebase'],
  },
  'graphic-designing': {
    title: 'Graphic Designing',
    tools: ['Figma', 'Illustrator', 'Photoshop'],
  },
  'ui-ux-designing': {
    title: 'UI/UX Designing',
    tools: ['Figma', 'Framer', 'UserTesting'],
  },
}

function ServiceDetail() {
  const { slug } = useParams()
  const data = DETAILS[slug] || { title: 'Service', tools: [] }

  return (
    <div>
      <PageHeader title={data.title} subtitle="How we work and what you get." />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold text-[#1A3A60]">Overview</h3>
            <p className="text-slate-700">We follow a discovery → design → development → delivery process, with weekly demos and clear milestones. You get maintainable code, documentation, and post-launch support.</p>
            <h3 className="text-xl font-semibold text-[#1A3A60]">Benefits</h3>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>Faster time to market</li>
              <li>Better performance and accessibility</li>
              <li>Transparent pricing and timelines</li>
              <li>Dedicated team with senior oversight</li>
            </ul>
          </div>
          <aside className="space-y-6">
            <div className="p-5 rounded-lg border border-slate-200">
              <div className="font-semibold text-[#1A3A60]">Tools & Tech</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {data.tools.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-sm bg-[#F0F2F5] border border-slate-200">{t}</span>
                ))}
              </div>
            </div>
            <a href="/contact" className="block text-center px-5 py-3 rounded-md text-white font-semibold" style={{ backgroundColor: '#1E88E5' }}>Get a Quote</a>
          </aside>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetail
