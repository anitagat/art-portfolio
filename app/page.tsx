"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Instagram, Mail, ArrowDown } from "lucide-react"
import { submitContactForm } from "./actions/contact"
import { useActionState } from "react"

export default function ArtistPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [contactState, contactAction, isContactPending] = useActionState(submitContactForm, null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const artworks = [
    {
      id: 1,
      title: "Liquid Dreams",
      medium: "Acrylic on Canvas",
      year: "2024",
      dimensions: "60 × 80 cm",
      image: "/images/liquid.jpg",
      description:
        "An exploration of fluid movement and vibrant color interactions, capturing the essence of liquid motion in static form.",
      gridSpan: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      title: "Amore e Psiche",
      medium: "Watercolor on Paper",
      year: "2024",
      dimensions: "40 × 50 cm",
      image: "/images/amore-psiche.png",
      description: "A watercolor interpretation of classical themes, blending natural forms with emotional expression.",
      gridSpan: "md:col-span-1 md:row-span-2",
    },
    {
      id: 3,
      title: "Urban Rhythms",
      medium: "Mixed Media",
      year: "2023",
      dimensions: "70 × 100 cm",
      image: "/placeholder.svg?height=600&width=800",
      description: "Contemporary urban life captured through dynamic brushstrokes and bold color choices.",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
    {
      id: 4,
      title: "Botanical Studies",
      medium: "Oil on Canvas",
      year: "2023",
      dimensions: "30 × 40 cm",
      image: "/placeholder.svg?height=400&width=300",
      description: "Intimate studies of natural forms, exploring the relationship between color and organic structure.",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
    {
      id: 5,
      title: "Abstract Conversations",
      medium: "Acrylic on Canvas",
      year: "2024",
      dimensions: "50 × 70 cm",
      image: "/placeholder.svg?height=700&width=500",
      description: "A dialogue between form and color, exploring the boundaries of abstract expression.",
      gridSpan: "md:col-span-1 md:row-span-2",
    },
    {
      id: 6,
      title: "Color Symphony",
      medium: "Mixed Media",
      year: "2023",
      dimensions: "80 × 120 cm",
      image: "/placeholder.svg?height=600&width=900",
      description: "A large-scale exploration of color relationships and compositional harmony.",
      gridSpan: "md:col-span-2 md:row-span-1",
    },
    {
      id: 7,
      title: "Emotional Landscapes",
      medium: "Watercolor",
      year: "2024",
      dimensions: "35 × 50 cm",
      image: "/placeholder.svg?height=500&width=350",
      description: "Landscapes that reflect internal emotional states through color and form.",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
    {
      id: 8,
      title: "Geometric Dreams",
      medium: "Acrylic on Canvas",
      year: "2023",
      dimensions: "60 × 60 cm",
      image: "/placeholder.svg?height=600&width=600",
      description: "Exploring the intersection of geometric precision and organic flow.",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-light tracking-wide">
            Elena<span className="font-medium">Rossi</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#gallery" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors">
              Gallery
            </Link>
            <Link href="#about" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link
              href="#exhibitions"
              className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors"
            >
              Exhibitions
            </Link>
            <Link href="#contact" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors">
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
            <Link href="#gallery" className="block text-sm uppercase tracking-wider">
              Gallery
            </Link>
            <Link href="#about" className="block text-sm uppercase tracking-wider">
              About
            </Link>
            <Link href="#exhibitions" className="block text-sm uppercase tracking-wider">
              Exhibitions
            </Link>
            <Link href="#contact" className="block text-sm uppercase tracking-wider">
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/liquid.jpg')`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div className="absolute inset-0 bg-white/60" />

        <div className="relative z-10 text-center text-gray-900 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-light italic mb-6 leading-none">Contemporary</h1>
          <h2 className="text-3xl md:text-5xl font-light mb-8 leading-none">Visual Art</h2>
          <p className="text-lg md:text-xl font-light tracking-wide mb-12 max-w-2xl mx-auto">
            Exploring the intersection of color, form, and emotion through contemporary painting and mixed media
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 bg-transparent"
          >
            View Portfolio
          </Button>
        </div>

        <div className="absolute bottom-8 right-8 text-gray-700 text-sm tracking-wider">
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
            <h2 className="text-4xl md:text-5xl font-light italic mb-6">Selected Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A curated selection of paintings and mixed media works exploring themes of movement, emotion, and the
              relationship between abstract and figurative expression.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                className={`group relative overflow-hidden cursor-pointer ${artwork.gridSpan}`}
                onClick={() => setSelectedImage(artwork.image)}
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
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light italic mb-8">About the Artist</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Elena Rossi is a contemporary visual artist whose work explores the dynamic relationship between
                  color, form, and emotional expression. Working primarily in acrylics, watercolors, and mixed media,
                  her paintings capture the fluid nature of human experience through abstract and semi-figurative
                  compositions.
                </p>
                <p>
                  Born and raised in Italy, Elena's artistic journey began with classical training in traditional
                  techniques, which she has evolved to create a distinctive contemporary voice. Her work is
                  characterized by bold color palettes, organic flowing forms, and a deep exploration of the
                  psychological aspects of visual perception.
                </p>
                <p>
                  Elena's paintings have been exhibited in galleries across Europe and North America, and her work is
                  held in private collections internationally. She continues to push the boundaries of contemporary
                  painting while maintaining a deep connection to the emotional and spiritual aspects of artistic
                  creation.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-medium">Education</h3>
                <div className="text-gray-600 space-y-2">
                  <p>MFA in Fine Arts, Accademia di Belle Arti, Florence (2018)</p>
                  <p>BA in Visual Arts, Università degli Studi, Rome (2015)</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Elena Rossi in her studio"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">Elena in her Florence studio, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibitions Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light italic mb-8">Get in Touch</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              For inquiries about available works, commissions, or exhibition opportunities, please don't hesitate to
              reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:elena@elenarossi.art"
                    className="flex items-center space-x-3 text-lg hover:text-gray-300 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>elena@elenarossi.art</span>
                  </a>
                  <a
                    href="https://instagram.com/elenarossi.art"
                    className="flex items-center space-x-3 text-lg hover:text-gray-300 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>@elenarossi.art</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-4">Studio Location</h3>
                <p className="text-gray-300 leading-relaxed">
                  Florence, Italy
                  <br />
                  Studio visits by appointment only
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-4">Commission Process</h3>
                <p className="text-gray-300 leading-relaxed">
                  I welcome commission inquiries for original paintings and mixed media works. Each piece is created in
                  close collaboration with the client to ensure a meaningful and personal artistic experience.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-light mb-6">Send a Message</h3>

              <form action={contactAction} className="space-y-6">
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
                  disabled={isContactPending}
                  className="w-full bg-white text-gray-900 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed py-3 text-lg font-medium"
                >
                  {isContactPending ? "Sending Message..." : "Send Message"}
                </Button>

                {contactState && (
                  <div
                    className={`p-4 rounded-lg ${contactState.success ? "bg-green-900/50 border border-green-700" : "bg-red-900/50 border border-red-700"}`}
                  >
                    <p className={contactState.success ? "text-green-200" : "text-red-200"}>{contactState.message}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black text-white text-center">
        <p className="text-sm text-gray-400">© 2024 Elena Rossi. All rights reserved.</p>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Artwork detail"
              width={800}
              height={600}
              className="object-contain max-w-full max-h-full"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
