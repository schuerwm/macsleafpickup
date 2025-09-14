'use client'

import { useMemo } from 'react'
import GoogleMap from './GoogleMap'

export default function ServiceArea() {
  // Center point calculated from the service area polygon
  const center = { lat: 39.125, lng: -84.417 }
  
  // Create a proper 2-block radius service area (approximately 0.15 mile radius)
  // This creates a more realistic circular coverage area
  const createCirclePoints = (center: { lat: number; lng: number }, radiusInMiles: number, points: number = 32) => {
    const earthRadius = 3959 // Earth's radius in miles
    const lat = (center.lat * Math.PI) / 180
    const lng = (center.lng * Math.PI) / 180
    const d = radiusInMiles / earthRadius
    
    const circlePoints = []
    for (let i = 0; i < points; i++) {
      const angle = (i * 2 * Math.PI) / points
      const lat2 = Math.asin(Math.sin(lat) * Math.cos(d) + Math.cos(lat) * Math.sin(d) * Math.cos(angle))
      const lng2 = lng + Math.atan2(Math.sin(angle) * Math.sin(d) * Math.cos(lat), Math.cos(d) - Math.sin(lat) * Math.sin(lat2))
      
      circlePoints.push({
        lat: (lat2 * 180) / Math.PI,
        lng: (lng2 * 180) / Math.PI
      })
    }
    return circlePoints
  }
  
  // Parse the exact WKT polygon boundary for Mac's service area
  const serviceArea = useMemo(() => {
    // WKT coordinates: POLYGON ((-84.4177129 39.1241285, -84.418008 39.123729, -84.4176647 39.1233878, -84.4170531 39.123188, -84.4167098 39.1233295, -84.4160017 39.124141, -84.4158193 39.1247528, -84.4162028 39.1250399, -84.4168577 39.1267204, -84.4175443 39.128102, -84.4189176 39.127869, -84.4179091 39.125472, -84.4173512 39.1247895, -84.4170937 39.1245065, -84.4177129 39.1241285))
    return [
      { lat: 39.1241285, lng: -84.4177129 },
      { lat: 39.123729, lng: -84.418008 },
      { lat: 39.1233878, lng: -84.4176647 },
      { lat: 39.123188, lng: -84.4170531 },
      { lat: 39.1233295, lng: -84.4167098 },
      { lat: 39.124141, lng: -84.4160017 },
      { lat: 39.1247528, lng: -84.4158193 },
      { lat: 39.1250399, lng: -84.4162028 },
      { lat: 39.1267204, lng: -84.4168577 },
      { lat: 39.128102, lng: -84.4175443 },
      { lat: 39.127869, lng: -84.4189176 },
      { lat: 39.125472, lng: -84.4179091 },
      { lat: 39.1247895, lng: -84.4173512 },
      { lat: 39.1245065, lng: -84.4170937 },
      { lat: 39.1241285, lng: -84.4177129 } // Close the polygon
    ]
  }, [])

  return (
    <section id="area" className="py-16 bg-gradient-to-br from-autumn-orange to-autumn-red">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 kid-handwriting">
            Our Service Area 🗺️
          </h2>
          <p className="text-xl text-white/90">
            We proudly serve 2 blocks around 990 Richwood Cir, Cincinnati, OH 45208
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-leaf-dark-green mb-6 kid-handwriting">
                We Cover Your Neighborhood! 🏠
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-leaf-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Richwood Circle and surrounding streets</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-leaf-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">All houses within 2 blocks radius</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-leaf-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Free estimates for all neighbors!</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-leaf-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Same-day service available</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-leaf-green/10 rounded-xl">
                <p className="text-leaf-dark-green font-semibold">
                  🎯 Not sure if we cover your house? 
                  <br />
                  Just ask! We love meeting new neighbors!
                </p>
              </div>
            </div>

            <div className="relative">
              <GoogleMap 
                center={center}
                zoom={15} // This will be overridden by auto-zoom
                serviceArea={serviceArea}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
