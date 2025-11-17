import React from 'react'

// Brand colors
const DARK_BLUE = '#1A3A60'
const VIBRANT_BLUE = '#1E88E5'

function Logo({ size = 36, withText = true }) {
  const qStroke = DARK_BLUE
  const bolt = VIBRANT_BLUE
  const textColor = DARK_BLUE

  return (
    <div className="flex items-center gap-3 select-none">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Qodex Software logo"
      >
        <defs>
          <linearGradient id="qg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={qStroke} />
            <stop offset="100%" stopColor={bolt} />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="22" stroke="url(#qg)" strokeWidth="4" fill="none" />
        {/* Tail of Q */}
        <path d="M42 42 L54 54" stroke={bolt} strokeWidth="4" strokeLinecap="round" />
        {/* Subtle inner circuit node */}
        <circle cx="32" cy="32" r="4" fill={bolt} opacity="0.9" />
      </svg>
      {withText && (
        <div className="leading-tight">
          <div className="text-lg md:text-xl font-extrabold tracking-tight" style={{ color: textColor }}>
            Qodex Software
          </div>
          <div className="text-xs md:text-sm font-medium tracking-wide" style={{ color: VIBRANT_BLUE }}>
            Code the Future
          </div>
        </div>
      )}
    </div>
  )
}

export default Logo
