import React from 'react'

const DARK_BLUE = '#1A3A60'
const VIBRANT_BLUE = '#1E88E5'

function PageHeader({ title, subtitle }) {
  return (
    <div className="py-16 bg-gradient-to-br from-white to-[#F0F2F5] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-extrabold" style={{ color: DARK_BLUE }}>{title}</h1>
        {subtitle && <p className="mt-2 text-slate-600 max-w-2xl">{subtitle}</p>}
        <div className="mt-4 h-1 w-24 rounded-full" style={{ backgroundColor: VIBRANT_BLUE }} />
      </div>
    </div>
  )
}

export default PageHeader
