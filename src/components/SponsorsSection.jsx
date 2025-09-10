const SponsorsSection = () => {
  const sponsors = [
    { name: "Adidas", logo: "/adidas-logo.png" },
    { name: "Snapdragon", logo: "/snapdragon-logo.png" },
    { name: "DXC Technology", logo: "/dxc-technology-logo.png" },
    { name: "Apollo", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Betfred", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Cadbury", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Canon", logo: "/placeholder.svg?height=60&width=120" },
    { name: "DHL", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Malaysia", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Milly", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Paul Smith", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Remington", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-krub font-bold text-3xl text-center text-gray-900 mb-12">Our Partners</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 hover:scale-110 transition-transform duration-200"
            >
              <img
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                className="max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SponsorsSection
