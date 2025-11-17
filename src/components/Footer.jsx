import React from 'react'
import Logo from './Logo'

function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <Logo size={32} />
          <p className="text-sm text-slate-600 max-w-sm">
            Building future-ready digital products with precision, creativity, and a relentless focus on quality.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="text-slate-900 font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="/about" className="hover:text-[#1E88E5]">About</a></li>
              <li><a href="/services" className="hover:text-[#1E88E5]">Services</a></li>
              <li><a href="/portfolio" className="hover:text-[#1E88E5]">Portfolio</a></li>
              <li><a href="/contact" className="hover:text-[#1E88E5]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-semibold mb-3">Connect</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-[#1E88E5]">Twitter</a></li>
              <li><a href="#" className="hover:text-[#1E88E5]">LinkedIn</a></li>
              <li><a href="#" className="hover:text-[#1E88E5]">Dribbble</a></li>
              <li><a href="#" className="hover:text-[#1E88E5]">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="text-sm text-slate-600">
          <h4 className="text-slate-900 font-semibold mb-3">Contact</h4>
          <p>Email: hello@qodex.software</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Innovation Drive, Tech City</p>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Qodex Software. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
