"use client"

import { useState } from "react"
import { Search, Filter, Trophy, Users, Calendar, MapPin, Ruler, Scale } from "lucide-react"

const Players = () => {
  const [selectedPosition, setSelectedPosition] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPlayer, setSelectedPlayer] = useState(null)

  const positions = ["All", "Goalkeeper", "Defender", "Midfielder", "Forward"]

  const players = [
    {
      id: 1,
      name: "mohamed omar ",
      position: "Forward",
      number: 10,
      age: 26,
      height: "6'1\"",
      weight: "175 lbs",
      nationality: "Spain",
      image: "/pic/player1.jpeg",
      stats: {
        goals: 24,
        assists: 12,
        matches: 35,
        yellowCards: 3,
        redCards: 0,
        minutesPlayed: 2890,
      },
      careerHighlights: ["Top scorer 2023 season", "Player of the Month - March 2024", "Hat-trick vs City Rivals"],
      joinedDate: "2022-07-15",
      contract: "2026-06-30",
    },
    {
      id: 2,
      name: "hassan ali",
      position: "Goalkeeper",
      number: 1,
      age: 29,
      height: "6'4\"",
      weight: "190 lbs",
      nationality: "Somali",
      image: "/pic/player2.jpeg",
      stats: {
        saves: 89,
        cleanSheets: 18,
        matches: 32,
        yellowCards: 2,
        redCards: 0,
        minutesPlayed: 2880,
      },
      careerHighlights: [
        "Golden Glove Award 2023",
        "Record 8 consecutive clean sheets",
        "Penalty save in championship final",
      ],
      joinedDate: "2021-08-01",
      contract: "2025-07-31",
    },
    {
      id: 3,
      name: "omar ali",
      position: "Midfielder",
      number: 8,
      age: 24,
      height: "5'7\"",
      weight: "140 lbs",
      nationality: "Somali",
      image: "/pic/player3.jpeg",
      stats: {
        goals: 8,
        assists: 19,
        matches: 33,
        yellowCards: 4,
        redCards: 0,
        minutesPlayed: 2650,
      },
      careerHighlights: ["Most assists in league 2023", "International debut at 22", "Championship winning goal"],
      joinedDate: "2023-01-10",
      contract: "2027-01-09",
    },
    {
      id: 4,
      name: "ali ahmed",
      position: "Defender",
      number: 4,
      age: 31,
      height: "6'2\"",
      weight: "185 lbs",
      nationality: "Somali",
      image: "/pic/player4.jpeg",
      stats: {
        goals: 3,
        assists: 5,
        matches: 34,
        yellowCards: 8,
        redCards: 1,
        minutesPlayed: 2950,
      },
      careerHighlights: ["Team captain since 2022", "Defender of the Year 2023", "200+ career appearances"],
      joinedDate: "2020-06-01",
      contract: "2025-05-31",
    },
    {
      id: 5,
      name: "adan omar",
      position: "Midfielder",
      number: 7,
      age: 23,
      height: "5'9\"",
      weight: "160 lbs",
      nationality: "Somali",
      image: "/pic/player5.jpeg",
      stats: {
        goals: 12,
        assists: 15,
        matches: 31,
        yellowCards: 2,
        redCards: 0,
        minutesPlayed: 2400,
      },
      careerHighlights: ["Rising Star Award 2024", "Youngest player to score 10+ goals", "Olympic team selection"],
      joinedDate: "2023-07-20",
      contract: "2028-07-19",
    },
    {
      id: 6,
      name: "hassan ali",
      position: "Forward",
      number: 11,
      age: 27,
      height: "5'6\"",
      weight: "135 lbs",
      nationality: "Somali",
      image: "/pic/player6.jpeg",
      stats: {
        goals: 18,
        assists: 8,
        matches: 29,
        yellowCards: 1,
        redCards: 0,
        minutesPlayed: 2200,
      },
      careerHighlights: ["World Cup finalist 2023", "League top scorer 2022", "50+ career goals"],
      joinedDate: "2022-01-15",
      contract: "2026-01-14",
    },
  ]

  const filteredPlayers = players.filter((player) => {
    const matchesPosition = selectedPosition === "All" || player.position === selectedPosition
    const matchesSearch =
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.position.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesPosition && matchesSearch
  })

  const PlayerModal = ({ player, onClose }) => (
    <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-900 hover:text-blue-600 transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-80 h-96 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={player.image || "/placeholder.svg"}
                    alt={player.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-krub font-bold mx-auto mb-4">
                  {player.number}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="font-krub font-bold text-4xl text-gray-900 mb-2">{player.name}</h2>
                  <p className="font-lexend text-xl text-blue-600 mb-4">{player.position}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="font-lexend text-sm text-gray-600">Age</span>
                    </div>
                    <span className="font-krub font-bold text-gray-900">{player.age}</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Ruler className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="font-lexend text-sm text-gray-600">Height</span>
                    </div>
                    <span className="font-krub font-bold text-gray-900">{player.height}</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Scale className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="font-lexend text-sm text-gray-600">Weight</span>
                    </div>
                    <span className="font-krub font-bold text-gray-900">{player.weight}</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="font-lexend text-sm text-gray-600">Nationality</span>
                    </div>
                    <span className="font-krub font-bold text-gray-900">{player.nationality}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-krub font-bold text-xl text-gray-900 mb-4">Season Stats</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-krub font-bold text-blue-600">{player.stats.goals}</div>
                      <div className="font-lexend text-sm text-gray-600">Goals</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-krub font-bold text-blue-600">{player.stats.assists}</div>
                      <div className="font-lexend text-sm text-gray-600">Assists</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-krub font-bold text-blue-600">{player.stats.matches}</div>
                      <div className="font-lexend text-sm text-gray-600">Matches</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-krub font-bold text-xl text-gray-900 mb-4">Career Highlights</h3>
                  <ul className="space-y-2">
                    {player.careerHighlights.map((highlight, index) => (
                      <li key={index} className="flex items-center font-lexend text-gray-700">
                        <Trophy className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-krub font-bold text-6xl md:text-8xl text-primary-foreground mb-6 text-balance">
            Our Players
          </h1>
          <p className="font-lexend text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-4xl mx-auto text-balance">
            Meet the talented athletes who represent Dekedda Sports Club with passion, skill, and dedication on the
            field.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search players..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg font-lexend text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <div className="flex gap-2">
                {positions.map((position) => (
                  <button
                    key={position}
                    onClick={() => setSelectedPosition(position)}
                    className={`px-4 py-2 rounded-lg font-lexend font-medium transition-colors ${
                      selectedPosition === position
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                    }`}
                  >
                    {position}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlayers.map((player) => (
              <div
                key={player.id}
                onClick={() => setSelectedPlayer(player)}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative">
                  <div className="h-80 bg-gray-100">
                    <img
                      src={player.image || "/placeholder.svg"}
                      alt={player.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-krub font-bold text-lg">
                    {player.number}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-gray-900/80 text-white px-3 py-1 rounded-full font-lexend text-sm">
                    {player.position}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-krub font-bold text-2xl text-gray-900 mb-2">{player.name}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="font-lexend text-sm">{player.nationality}</span>
                    <span className="mx-2">•</span>
                    <span className="font-lexend text-sm">{player.age} years</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-xl font-krub font-bold text-blue-600">{player.stats.goals}</div>
                      <div className="font-lexend text-xs text-gray-600">Goals</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-krub font-bold text-blue-600">{player.stats.assists}</div>
                      <div className="font-lexend text-xs text-gray-600">Assists</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-krub font-bold text-blue-600">{player.stats.matches}</div>
                      <div className="font-lexend text-xs text-gray-600">Matches</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="font-lexend text-sm">Since {new Date(player.joinedDate).getFullYear()}</span>
                    </div>
                    <button className="bg-blue-600 text-white font-lexend font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPlayers.length === 0 && (
            <div className="text-center py-16">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="font-krub font-bold text-2xl text-gray-900 mb-2">No Players Found</h3>
              <p className="font-lexend text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Player Modal */}
      {selectedPlayer && <PlayerModal player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />}
    </div>
  )
}

export default Players
