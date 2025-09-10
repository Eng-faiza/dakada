"use client"

import { useState } from "react"

const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const news = [
    {
      title: "Dekedda's best Champions League matches",
      category: "HISTORY",
      date: "AN HOUR AGO",
      image: "/pic/all pl3.jpeg",
    },
    {
      title: "EFL Trophy report: Shrewsbury 3-1 Dekedda Under-21s",
      category: "U21S",
      date: "28 AUG 25",
      image: "/pic/all pl2.jpeg",
    },
    {
      title: "The ten youngest Dekedda players to assist a Premier League goal",
      category: "MEN'S TEAM",
      date: "26 AUG 25",
      image: "/pic/player3.jpeg",
    },
    {
      title: "Murray-Campbell previews EFL Trophy campaign",
      category: "VIDEO",
      date: "25 AUG 25",
      image: "/pic/2pl3.jpeg",
    },
    {
      title: "Third Kit Launch | Behind-the-Scenes",
      category: "VIDEO",
      date: "24 AUG 25",
      image: "/pic/plyers1.jpeg",
    },
    {
      title: "PL2 Highlights: Newcastle U21 0-5 Dekedda U21",
      category: "VIDEO",
      date: "23 AUG 25",
      image: "/pic/all pl.jpeg",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, news.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, news.length - 2)) % Math.max(1, news.length - 2))
  }

  return (
    <section className="py-16 bg-gradient-to-b from-black to-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-krub font-bold text-4xl text-primary-light">Latest News →</h2>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-primary-light hover:bg-blue-600 text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-primary-light hover:bg-blue-600 text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
          >
            {news.map((article, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-3">
                <div className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-[320px] object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-primary-light font-lexend font-semibold text-sm">{article.category}</span>
                      <span className="text-gray-500 font-lexend text-sm">{article.date}</span>
                    </div>
                    <h3 className="font-krub font-semibold text-gray-900 text-lg leading-tight text-balance">
                      {article.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
