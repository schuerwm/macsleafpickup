'use client'

import { useEffect, useRef, useState } from 'react'

interface GoogleMapProps {
  center: { lat: number; lng: number }
  zoom: number
  serviceArea: { lat: number; lng: number }[]
}

export default function GoogleMap({ center, zoom, serviceArea }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<any>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasApiKey, setHasApiKey] = useState(false)

  useEffect(() => {
    // Check if we have a valid API key
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    if (!apiKey || apiKey === 'AIzaSyAj8gbtzSnfCJc3yfTFk1sgHo6kOBm-KKM' || apiKey === 'DEMO_KEY') {
      setIsLoaded(true)
      return
    }

    setHasApiKey(true)

    const loadGoogleMaps = async () => {
      try {
        const { Loader } = await import('@googlemaps/js-api-loader')
        
        const loader = new Loader({
          apiKey: apiKey,
          version: 'weekly',
          libraries: ['geometry']
        })

        const google = await loader.load()
        
        if (mapRef.current) {
          // Calculate bounds to fit the entire service area
          const bounds = new google.maps.LatLngBounds()
          serviceArea.forEach(point => {
            bounds.extend(new google.maps.LatLng(point.lat, point.lng))
          })
          
          // Calculate center from bounds
          const calculatedCenter = bounds.getCenter()
          
          const mapInstance = new google.maps.Map(mapRef.current, {
            center: calculatedCenter,
            zoom: zoom, // Will be adjusted by fitBounds
            mapTypeId: 'roadmap',
            disableDefaultUI: false,
            zoomControl: true,
            streetViewControl: true,
            fullscreenControl: true,
            mapTypeControl: true
          })
          
          // Fit the map to show the entire service area
          mapInstance.fitBounds(bounds)
          
          // Add some padding around the boundary
          const listener = google.maps.event.addListener(mapInstance, 'idle', () => {
            if (mapInstance.getZoom() > 18) {
              mapInstance.setZoom(18) // Cap the zoom level
            }
            google.maps.event.removeListener(listener)
          })

          // Create service area polygon
          const serviceAreaPolygon = new google.maps.Polygon({
            paths: serviceArea,
            strokeColor: '#16a34a',
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: '#4ade80',
            fillOpacity: 0.35
          })

          serviceAreaPolygon.setMap(mapInstance)

          // Add center marker
          const centerMarker = new google.maps.Marker({
            position: center,
            map: mapInstance,
            title: "Mac's Leaf Service - 990 Richwood Cir",
            icon: {
              url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#16a34a" stroke="white" stroke-width="3"/>
                  <text x="20" y="26" text-anchor="middle" fill="white" font-size="20" font-family="Arial">🍂</text>
                </svg>
              `),
              scaledSize: new google.maps.Size(40, 40)
            }
          })

          setMap(mapInstance)
          setIsLoaded(true)
        }
      } catch (error) {
        console.error('Error loading Google Maps:', error)
        setIsLoaded(true) // Show fallback even if map fails
      }
    }

    loadGoogleMaps()
  }, [center.lat, center.lng, zoom]) // Only re-run if center or zoom changes

  return (
    <div className="relative">
      <div 
        key="google-map"
        ref={mapRef} 
        className="w-full h-80 rounded-xl overflow-hidden shadow-lg"
        style={{ minHeight: '320px' }}
      />
      
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-4">🗺️</div>
            <p className="text-gray-600">Loading Mac's service area...</p>
          </div>
        </div>
      )}
      
      {isLoaded && (!map || !hasApiKey) && (
        <div className="absolute inset-0 bg-gradient-to-br from-leaf-green to-leaf-dark-green rounded-xl flex items-center justify-center">
          <div className="text-center text-white p-6">
            <div className="text-6xl mb-4">🏠</div>
            <h4 className="text-2xl font-bold mb-2">Richwood Circle Area</h4>
            <p className="text-lg">Cincinnati, OH 45208</p>
            <div className="mt-4 text-sm">
              <p>📍 2 blocks radius coverage</p>
              <p>🍂 Professional leaf service</p>
              <p>😊 Kid-friendly & fun!</p>
            </div>
            {!hasApiKey && (
              <div className="mt-4 p-3 bg-white/20 rounded-lg">
                <p className="text-sm">
                  💡 Add a Google Maps API key to see the interactive map!
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
