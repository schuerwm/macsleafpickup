'use client'

interface LeafCounterProps {
  count: number
}

export default function LeafCounter({ count }: LeafCounterProps) {
  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-leaf-dark-green mb-6 kid-handwriting">
          Leaves We've Collected This Season! 🍂
        </h2>
        
        <div className="bg-gradient-to-r from-leaf-green to-leaf-dark-green rounded-2xl p-8 text-white">
          <div className="text-6xl font-bold mb-4 transition-all duration-100 ease-out transform hover:scale-105">
            {count.toLocaleString()}
          </div>
          <p className="text-xl">leaves and counting! 🎉</p>
          
          <div className="mt-6 flex justify-center space-x-4">
            <div className="text-2xl leaf-bounce">🍁</div>
            <div className="text-2xl leaf-bounce" style={{animationDelay: '0.2s'}}>🍂</div>
            <div className="text-2xl leaf-bounce" style={{animationDelay: '0.4s'}}>🍃</div>
            <div className="text-2xl leaf-bounce" style={{animationDelay: '0.6s'}}>🍁</div>
            <div className="text-2xl leaf-bounce" style={{animationDelay: '0.8s'}}>🍂</div>
          </div>
        </div>
        
        <p className="text-gray-600 mt-4">
          That's enough leaves to fill {Math.floor(count / 1000)} wheelbarrows! 🚛
        </p>
      </div>
    </section>
  )
}
