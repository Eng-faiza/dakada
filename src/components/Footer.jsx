const Footer = () => {
  return (
    <footer className="bg-primary-light w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f4CKAJJMVM4gfeynBvgA3PRbZShC7L.png"
                alt="Dekedda Sports Club"
                className="h-16 w-auto"
              />
              <div>
                <h3 className="font-krub font-bold text-2xl text-white">DEKEDDA</h3>
                <p className="text-white/90 font-lexend text-lg">SPORTS CLUB</p>
              </div>
            </div>
            <p className="text-white/80 font-lexend mb-4">
              Established in 1999, Dekedda Sports Club has been a cornerstone of excellence in football, developing
              world-class players and creating unforgettable moments for our passionate fans.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-krub font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/team" className="text-white/80 hover:text-white font-lexend">
                  Team
                </a>
              </li>
              <li>
                <a href="/players" className="text-white/80 hover:text-white font-lexend">
                  Players
                </a>
              </li>
              <li>
                <a href="/news" className="text-white/80 hover:text-white font-lexend">
                  News
                </a>
              </li>
              <li>
                <a href="/seasons" className="text-white/80 hover:text-white font-lexend">
                  Seasons
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-krub font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80 font-lexend">
              <li>Stadium Address</li>
              <li>City, Country</li>
              <li>+1 (555) 123-4567</li>
              <li>info@dekedda.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/70 font-lexend">© 2024 Dekedda Sports Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
