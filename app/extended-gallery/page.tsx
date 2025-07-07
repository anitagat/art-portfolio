"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const basePath = '/art-portfolio';

const artworks = [
    {
      id: 1,
      title: "Liquid Dreams",
      medium: "Oil on Canvas",
      year: "2019",
      dimensions: "60 × 80 cm",
      image: `${basePath}/images/liquid.jpg`,
      description:
        "An exploration of fluid movement and vibrant color interactions, capturing the essence of liquid motion in static form.",
      gridSpan: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      title: "Amore e Psiche",
      medium: "Watercolor on Paper",
      year: "2022",
      dimensions: "40 × 50 cm",
      image: `${basePath}/images/amore-psiche.png`,
      description: "A watercolor interpretation of classical themes, blending natural forms with emotional expression.",
      gridSpan: "md:col-span-1 md:row-span-2",
    },
    {
      id: 3,
      title: "Recognition",
      medium: "Oil on Canvas",
      year: "2018",
      dimensions: "50 × 50 cm",
      image:  `${basePath}/images/recognition.jpg`,
      description: "Colorfoul and dynamic brushstrokes.",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
    {
      id: 4,
      title: "Botanical Studies",
      medium: "Oil on Canvas",
      year: "2019",
      dimensions: "20 × 15 cm",
      image: `${basePath}/images/sicily.jpg`,
      description: "Intimate studies of natural forms, exploring the relationship between color and organic structure.",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
    {
      id: 5,
      title: "Birth of the Cosmos",
      medium: "Oil on Canvas",
      year: "2020",
      dimensions: "50 × 40 cm",
      image:  `${basePath}/images/birthofcosmos.jpg`,
      description: "A dialogue between form and color, exploring the boundaries of abstract expression.",
      gridSpan: "md:col-span-1 md:row-span-2",
    },
    {
      id: 6,
      title: "Halo",
      medium: "Oil on Canvas",
      year: "2019",
      dimensions: "40 × 50 cm",
      image:  `${basePath}/images/halo.jpg`,
      description: "An exploration of color relationships and compositional harmony.",
      gridSpan: "md:col-span-2 md:row-span-1",
    },
    {
      id: 7,
      title: "Emotional Landscapes",
      medium: "Mixed Media",
      year: "2021",
      dimensions: "30 × 15 cm",
      image:  `${basePath}/images/venere.jpg`,
      description: "Landscapes that reflect internal emotional states through color and form.",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
    {
      id: 8,
      title: "June",
      medium: "Mixed Media",
      year: "2021",
      dimensions: "30 × 15 cm",
      image:  `${basePath}/images/june.jpg`,
      description: "Exploring the intersection of geometric precision and organic flow.",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
  // Add more artworks as needed
  { id: 9, 
    title: "Kernel", 
    medium: "Oil on Canvas", 
    year: "2019", 
    dimensions: "40 × 40 cm", 
    image: `${basePath}/images/kernel.jpg`, 
    description: "Study of abstract forms and textures.", 
    gridSpan: "md:col-span-1 md:row-span-1"},
    { id: 10,
    title: "Dendron",
    medium: "Oil on Canvas",
    year: "2024",
    dimensions: "60 × 50 cm",
    image: `${basePath}/images/dendron.jpg`,
    description: "Oil painting capturing the essence of light and shadow.",
    gridSpan: "md:col-span-1 md:row-span-1"
    },
  ]

export default function ExtendedGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [showDescription, setShowDescription] = useState(false);
  const [zoom, setZoom] = useState(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-light tracking-wide">
            Anita <span className="font-medium">Gattei</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors font-display">
              Home
            </Link>
            <Link href="/extended-gallery" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors font-display">
              Extended Gallery
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-[#0a1931] mt-16">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('${basePath}/images/liquid.jpg')`, opacity: 0.7, filter: 'grayscale(60%)'}} />
        <div className="absolute inset-0 bg-[#0a1931]/80" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 text-white tracking-tight drop-shadow-lg" style={{letterSpacing: '0.01em'}}>
            Extended Gallery
          </h1>
          <p className="text-lg md:text-xl font-display text-white/80 mb-6 max-w-2xl mx-auto">
            Upload and showcase more of your works here.
          </p>
        </div>
      </section>

      {/* Gallery Section - Masonry Layout */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display italic mb-6">Your Extended Collection</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-display">
              Add more artworks to your portfolio. Use the grid below to upload and display new pieces.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {artworks.length === 0 && (
              <div className="col-span-full text-center text-gray-400 py-20 font-display text-xl">
                No artworks yet. Start uploading your images!
              </div>
            )}
            {artworks.map((artwork, idx) => (
              <div
                key={artwork.id}
                className={`group relative overflow-hidden cursor-pointer ${artwork.gridSpan}`}
                onClick={() => setSelectedImageIndex(idx)}
              >
                <Image
                  src={artwork.image || "/placeholder.svg"}
                  alt={artwork.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <h3 className="text-lg font-medium mb-1">{artwork.title}</h3>
                    <p className="text-sm opacity-90">
                      {artwork.medium}, {artwork.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 w-full h-full"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={e => {
                e.stopPropagation();
                setSelectedImageIndex((prev) => prev === 0 ? artworks.length - 1 : (prev ?? 0) - 1)
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl px-2 py-1 bg-black/40 rounded-full hover:bg-black/70 z-10"
              aria-label="Previous artwork"
            >
              &#8592;
            </button>
            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={artworks[selectedImageIndex].image || "/placeholder.svg"}
                alt={artworks[selectedImageIndex].title}
                fill
                sizes="100vw"
                className="object-contain max-w-full max-h-full transition-transform duration-300"
                style={{ transform: `scale(${zoom})` }}
                priority
                onClick={e => e.stopPropagation()}
              />
              {/* Zoom Controls */}
              <div className="absolute top-6 right-1/2 translate-x-1/2 flex gap-2 z-20">
                <button
                  className="bg-black/60 text-white rounded px-3 py-1 text-lg hover:bg-black/80"
                  onClick={e => { e.stopPropagation(); setZoom(z => Math.max(1, z - 0.2)); }}
                  aria-label="Zoom out"
                >
                  -
                </button>
                <button
                  className="bg-black/60 text-white rounded px-3 py-1 text-lg hover:bg-black/80"
                  onClick={e => { e.stopPropagation(); setZoom(z => Math.min(3, z + 0.2)); }}
                  aria-label="Zoom in"
                >
                  +
                </button>
              </div>
              {/* Description hover area */}
              <div
                className="absolute bottom-0 left-0 w-full h-20 cursor-pointer z-10"
                onMouseEnter={() => setShowDescription(true)}
                onMouseLeave={() => setShowDescription(false)}
                onClick={e => e.stopPropagation()}
              >
                <div
                  className={`w-full h-full flex justify-center items-end p-6 transition-opacity duration-300 ${showDescription ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 18, background: 'rgba(0,0,0,0.7)', color: 'white' }}
                >
                  {artworks[selectedImageIndex].description}
                </div>
              </div>
            </div>
            {/* Right Arrow */}
            <button
              onClick={e => {
                e.stopPropagation();
                setSelectedImageIndex((prev) => prev === artworks.length - 1 ? 0 : (prev ?? 0) + 1)
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl px-2 py-1 bg-black/40 rounded-full hover:bg-black/70 z-10"
              aria-label="Next artwork"
            >
              &#8594;
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 px-6 bg-black text-white text-center font-display mt-12">
        <p className="text-sm text-gray-400">© 2025 Anita Gattei. All rights reserved.</p>
      </footer>
    </div>
  )
}
