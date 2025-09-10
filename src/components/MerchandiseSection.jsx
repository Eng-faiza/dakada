const MerchandiseSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(25, 54, 97, 0.9), rgba(25, 54, 97, 0.7)), url('/pic/2pl3.jpeg')`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-krub font-bold text-4xl md:text-5xl text-white mb-6 text-balance">
            Get your Club Championship merchandise now!
          </h2>
          <p className="font-lexend text-xl text-gray-200 mb-8 text-pretty">
            Celebrate our historic victory with our new Club Championship Range! Show your support with official
            jerseys, scarves, and exclusive memorabilia.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-lexend font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-lg">
            Shop Now →
          </button>
        </div>
      </div>
    </section>
  )
}

export default MerchandiseSection
