export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-leaf-dark-green to-green-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl">🍂</div>
              <div>
                <h3 className="text-xl font-bold kid-handwriting">Leaf It To Mac</h3>
                <p className="text-sm text-white/80">Professional Leaf Raking for Kids!</p>
              </div>
            </div>
            <p className="text-white/80 text-sm">
              Making fall fun, one leaf at a time! Mac specializes in professional leaf raking 
              with a kid-friendly approach that brings smiles to every yard.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Small Yard Raking ($15)</li>
              <li>Medium Yard Raking ($25)</li>
              <li>Large Yard Raking ($40)</li>
              <li>Leaf Art Creation (+$10)</li>
              <li>Leaf Pile Jumping (FREE!)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Service Area</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Richwood Circle</li>
              <li>2 blocks radius coverage</li>
              <li>Cincinnati, OH 45208</li>
              <li>Free estimates for neighbors!</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Mac</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>📞 (555) LEAF-RAK</li>
              <li>📧 mac@leafservice.com</li>
              <li>🏠 Richwood Circle Area</li>
              <li>⏰ Weekends & After School</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm mb-4 md:mb-0">
              © 2024 Mac's Leaf Service. Making yards beautiful, one leaf at a time! 🍂
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
              <a href="#area" className="text-white/80 hover:text-white transition-colors">Service Area</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-white/60 text-sm">
            Made with ❤️ and lots of 🍂 for the best leaf raking service in Cincinnati!
          </p>
        </div>
      </div>
    </footer>
  )
}
