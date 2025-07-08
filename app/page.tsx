"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Instagram, Mail, ArrowDown } from "lucide-react"

export default function ArtistPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [showDescription, setShowDescription] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{x: number, y: number} | null>(null);
  const [offset, setOffset] = useState<{x: number, y: number}>({x: 0, y: 0});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (selectedImageIndex !== null) {
      setShowDescription(false);
      setZoom(1);
    }
  }, [selectedImageIndex])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string
    const inquiryType = formData.get("inquiryType") as string

    // Basic validation
    if (!name || !email || !message) {
      alert("Please fill in all required fields.")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.")
      return
    }

    // Construct mailto link
    const mailto = `mailto:anita.gattei@gmail.com?subject=${encodeURIComponent(subject || inquiryType)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nType of Inquiry: ${inquiryType}\n\n${message}`
    )}`
    window.location.href = mailto
  }

  const basePath = '/art-portfolio';

const artworks = [
    {
      id: 3,
      title: "Recognition",
      medium: "Oil on Canvas",
      year: "2018",
      dimensions: "50 × 50 cm",
      image:  `${basePath}/images/recognition.jpg`,
      description: "Recognition, Oil on Canvas, 2018.",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
    {
      id: 2,
      title: "Amore e Psiche",
      medium: "Watercolor on Paper",
      year: "2022",
      dimensions: "20 × 15 cm",
      image: `${basePath}/images/amore-psiche.png`,
      description: "Watercolour on paper, 2022.",
      gridSpan: "md:col-span-1 md:row-span-2",
    },
    {
      id: 1,
      title: "Liquid Dreams",
      medium: "Oil on Canvas",
      year: "2019",
      dimensions: "60 × 40 cm",
      image: `${basePath}/images/liquid.jpg`,
      description:
        "Liquid Dreams, Oil on Canvas, 2019.",
      gridSpan: "md:col-span-2 md:row-span-2",
    },
    {
      id: 4,
      title: "Diving",
      medium: "Watercolour on Paper",
      year: "2025",
      dimensions: "20 × 25 cm",
      image: `${basePath}/images/diving.jpeg`,
      description: " Diving, Watercolour on Paper, 2025.",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
    {
      id: 5,
      title: "Halo",
      medium: "Oil on Canvas",
      year: "2020",
      dimensions: "50 × 40 cm",
      image:  `${basePath}/images/halo.jpg`,
      description: "Halo, Oil on Canvas, 2019.",
      gridSpan: "md:col-span-1 md:row-span-2",
    },
    {
      id: 6,
      title: "Depths",
      medium: "Oil on Canvas",
      year: "2025",
      dimensions: "40 × 30 cm",
      image:  `${basePath}/images/depths_copia.png`,
      description: "Depths, Oil on Canvas, 2025.",
      gridSpan: "md:col-span-2 md:row-span-1",
    },
    {
      id: 7,
      title: "Emotional Landscapes",
      medium: "Mixed Media",
      year: "2021",
      dimensions: "30 × 15 cm",
      image:  `${basePath}/images/venere.jpg`,
      description: "Emotional Landscapes, Mixed Media, 2021.",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
    {
      id: 8,
      title: "June",
      medium: "Mixed Media",
      year: "2021",
      dimensions: "30 × 15 cm",
      image:  `${basePath}/images/june.jpg`,
      description: "June, Mixed Media, 2021.",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
  // Add more artworks as needed
  { id: 9, 
    title: "Kernel", 
    medium: "Oil on Canvas", 
    year: "2019", 
    dimensions: "40 × 50 cm", 
    image: `${basePath}/images/kernel.jpg`, 
    description: "Kernel, Oil on Canvas, 2019.", 
    gridSpan: "md:col-span-1 md:row-span-1"},

    { id: 10,
    title: "Birth of the Cosmos",
    medium: "Oil on Canvas",
    year: "2020",
    dimensions: "30 × 40 cm",
    image: `${basePath}/images/birthofcosmos.jpg`,
    description: "Birth of the Cosmos, Oil on Canvas, 2020.",
    gridSpan: "md:col-span-1 md:row-span-1"
    },
  ]


  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setSelectedImageIndex(prev =>
          prev === 0 ? artworks.length - 1 : (prev ?? 0) - 1
        );
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex(prev =>
          prev === artworks.length - 1 ? 0 : (prev ?? 0) + 1
        );
      } else if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "+" || e.key === "=") {
        setZoom(z => Math.min(3, z + 0.2));
      } else if (e.key === "-" || e.key === "_") {
        setZoom(z => Math.max(1, z - 0.2));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom === 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setOffset({
      x: e.clientX - (dragStart?.x ?? 0),
      y: e.clientY - (dragStart?.y ?? 0),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    // Reset zoom and pan when modal closes or image changes
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  }, [selectedImageIndex]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-light tracking-wide">
            Anita <span className="font-medium">Gattei</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#gallery" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors font-display">
              Gallery
            </Link>
            <Link href="#about" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors font-display">
              About
            </Link>
            {/* <Link
              href="#exhibitions"
              className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors font-display"
            >
              Exhibitions
            </Link> */}
            <Link href="#contact" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors font-display">
              Contact
            </Link>
          </div>

          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
            <Link href="#gallery" className="block text-sm uppercase tracking-wider font-display">
              Gallery
            </Link>
            <Link href="#about" className="block text-sm uppercase tracking-wider font-display">
              About
            </Link>
            {/* <Link href="#exhibitions" className="block text-sm uppercase tracking-wider font-display">
              Exhibitions
            </Link> */}
            <Link href="#contact" className="block text-sm uppercase tracking-wider font-display">
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a1931]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${basePath}/images/depths_copia.png')`,
            opacity: 0.9, // High opacity for minimalism
            filter: 'grayscale(60%)',
          }}
        />
        <div className="absolute inset-0 bg-[#0a1931]/80" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-4 text-white tracking-tight drop-shadow-lg" style={{letterSpacing: '0.01em'}}>
            Anita Gattei
          </h1>
          <h2 className="text-2xl md:text-4xl font-display font-light mb-8 text-[#bfc9d9] tracking-wide uppercase" style={{letterSpacing: '0.2em'}}>
            Contemporary Visual Art
          </h2>
          <p className="text-lg md:text-xl font-display text-white/80 mb-12 max-w-2xl mx-auto">
             Natural elements echoing through colourful dreams.
          </p>
          <Link href="/extended-gallery">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#0a1931] transition-all duration-300 bg-transparent font-display tracking-wider"
            >
              View Portfolio
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-8 right-8 text-[#bfc9d9] text-sm tracking-wider">
          <div className="flex items-center space-x-2">
            <ArrowDown className="w-4 h-4" />
            <span>Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* Gallery Section - Masonry Layout */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display italic mb-6">Selected Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-display">
              A curated selection of paintings and mixed media works exploring themes of movement, emotion, and the
              relationship between abstract and figurative expression.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
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

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50 relative overflow-hidden">
        {/* Background image with opacity and filter */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: `url('${basePath}/images/diving.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4, // Adjust for desired opacity
            filter: 'grayscale(50%)',
          }}
        />
        {/* White overlay for additional effect */}
        <div className="absolute inset-0 w-full h-full z-10" style={{ background: 'rgba(255,255,255,0.5)' }} />
        <div className="max-w-6xl mx-auto relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display italic mb-8" style={{ color: "#0a1931" }}>About the Artist</h2>
                <div className="space-y-6 text-lg text-gray-800 leading-relaxed font-display font-light">
                <p className="text-justify">
                  My work explores the dynamic relationship between
                  colour, form, and emotional expression. Working primarily in oil, watercolours, and mixed media,
                  my paintings attempt to capture the fluid nature of human experience through abstract and semi-figurative
                  compositions.
                </p>
                <p className="text-justify">
                  I don't shy away from using bold color palettes and organic flowing forms, to dive into a deep exploration of the
                  psychological aspects of visual perception.
                </p>
              </div>

              {/* <div className="mt-8 space-y-4">
                <h3 className="text-xl font-medium font-display">Education</h3>
                <div className="text-gray-600 space-y-2 font-display">
                  <p>...</p>
                  <p>...</p>
                </div>
              </div> */}
            </div> 

            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                <Image
                  src={`${basePath}/images/DSC01937_copia.JPG`}
                  alt="studio"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-4 bold">Anita, 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibitions Section */}
      {/* 
      <section id="exhibitions" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light italic mb-12 text-center">Recent Exhibitions</h2>

          <div className="space-y-8">
        <div className="border-b border-gray-200 pb-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
          <h3 className="text-xl font-medium mb-2">Fluid Expressions</h3>
          <p className="text-gray-600 mb-2">Galleria Moderna, Milan</p>
          <p className="text-gray-500">Solo Exhibition</p>
            </div>
            <span className="text-gray-500 mt-2 md:mt-0">2024</span>
          </div>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
          <h3 className="text-xl font-medium mb-2">Contemporary Voices</h3>
          <p className="text-gray-600 mb-2">Palazzo delle Esposizioni, Rome</p>
          <p className="text-gray-500">Group Exhibition</p>
            </div>
            <span className="text-gray-500 mt-2 md:mt-0">2023</span>
          </div>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
          <h3 className="text-xl font-medium mb-2">Color and Form</h3>
          <p className="text-gray-600 mb-2">Arte Contemporanea, Florence</p>
          <p className="text-gray-500">Solo Exhibition</p>
            </div>
            <span className="text-gray-500 mt-2 md:mt-0">2023</span>
          </div>
        </div>
          </div>
        </div>
      </section>
      */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display italic mb-8">Get in Touch</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-display">
              For inquiries about available works, commissions, or exhibition opportunities, please don't hesitate to
              reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light mb-6 font-display">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:elena@elenarossi.art"
                    className="flex items-center space-x-3 text-lg hover:text-gray-300 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>anita.gattei@gmail.com</span>
                  </a>
                  <a
                    href="https://instagram.com/indianinkk"
                    className="flex items-center space-x-3 text-lg hover:text-gray-300 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>indianinkk</span>
                  </a>
                </div>
              </div>

              {/* <div>
                <h3 className="text-2xl font-light mb-4 font-display">Studio Location</h3>
                <p className="text-gray-300 leading-relaxed">
                  Italy
                  <br />
                  Studio visits by appointment only
                </p>
              </div> */}

              <div>
                <h3 className="text-2xl font-light mb-4 font-display">Commission Process</h3>
                <p className="text-gray-300 leading-relaxed">
                  I welcome commission inquiries for original paintings and mixed media works. Each piece is created in
                  close collaboration with the client to ensure a meaningful and personal artistic experience.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-lg relative overflow-hidden">
              {/* Background image for the contact form */}
              <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
              style={{
                backgroundImage: `url('${basePath}/images/depths.jpg')`,
                opacity: 0.15,
                filter: 'grayscale(60%)',
                zIndex: 0,
              }}
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-light mb-6 font-display">Send a Message</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-300 mb-2">
                      Type of Inquiry
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Commission Request">Commission Request</option>
                      <option value="Purchase Inquiry">Purchase Inquiry</option>
                      <option value="Exhibition Opportunity">Exhibition Opportunity</option>
                      <option value="Press/Media">Press/Media</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                      placeholder="Brief subject line"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-vertical"
                      placeholder="Please describe your inquiry in detail. For commissions, include preferred size, style, timeline, and budget range."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-white text-gray-900 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed py-3 text-lg font-medium"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black text-white text-center font-display">
        <p className="text-sm text-gray-400">© 2025 Anita Gattei. All rights reserved.</p>
      </footer>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 w-full h-full"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Exit Button */}
            <button
              onClick={e => {
                e.stopPropagation();
                setSelectedImageIndex(null);
              }}
              className="absolute top-6 right-6 text-white text-3xl px-3 py-1 bg-black/60 rounded-full hover:bg-black/90 z-20"
              aria-label="Close"
            >
              &times;
            </button>
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
            <div className="relative w-full h-full flex items-center justify-center"
              style={{ cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default" }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <Image
                src={artworks[selectedImageIndex].image || "/placeholder.svg"}
                alt={artworks[selectedImageIndex].title}
                fill
                sizes="100vw"
                className="object-contain max-w-full max-h-full transition-transform duration-300"
                style={{
                  transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${offset.y / zoom}px)`,
                  transition: isDragging ? "none" : "transform 0.3s",
                  cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default",
                }}
                priority
                onClick={e => e.stopPropagation()}
                draggable={false}
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
            {/* Close Button */}
          </div>
        </div>
      )}
    </div>
  )
}
