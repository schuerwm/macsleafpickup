'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    yardSize: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    alert('Thanks for your interest! Mac will get back to you soon! 🍂')
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      yardSize: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-leaf-dark-green mb-4 kid-handwriting">
            Book Leaf It To Mac! 📞
          </h2>
          <p className="text-xl text-gray-600">
            Ready to make your yard beautiful? Let's chat!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-leaf-green to-leaf-dark-green rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Get Your Free Quote! 🎯</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-2">
                  Your Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                  placeholder="990 Richwood Cir, Cincinnati, OH 45208"
                />
              </div>

              <div>
                <label htmlFor="yardSize" className="block text-sm font-medium mb-2">
                  Yard Size
                </label>
                <select
                  id="yardSize"
                  name="yardSize"
                  value={formData.yardSize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                >
                  <option value="">Select yard size</option>
                  <option value="small">Small (up to 500 sq ft) - $15</option>
                  <option value="medium">Medium (up to 1000 sq ft) - $25</option>
                  <option value="large">Large (up to 2000 sq ft) - $40</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                  placeholder="Any special requests or questions for Mac?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-leaf-dark-green font-bold py-4 px-6 rounded-xl hover:bg-gray-100 transition-colors text-lg"
              >
                Send Message to Mac! 🍂
              </button>
            </form>
          </div>

          {/* Contact Info & Image */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-autumn-orange to-autumn-red rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Mac Directly! 📱</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-2xl mr-4">📞</div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-white/80">(555) LEAF-RAK</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-4">📧</div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-white/80">mac@leafservice.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-4">🏠</div>
                  <div>
                    <p className="font-semibold">Service Area</p>
                    <p className="text-white/80">2 blocks around Richwood Cir</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-4">⏰</div>
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-white/80">Weekends & After School</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fall Image */}
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Beautiful autumn leaves and fall colors"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-2xl font-bold mb-2">Ready for Fall? 🍂</h4>
                  <p className="text-lg">Let Mac make your yard the prettiest on the block!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
