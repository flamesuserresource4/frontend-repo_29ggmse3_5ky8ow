import React from 'react'
import PageHeader from '../components/PageHeader'

const DARK_BLUE = '#1A3A60'

function About() {
  return (
    <div>
      <PageHeader title="About Qodex" subtitle="We build purposeful products that shape tomorrow." />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold" style={{ color: DARK_BLUE }}>Mission & Vision</h2>
            <p className="mt-3 text-slate-700">Our mission is to empower businesses through cutting-edge software that blends performance with beauty. We envision a world where technology is simple, human, and accessible.</p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[{t:'Innovation',d:'We explore, prototype, and iterate fast.'},{t:'Reliability',d:'We deliver on time with rock-solid quality.'},{t:'Excellence',d:'We sweat the details that matter.'}].map((i)=> (
                <div key={i.t} className="p-4 rounded-lg border border-slate-200">
                  <div className="font-semibold" style={{ color: DARK_BLUE }}>{i.t}</div>
                  <div className="text-sm text-slate-600 mt-1">{i.d}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-xl border border-slate-200 bg-[#F0F2F5]">
            <h3 className="text-xl font-semibold" style={{ color: DARK_BLUE }}>Why Choose Us</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>• User-first approach with measurable outcomes</li>
              <li>• Senior engineers and designers on every project</li>
              <li>• Transparent process and proactive communication</li>
              <li>• Secure, scalable, and maintainable solutions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
