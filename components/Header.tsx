'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="text-4xl">🍂</div>
            <div>
              <h1 className="text-2xl text-leaf-dark-green kid-handwriting" style={{fontFamily: 'Reenie Beanie, Comic Sans MS, cursive'}}>Leaf It To Mac</h1>
              <p className="text-sm text-gray-600">🍂 Mac's Super Fun Leaf Cleanup Service! 🍂</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-leaf-dark-green hover:text-autumn-orange transition-colors">Services</a>
            <a href="#pricing" className="text-leaf-dark-green hover:text-autumn-orange transition-colors">Pricing</a>
            <a href="#area" className="text-leaf-dark-green hover:text-autumn-orange transition-colors">Service Area</a>
            <a href="#contact" className="text-leaf-dark-green hover:text-autumn-orange transition-colors">Contact</a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-6 h-0.5 bg-leaf-dark-green"></div>
              <div className="w-6 h-0.5 bg-leaf-dark-green"></div>
              <div className="w-6 h-0.5 bg-leaf-dark-green"></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#services" className="text-leaf-dark-green hover:text-autumn-orange transition-colors">Services</a>
              <a href="#pricing" className="text-leaf-dark-green hover:text-autumn-orange transition-colors">Pricing</a>
              <a href="#area" className="text-leaf-dark-green hover:text-autumn-orange transition-colors">Service Area</a>
              <a href="#contact" className="text-leaf-dark-green hover:text-autumn-orange transition-colors">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
