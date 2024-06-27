import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      
      {/* Big text */}
      <div className="relative -mt-16 h-60 w-full mt-10" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-900 before:to-gray-800 before:to-80% before:bg-clip-text before:text-transparent before:content-['Simple'] after:absolute after:inset-0 after:bg-gray-700 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Simple'] after:[text-shadow:0_1px_dark_gray]"></div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
        </div>
      </div>
    </footer>
  )
}
