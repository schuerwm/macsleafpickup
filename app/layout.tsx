import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Mac's Leaf Service - Professional Leaf Raking for Kids!",
  description: 'The cutest and most professional leaf raking service in Cincinnati! Mac specializes in making yards beautiful with fun, kid-friendly service.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-leaf-green to-leaf-dark-green min-h-screen">
        {children}
      </body>
    </html>
  )
}
