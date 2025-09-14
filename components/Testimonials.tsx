'use client'

import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mom",
      location: "Mac's House",
      text: "I can't believe how professional Mac is! He actually raked the leaves instead of just jumping in them... well, mostly. The yard looks amazing!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Dad",
      location: "Mac's House",
      text: "Finally! A leaf service that doesn't cost $200 and actually gets the job done. Mac even cleaned up his own messes - that's more than I can say for most adults!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Audrey",
      location: "Mac's Sister",
      text: "Leaf It To Mac is the BEST! He let me help jump in the leaf piles and we made leaf art together. It was way more fun than doing homework!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-leaf-green to-leaf-dark-green">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 kid-handwriting">
            What Our Happy Customers Say! 😊
          </h2>
          <p className="text-xl text-white/90">
            Don't just take our word for it - hear from our amazing neighbors!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-xl">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-leaf-dark-green">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        {/* Fun Stats Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
          <h3 className="text-3xl font-bold text-leaf-dark-green text-center mb-8">
            Mac's Amazing Stats! 📊
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-autumn-orange mb-2">100%</div>
              <p className="text-gray-700">Customer Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-autumn-orange mb-2">50+</div>
              <p className="text-gray-700">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-autumn-orange mb-2">1000+</div>
              <p className="text-gray-700">Leaves Raked</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-autumn-orange mb-2">∞</div>
              <p className="text-gray-700">Smiles Created</p>
            </div>
          </div>
        </div>

        {/* Fall Image with Quote */}
        <div className="mt-16 relative rounded-3xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Beautiful fall forest with colorful leaves"
            width={1200}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
            <div className="text-center text-white p-8">
              <div className="text-6xl mb-4">🍂</div>
              <h3 className="text-4xl font-bold mb-4">"Making Fall Fun, One Leaf at a Time!"</h3>
              <p className="text-xl">- Leaf It To Mac Motto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
