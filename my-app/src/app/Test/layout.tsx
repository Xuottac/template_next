import React from 'react'

export default function TestLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    
    <><nav>Test Navbar</nav>
    <main>
        {children}
    </main></>
  )
}
