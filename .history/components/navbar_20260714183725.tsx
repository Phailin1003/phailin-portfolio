import Link from 'next/link'
import React from 'react'

export default function Navbar() {
      return (
        <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur">
 <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-text hover:text-amber"
        >   <span className="text-amber">Portfolio</span>
        

        </Link>
</div>
    </header>
  )
}