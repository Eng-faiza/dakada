"use client"

import { useState } from "react"

const PlayersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const players = [
    { name: "mohamed omar ", position: "Forward", number: "10", image: "/pic/player1.jpeg" },
    {
      name: "hassan ali ",
      position: "Winger",
      number: "19",
      image: "/pic/player2.jpeg",
    },
    { name: "omar ali", position: "Defender", number: "3", image: "/pic/player3.jpeg" },
    {
      name: "ahmed haji",
      position: "Midfielder",
      number: "11",
      image: "/pic/player4.jpeg",
    },
    { name: "ali ahmed", position: "Forward", number: "9", image: "/pic/player5.jpeg" },
    {
      name: "adan omar",
      position: "Midfielder",
      number: "21",
      image: "/pic/player6.jpeg",
    },
    { name: "hassan ali", position: "Defender", number: "23", image: "/pic/player7.jpeg" },
    { name: "yaxye", position: "Forward", number: "7", image: "/pic/1pl.jpeg" },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, players.length - 4))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, players.length - 4)) % Math.max(1, players.length - 4))
  }

  return (
    <section className="py-16 bg-gradient-to-b from-primary-dark to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-krub font-bold text-4xl text-white">PLAYERS</h2>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-primary-light/20 hover:bg-primary-light/40 text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-primary-light/20 hover:bg-primary-light/40 text-white transition-colors"
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
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {players.map((player, index) => (
              <div key={index} className="w-1/4 flex-shrink-0 px-2">
                <div className="bg-gradient-to-b from-primary-light to-red-600 rounded-lg p-6 text-center hover:scale-105 transition-transform duration-200">
                  <img
                    src={player.image || "/placeholder.svg"}
                    alt={player.name}
                    className="w-full h-60 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-krub font-bold text-white text-lg mb-1">{player.name}</h3>
                  <p className="font-lexend text-gray-200 text-sm mb-2">{player.position}</p>
                  <div className="text-2xl font-bold text-white">{player.number}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlayersSection
