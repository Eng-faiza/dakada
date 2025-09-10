"use client"

import { useState } from "react"
import { Calendar, Clock, User, ChevronLeft, ChevronRight } from "lucide-react"

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentFeatured, setCurrentFeatured] = useState(0)

  const categories = ["All", "Match Reports", "Player News", "Club Updates", "Interviews", "Youth Academy"]

  const featuredArticles = [
    {
      id: 1,
      title: "Dekedda Secures Victory in Championship Semi-Final",
      excerpt:
        "A thrilling 3-2 victory against City Rivals puts us one step closer to the championship title. Match highlights and player reactions inside.",
      image: "/pic/cups.jpeg",
      category: "Match Reports",
      author: "Sahra Jaamac",
      date: "2024-03-15",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Cali Rooble Signs Contract Extension",
      excerpt:
        "Our star forward commits to three more years with the club. Exclusive interview about his future plans and championship ambitions.",
      image: "/pic/2pl3.jpeg",
      category: "Player News",
      author: "Maxamuud Jimcaale",
      date: "2024-03-12",
      readTime: "3 min read",
    },
    {
      id: 3,
      title: "New Training Facility Opens Next Month",
      excerpt:
        "State-of-the-art training complex will enhance player development and youth academy programs. Take a virtual tour of the facilities.",
      image: "/pic/team2.jpeg",
      category: "Club Updates",
      author: "Aamir Hassan",
      date: "2024-03-10",
      readTime: "4 min read",
    },
  ]

  const articles = [
    {
      id: 4,
      title: "Youth Academy Graduates Make Professional Debut",
      excerpt: "Three academy players earn their first professional contracts and debut in the senior squad.",
      image: "/pic/all pl.jpeg",
      category: "Youth Academy",
      author: "Jaamac Cusmaan",
      date: "2024-03-14",
      readTime: "3 min read",
    },
    {
      id: 5,
      title: "Behind the Scenes: Match Day Preparation",
      excerpt: "An exclusive look at how our team prepares for crucial championship matches.",
      image: "/pic/2pl3.jpeg",
      category: "Club Updates",
      author: "Leyloon Yusuf",
      date: "2024-03-13",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "Captain Maxmuud Jaamac on Leadership",
      excerpt: "Our team captain shares insights on leading by example and building team chemistry.",
      image: "/pic/fns1.jpeg",
      category: "Interviews",
      author: "Da'uud Jamal",
      date: "2024-03-11",
      readTime: "4 min read",
    },
    {
      id: 7,
      title: "Tactical Analysis: Winning Formation",
      excerpt: "Breaking down the 4-3-3 formation that has brought us success this season.",
      image: "/pic/player2.jpeg",
      category: "Match Reports",
      author: "Rooble Samatar",
      date: "2024-03-09",
      readTime: "7 min read",
    },
    {
      id: 8,
      title: "Community Outreach Program Launches",
      excerpt: "Dekedda Sports Club partners with local schools to promote youth football development.",
      image: "/pic/team2.jpeg",
      category: "Club Updates",
      author: "Axmed Nur",
      date: "2024-03-08",
      readTime: "3 min read",
    },
    {
      id: 9,
      title: "Injury Update: Key Players Return",
      excerpt: "Medical team provides updates on player fitness ahead of the championship final.",
      image: "/pic/team3.jpeg",
      category: "Player News",
      author: "Dr. Muxsin Barre",
      date: "2024-03-07",
      readTime: "2 min read",
    },
  ]

  const filteredArticles =
    selectedCategory === "All" ? articles : articles.filter((article) => article.category === selectedCategory)

  const nextFeatured = () => {
    setCurrentFeatured((prev) => (prev + 1) % featuredArticles.length)
  }

  const prevFeatured = () => {
    setCurrentFeatured((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length)
  }

  const getCategoryColor = (category) => {
    const colors = {
      "Match Reports": "bg-accent text-accent-foreground",
      "Player News": "bg-primary text-primary-foreground",
      "Club Updates": "bg-secondary text-secondary-foreground",
      Interviews: "bg-muted text-muted-foreground",
      "Youth Academy": "bg-card text-card-foreground",
    }
    return colors[category] || "bg-muted text-muted-foreground"
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-krub font-bold text-6xl md:text-8xl text-primary-foreground mb-6 text-balance">
            Latest News
          </h1>
          <p className="font-lexend text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-4xl mx-auto text-balance">
            Stay updated with the latest match reports, player news, and exclusive behind-the-scenes content from
            Dekedda Sports Club.
          </p>
        </div>
      </section>

      {/* Featured Stories Carousel */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-krub font-bold text-3xl text-card-foreground">Featured Stories</h2>
            <div className="flex space-x-2">
              <button
                onClick={prevFeatured}
                className="p-2 bg-background text-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextFeatured}
                className="p-2 bg-background text-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentFeatured * 100}%)` }}
            >
              {featuredArticles.map((article) => (
                <div key={article.id} className="w-full flex-shrink-0">
                  <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="max-w-4xl">
                        <div className="flex items-center space-x-4 mb-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-krub font-semibold ${getCategoryColor(article.category)}`}
                          >
                            {article.category}
                          </span>
                          <div className="flex items-center space-x-4 text-white/80 text-sm">
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{article.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(article.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                        </div>
                        <h3 className="font-krub font-bold text-3xl md:text-4xl text-white mb-4 text-balance">
                          {article.title}
                        </h3>
                        <p className="font-lexend text-lg text-white/90 leading-relaxed max-w-2xl">{article.excerpt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {featuredArticles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeatured(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentFeatured === index ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-krub font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-card-foreground hover:bg-primary/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-krub font-bold text-3xl text-foreground">
              {selectedCategory === "All" ? "All Articles" : selectedCategory}
            </h2>
            <div className="text-muted-foreground">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-krub font-semibold ${getCategoryColor(article.category)}`}
                    >
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-krub font-bold text-xl text-card-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-lexend text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-krub font-bold text-4xl text-primary-foreground mb-6">Stay Updated</h2>
          <p className="font-lexend text-xl text-primary-foreground/90 leading-relaxed mb-8">
            Subscribe to our newsletter and never miss the latest news, match reports, and exclusive content from
            Dekedda Sports Club.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="bg-accent text-accent-foreground font-krub font-semibold px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
