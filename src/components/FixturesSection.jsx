const FixturesSection = () => {
  const fixtures = [
    {
      date: "Sunday, August 31, 2025 CET",
      time: "20:00",
      homeTeam: "DEKEDDA",
      awayTeam: "HORSEED",
      homeScore: null,
      awayScore: null,
      status: "upcoming",
    },
    {
      date: "Sunday, September 14, 2025 CET",
      time: "18:00",
      homeTeam: "DEKEDDA",
      awayTeam: "ELMAN",
      homeScore: null,
      awayScore: null,
      status: "upcoming",
    },
    {
      date: "Sunday, September 28, 2025 CET",
      time: "21:00",
      homeTeam: "DEKEDDA",
      awayTeam: "GAADIIDKA",
      homeScore: null,
      awayScore: null,
      status: "upcoming",
    },
  ]

  const results = [
    { homeTeam: "DEKEDDA", awayTeam: "HEEGAN", homeScore: 2, awayScore: 1 },
    { homeTeam: "GASCO", awayTeam: "DEKEDDA", homeScore: 1, awayScore: 3 },
    { homeTeam: "DEKEDDA", awayTeam: "BADBAADO", homeScore: 4, awayScore: 0 },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-krub font-bold text-4xl text-white mb-12 text-center">FIXTURES & RESULTS</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Fixtures */}
          <div>
            <h3 className="font-krub font-semibold text-2xl text-primary-light mb-6">Upcoming Matches</h3>
            <div className="space-y-4">
              {fixtures.map((fixture, index) => (
                <div key={index} className="bg-primary-dark rounded-lg p-6 border border-primary-light/20">
                  <div className="text-sm text-gray-400 font-lexend mb-2">{fixture.date}</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-2">
                          <span className="text-white font-bold text-xs">DC</span>
                        </div>
                        <span className="font-lexend text-white text-sm">{fixture.homeTeam}</span>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">{fixture.time}</div>
                        <div className="text-xs text-gray-400">VS</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mb-2">
                          <span className="text-white font-bold text-xs">OPP</span>
                        </div>
                        <span className="font-lexend text-white text-sm">{fixture.awayTeam}</span>
                      </div>
                    </div>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-lexend font-semibold px-4 py-2 rounded transition-colors">
                      TICKETS
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Results */}
          <div>
            <h3 className="font-krub font-semibold text-2xl text-primary-light mb-6">Recent Results</h3>
            <div className="space-y-4">
              {results.map((result, index) => (
                <div key={index} className="bg-primary-dark rounded-lg p-6 border border-primary-light/20">
                  <div className="flex items-center justify-center space-x-8">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-2">
                        <span className="text-white font-bold text-xs">DC</span>
                      </div>
                      <span className="font-lexend text-white text-sm">{result.homeTeam}</span>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">
                        {result.homeScore} - {result.awayScore}
                      </div>
                      <div className="text-xs text-green-400">FULL TIME</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mb-2">
                        <span className="text-white font-bold text-xs">OPP</span>
                      </div>
                      <span className="font-lexend text-white text-sm">{result.awayTeam}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FixturesSection
