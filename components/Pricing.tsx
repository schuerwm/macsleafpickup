'use client'

import Image from 'next/image'

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-leaf-dark-green mb-4 kid-handwriting">
            Our Super Fair Prices! 💰
          </h2>
          <p className="text-xl text-gray-600">
            Kid-friendly prices for kid-friendly service!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Small Yard Package */}
          <div className="bg-gradient-to-br from-leaf-green to-leaf-dark-green rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-4 right-4 text-4xl opacity-20">🍂</div>
            <h3 className="text-2xl font-bold mb-4">Small Yard Package</h3>
            <div className="text-4xl font-bold mb-2">$5</div>
            <p className="text-white/80 mb-6">Perfect for small yards!</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-xl mr-3">✓</span>
                <span>Up to 500 sq ft</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-3">✓</span>
                <span>Leaf raking & bagging</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-3">✓</span>
                <span>Cleanup included</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-3">✓</span>
                <span>Fun guaranteed! 😊</span>
              </li>
            </ul>
            
            <button className="w-full bg-white text-leaf-dark-green font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
              Book This Package
            </button>
          </div>

          {/* Medium Yard Package - Most Popular */}
          <div className="bg-gradient-to-br from-autumn-orange to-autumn-red rounded-3xl p-8 text-white relative overflow-hidden transform scale-105 shadow-2xl">
            <div className="absolute top-4 right-4 text-4xl opacity-20">🍁</div>
            <div className="absolute top-0 left-0 bg-yellow-400 text-black px-4 py-1 rounded-br-lg font-bold">
              MOST POPULAR! ⭐
            </div>
            <h3 className="text-2xl font-bold mb-4">Medium Yard Package</h3>
            <div className="text-4xl font-bold mb-2">$10</div>
            <p className="text-white/80 mb-6">Perfect for most yards!</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-xl mr-3">✓</span>
                <span>Up to 1000 sq ft</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-3">✓</span>
                <span>Leaf raking & bagging</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-3">✓</span>
                <span>Cleanup included</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-3">✓</span>
                <span>Leaf pile jumping! 🦘</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-3">✓</span>
                <span>Photo proof of work</span>
              </li>
            </ul>
            
            <button className="w-full bg-white text-autumn-red font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
              Book This Package
            </button>
          </div>

          {/* Large Yard Package */}
          <div className="bg-gradient-to-br from-leaf-dark-green to-green-800 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-4 right-4 text-4xl opacity-20">🍃</div>
            <h3 className="text-2xl font-bold mb-4">Large Yard Package</h3>
            <div className="text-4xl font-bold mb-2">$15</div>
            <p className="text-white/80 mb-6">For the biggest yards!</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-xl mr-3">✓</span>
                <span>Up to 2000 sq ft</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-3">✓</span>
                <span>Leaf raking & bagging</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-3">✓</span>
                <span>Cleanup included</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-3">✓</span>
                <span>Leaf pile jumping! 🦘</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-3">✓</span>
                <span>Photo proof of work</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-3">✓</span>
                <span>Free leaf art creation! 🎨</span>
              </li>
            </ul>
            
            <button className="w-full bg-white text-leaf-dark-green font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
              Book This Package
            </button>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-16 bg-gradient-to-r from-autumn-yellow to-autumn-orange rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Extra Fun Services! 🎉
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/90 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-leaf-dark-green mb-4">Leaf Art Creation 🎨</h4>
              <p className="text-gray-700 mb-4">We'll create beautiful leaf art in your yard!</p>
              <div className="text-2xl font-bold text-autumn-orange">+$2</div>
            </div>
            
            <div className="bg-white/90 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-leaf-dark-green mb-4">Leaf Pile Jumping Session 🦘</h4>
              <p className="text-gray-700 mb-4">Watch us have fun jumping in the leaves! 1000 jumps guaranteed!</p>
              <div className="text-2xl font-bold text-autumn-orange">$1</div>
            </div>
            
            <div className="bg-white/90 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-leaf-dark-green mb-4">Lizard Catching Service 🦎</h4>
              <p className="text-gray-700 mb-4">Remove lizards from your yard or catch them for pets! Super fun adventure!</p>
              <div className="text-2xl font-bold text-autumn-orange">$1 per lizard</div>
            </div>
          </div>
        </div>

        {/* Fall Image Section */}
        <div className="mt-16 relative rounded-3xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Beautiful autumn leaves and fall colors"
            width={1200}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Ready to Make Your Yard Beautiful? 🍂</h3>
              <p className="text-xl">Book Mac's Leaf Service today and see the magic happen!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
