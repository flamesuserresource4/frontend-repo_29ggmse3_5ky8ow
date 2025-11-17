import React from 'react'
import PageHeader from '../components/PageHeader'

const DARK_BLUE = '#1A3A60'
const VIBRANT_BLUE = '#1E88E5'

function Contact() {
  return (
    <div>
      <PageHeader title="Contact" subtitle="Let’s build something great together." />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <form className="space-y-4 p-6 rounded-xl border border-slate-200">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]" placeholder="name@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea rows="5" className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]" placeholder="Tell us about your project" />
            </div>
            <button type="button" className="px-5 py-3 rounded-md text-white font-semibold" style={{ backgroundColor: VIBRANT_BLUE }}>Send Message</button>
          </form>

          <div className="space-y-6">
            <div>
              <div className="text-sm uppercase tracking-widest text-slate-500">Contact</div>
              <div className="mt-1 text-[#1A3A60] font-semibold">hello@qodex.software</div>
              <div className="text-slate-600">+1 (555) 123-4567</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-widest text-slate-500">Location</div>
              <div className="mt-1 text-[#1A3A60] font-semibold">123 Innovation Drive, Tech City</div>
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-200">
              <iframe
                title="Qodex Office Location"
                src="https://www.google.com/maps?q=San+Francisco&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
