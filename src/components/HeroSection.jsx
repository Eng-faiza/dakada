"use client"

import { useState, useEffect } from "react"

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    {
      url: "/pic/cups.jpeg",
      title: "Victory Celebration",
    },
    {
      url: "/pic/fns1.jpeg",
      title: "Game Action",
    },
    {
      url: "/pic/fns2.jpeg",
      title: "Championship Glory",
    },
    {
      url: "/pic/team2.jpeg",
      title: "Fan Support",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1))
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(25, 54, 97, 0.9) 0%, rgba(39, 117, 182, 0.7) 50%, rgba(25, 54, 97, 0.8) 100%), url('${image.url}')`,
          }}
        />
      ))}

      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-light/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-red-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-500"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="mb-4">
          <span className="inline-block bg-red-600/90 text-white px-4 py-2 rounded-full text-sm font-lexend font-medium tracking-wide uppercase">
            Champions in  2025
          </span>
        </div>

        <h1 className="font-krub font-bold text-6xl md:text-8xl lg:text-9xl text-white mb-6 text-balance leading-tight">
          Win the
          <span className="block bg-gradient-to-r from-primary-light to-white bg-clip-text text-transparent">
            Championship
          </span>
        </h1>

        <p className="font-lexend text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 text-pretty max-w-4xl mx-auto leading-relaxed">
          Join the legacy of champions. Experience the passion, skill, and dedication that defines
          <span className="text-primary-light font-semibold"> Dekedda Sports Club</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative bg-red-600 hover:bg-red-700 text-white font-lexend font-semibold px-10 py-5 rounded-xl transition-all duration-300 text-lg shadow-2xl hover:shadow-red-500/25 hover:scale-105">
            <span className="relative z-10">Join the Team</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-lexend font-semibold px-10 py-5 rounded-xl transition-all duration-300 text-lg border border-white/20 hover:border-white/40 hover:scale-105">
            Watch Highlights
            <svg
              className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z"
              />
            </svg>
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-krub font-bold text-white mb-2">25+</div>
            <div className="text-gray-300 font-lexend text-sm uppercase tracking-wide">Years Legacy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-krub font-bold text-primary-light mb-2">150+</div>
            <div className="text-gray-300 font-lexend text-sm uppercase tracking-wide">Victories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-krub font-bold text-white mb-2">50K+</div>
            <div className="text-gray-300 font-lexend text-sm uppercase tracking-wide">Fans</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-white/60 font-lexend text-xs mb-2 uppercase tracking-wide">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
