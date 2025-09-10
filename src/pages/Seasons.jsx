"use client"

import { useState } from "react"
import { Calendar, Trophy, Target, TrendingUp, MapPin } from "lucide-react"

const Seasons = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  const [selectedYear] = useState(new Date().getFullYear())

  const currentSeason = {
    name: "2025/26 Season",
    matchesPlayed: 15,
    wins: 10,
    draws: 3,
    losses: 2,
    goalsFor: 28,
    goalsAgainst: 12,
    points: 33,
    position: 2,
  }

  const upcomingFixtures = [
    {
      id: 1,
      date: "2025-09-01",
      time: "15:00",
      opponent: "Valencia CF",
      venue: "Home",
      competition: "La Liga",
      isHome: true,
    },
    {
      id: 2,
      date: "2025-09-08",
      time: "20:00",
      opponent: "Real Madrid",
      venue: "Santiago Bernabéu",
      competition: "La Liga",
      isHome: false,
    },
    {
      id: 3,
      date: "2025-09-15",
      time: "18:30",
      opponent: "Atletico Madrid",
      venue: "Home",
      competition: "Copa del Rey",
      isHome: true,
    },
    {
      id: 4,
      date: "2025-09-22",
      time: "16:00",
      opponent: "Sevilla FC",
      venue: "Ramón Sánchez Pizjuán",
      competition: "La Liga",
      isHome: false,
    },
  ]

  const recentResults = [
    {
      id: 1,
      date: "2025-08-25",
      opponent: "Barcelona",
      score: "2-1",
      result: "W",
      venue: "Home",
      competition: "La Liga",
    },
    {
      id: 2,
      date: "2025-08-18",
      opponent: "Villarreal",
      score: "1-1",
      result: "D",
      venue: "Away",
      competition: "La Liga",
    },
    {
      id: 3,
      date: "2025-08-11",
      opponent: "Athletic Bilbao",
      score: "3-0",
      result: "W",
      venue: "Home",
      competition: "La Liga",
    },
    {
      id: 4,
      date: "2025-08-04",
      opponent: "Real Sociedad",
      score: "0-2",
      result: "L",
      venue: "Away",
      competition: "La Liga",
    },
  ]

  const leagueStandings = [
    { position: 1, team: "Real Madrid", played: 15, wins: 12, draws: 2, losses: 1, gf: 35, ga: 8, gd: 27, points: 38 },
    {
      position: 2,
      team: "Dekedda Sports Club",
      played: 15,
      wins: 10,
      draws: 3,
      losses: 2,
      gf: 28,
      ga: 12,
      gd: 16,
      points: 33,
    },
    { position: 3, team: "Barcelona", played: 15, wins: 9, draws: 4, losses: 2, gf: 30, ga: 15, gd: 15, points: 31 },
    {
      position: 4,
      team: "Atletico Madrid",
      played: 15,
      wins: 8,
      draws: 5,
      losses: 2,
      gf: 24,
      ga: 13,
      gd: 11,
      points: 29,
    },
    { position: 5, team: "Sevilla FC", played: 15, wins: 7, draws: 4, losses: 4, gf: 22, ga: 18, gd: 4, points: 25 },
  ]

  const seasonStats = [
    { label: "Top Scorer", value: "Marcus Rodriguez", subValue: "12 goals" },
    { label: "Most Assists", value: "Ahmed Hassan", subValue: "8 assists" },
    { label: "Clean Sheets", value: "8", subValue: "53% of matches" },
    { label: "Average Possession", value: "62%", subValue: "League average: 58%" },
  ]

  const getResultColor = (result) => {
    switch (result) {
      case "W":
        return "text-green-400"
      case "D":
        return "text-yellow-400"
      case "L":
        return "text-red-400"
      default:
        return "text-muted-foreground"
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-krub font-bold text-5xl text-primary-foreground mb-4">{currentSeason.name}</h1>
            <p className="font-lexend text-xl text-primary-foreground/90">Follow our journey through the season</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Season Overview */}
        <section className="mb-12">
          <h2 className="font-krub font-bold text-3xl text-foreground mb-8">Season Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="font-krub font-bold text-2xl text-card-foreground">{currentSeason.matchesPlayed}</div>
              <div className="font-lexend text-sm text-muted-foreground">Played</div>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="font-krub font-bold text-2xl text-green-400">{currentSeason.wins}</div>
              <div className="font-lexend text-sm text-muted-foreground">Wins</div>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="font-krub font-bold text-2xl text-yellow-400">{currentSeason.draws}</div>
              <div className="font-lexend text-sm text-muted-foreground">Draws</div>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="font-krub font-bold text-2xl text-red-400">{currentSeason.losses}</div>
              <div className="font-lexend text-sm text-muted-foreground">Losses</div>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="font-krub font-bold text-2xl text-card-foreground">{currentSeason.goalsFor}</div>
              <div className="font-lexend text-sm text-muted-foreground">Goals For</div>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="font-krub font-bold text-2xl text-card-foreground">{currentSeason.goalsAgainst}</div>
              <div className="font-lexend text-sm text-muted-foreground">Goals Against</div>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="font-krub font-bold text-2xl text-card-foreground">{currentSeason.points}</div>
              <div className="font-lexend text-sm text-muted-foreground">Points</div>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="font-krub font-bold text-2xl text-accent">{currentSeason.position}</div>
              <div className="font-lexend text-sm text-muted-foreground">Position</div>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Upcoming Fixtures */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-krub font-bold text-2xl text-foreground">Upcoming Fixtures</h2>
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-4">
              {upcomingFixtures.map((fixture) => (
                <div
                  key={fixture.id}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="font-lexend text-sm text-muted-foreground">{formatDate(fixture.date)}</div>
                        <div className="font-krub font-semibold text-card-foreground">{fixture.time}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-lexend text-xs text-accent">{fixture.competition}</div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {fixture.isHome ? "Home" : fixture.venue}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-krub font-bold text-lg text-card-foreground">
                        {fixture.isHome ? "DEKEDDA" : fixture.opponent}
                      </div>
                    </div>
                    <div className="mx-8 text-muted-foreground">VS</div>
                    <div className="text-center">
                      <div className="font-krub font-bold text-lg text-card-foreground">
                        {fixture.isHome ? fixture.opponent : "DEKEDDA"}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Results */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-krub font-bold text-2xl text-foreground">Recent Results</h2>
              <Trophy className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-4">
              {recentResults.map((result) => (
                <div key={result.id} className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-krub font-bold ${
                          result.result === "W"
                            ? "bg-green-400 text-green-900"
                            : result.result === "D"
                              ? "bg-yellow-400 text-yellow-900"
                              : "bg-red-400 text-red-900"
                        }`}
                      >
                        {result.result}
                      </div>
                      <div>
                        <div className="font-lexend text-sm text-muted-foreground">{formatDate(result.date)}</div>
                        <div className="font-lexend text-xs text-accent">{result.competition}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-krub font-bold text-xl text-card-foreground">{result.score}</div>
                      <div className="font-lexend text-sm text-muted-foreground">{result.venue}</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-krub font-semibold text-card-foreground">DEKEDDA vs {result.opponent}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* League Standings */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-krub font-bold text-2xl text-foreground">League Standings</h2>
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <div className="bg-card rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary">
                  <tr>
                    <th className="px-6 py-4 text-left font-krub font-semibold text-primary-foreground">Pos</th>
                    <th className="px-6 py-4 text-left font-krub font-semibold text-primary-foreground">Team</th>
                    <th className="px-6 py-4 text-center font-krub font-semibold text-primary-foreground">P</th>
                    <th className="px-6 py-4 text-center font-krub font-semibold text-primary-foreground">W</th>
                    <th className="px-6 py-4 text-center font-krub font-semibold text-primary-foreground">D</th>
                    <th className="px-6 py-4 text-center font-krub font-semibold text-primary-foreground">L</th>
                    <th className="px-6 py-4 text-center font-krub font-semibold text-primary-foreground">GF</th>
                    <th className="px-6 py-4 text-center font-krub font-semibold text-primary-foreground">GA</th>
                    <th className="px-6 py-4 text-center font-krub font-semibold text-primary-foreground">GD</th>
                    <th className="px-6 py-4 text-center font-krub font-semibold text-primary-foreground">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {leagueStandings.map((team, index) => (
                    <tr
                      key={team.position}
                      className={`border-b border-border ${
                        team.team === "Dekedda Sports Club" ? "bg-accent/10" : "hover:bg-muted/10"
                      }`}
                    >
                      <td className="px-6 py-4 font-krub font-bold text-card-foreground">{team.position}</td>
                      <td className="px-6 py-4 font-krub font-semibold text-card-foreground">
                        {team.team === "Dekedda Sports Club" ? (
                          <span className="text-accent">{team.team}</span>
                        ) : (
                          team.team
                        )}
                      </td>
                      <td className="px-6 py-4 text-center font-lexend text-card-foreground">{team.played}</td>
                      <td className="px-6 py-4 text-center font-lexend text-card-foreground">{team.wins}</td>
                      <td className="px-6 py-4 text-center font-lexend text-card-foreground">{team.draws}</td>
                      <td className="px-6 py-4 text-center font-lexend text-card-foreground">{team.losses}</td>
                      <td className="px-6 py-4 text-center font-lexend text-card-foreground">{team.gf}</td>
                      <td className="px-6 py-4 text-center font-lexend text-card-foreground">{team.ga}</td>
                      <td className="px-6 py-4 text-center font-lexend text-card-foreground">
                        <span
                          className={
                            team.gd > 0 ? "text-green-400" : team.gd < 0 ? "text-red-400" : "text-card-foreground"
                          }
                        >
                          {team.gd > 0 ? "+" : ""}
                          {team.gd}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center font-krub font-bold text-card-foreground">{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Season Statistics */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-krub font-bold text-2xl text-foreground">Season Statistics</h2>
            <Target className="w-6 h-6 text-primary" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonStats.map((stat, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <div className="text-center">
                  <div className="font-lexend text-sm text-muted-foreground mb-2">{stat.label}</div>
                  <div className="font-krub font-bold text-2xl text-card-foreground mb-1">{stat.value}</div>
                  <div className="font-lexend text-xs text-accent">{stat.subValue}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-12 bg-primary rounded-lg p-8 text-center">
          <h3 className="font-krub font-bold text-2xl text-primary-foreground mb-4">Support the Team</h3>
          <p className="font-lexend text-primary-foreground/90 mb-6">
            Get your tickets for upcoming matches and be part of our journey to glory
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-accent-foreground font-krub font-semibold px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors">
              Buy Tickets
            </button>
            <button className="bg-transparent border-2 border-primary-foreground text-primary-foreground font-krub font-semibold px-8 py-3 rounded-lg hover:bg-primary-foreground hover:text-primary transition-colors">
              View Full Calendar
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Seasons
