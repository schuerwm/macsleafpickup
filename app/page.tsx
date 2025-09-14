'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import ServiceArea from '@/components/ServiceArea'
import Pricing from '@/components/Pricing'
import LeafCounter from '@/components/LeafCounter'
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
      
      {/* Simple Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-leaf-green to-leaf-dark-green">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 kid-handwriting">
            Ready to Book Mac? 📞
          </h2>
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <div className="text-6xl mb-4">🍂</div>
            <h3 className="text-2xl font-bold text-leaf-dark-green mb-4">
              Call Mac's Mom!
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Ready to have the cleanest yard on the block? Give us a call!
            </p>
            <a 
              href="tel:513-207-6054" 
              className="inline-block bg-autumn-orange hover:bg-autumn-red text-white font-bold py-4 px-8 rounded-full text-2xl transition-all transform hover:scale-105 shadow-lg"
            >
              📞 513-207-6054
            </a>
            <p className="text-sm text-gray-600 mt-4">
              Available: Weekends & After School
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
