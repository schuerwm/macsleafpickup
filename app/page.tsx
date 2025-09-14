'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import ServiceArea from '@/components/ServiceArea'
import Pricing from '@/components/Pricing'
import LeafCounter from '@/components/LeafCounter'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  const [leavesCollected, setLeavesCollected] = useState(0)

  useEffect(() => {
    // Ultra-fast one-by-one counting animation
    const interval = setInterval(() => {
      setLeavesCollected(prev => prev + 1)
    }, 20) // Super fast - every 20ms for lightning counting!

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <LeafCounter count={leavesCollected} />
      <ServiceArea />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
