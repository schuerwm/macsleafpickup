import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative py-20 px-4 text-center overflow-hidden">
      {/* Background fall image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Beautiful fall leaves and autumn scene"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-leaf-green/80 to-leaf-dark-green/80"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="text-8xl mb-4 leaf-bounce">🍂</div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg kid-handwriting">
            Leaf It To Mac
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
            The cutest and most professional leaf raking service in Cincinnati! 🌟
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-leaf-dark-green mb-6 kid-handwriting">
            Why Choose Mac? 🤔
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold text-leaf-dark-green mb-2">Super Fast</h3>
              <p className="text-gray-700">We rake leaves faster than you can say "autumn is here!"</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold text-leaf-dark-green mb-2">Super Clean</h3>
              <p className="text-gray-700">Your yard will look so clean, the neighbors will be jealous!</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">😊</div>
              <h3 className="text-xl font-semibold text-leaf-dark-green mb-2">Super Fun</h3>
              <p className="text-gray-700">We make leaf raking fun with games and smiles!</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-autumn-orange hover:bg-autumn-red text-white font-bold py-4 px-8 rounded-full text-xl transition-all transform hover:scale-105 shadow-lg"
            >
              Book Mac Now! 📞
            </a>
            <a 
              href="#pricing" 
              className="bg-leaf-green hover:bg-leaf-dark-green text-white font-bold py-4 px-8 rounded-full text-xl transition-all transform hover:scale-105 shadow-lg"
            >
              See Our Prices 💰
            </a>
          </div>
        </div>
      </div>

      {/* Floating leaves decoration */}
      <div className="absolute top-10 left-10 text-2xl leaf-float opacity-60">🍁</div>
      <div className="absolute top-20 right-20 text-3xl leaf-float opacity-60" style={{animationDelay: '1s'}}>🍂</div>
      <div className="absolute bottom-20 left-20 text-2xl leaf-float opacity-60" style={{animationDelay: '2s'}}>🍃</div>
      <div className="absolute bottom-10 right-10 text-3xl leaf-float opacity-60" style={{animationDelay: '0.5s'}}>🍁</div>
    </section>
  )
}
