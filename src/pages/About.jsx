"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Trophy, Users, Target, Heart, Star, Award, MapPin } from "lucide-react"

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "League Champions",
      description: "5-time regional league winners",
      year: "2019-2023",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Cup Winners",
      description: "3 major cup victories",
      year: "2020-2024",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Youth Development",
      description: "50+ players promoted to professional leagues",
      year: "Since 1999",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Impact",
      description: "10,000+ young athletes trained",
      year: "25 Years",
    },
  ]

  const testimonials = [
    {
      quote: "Dekedda Sports Club shaped me into the player I am today. The dedication and passion here is unmatched.",
      author: "Aasha salaad",
      role: "Team Captain",
    },
    {
      quote:
        "The family atmosphere and professional training make this club special. We're not just teammates, we're brothers.",
      author: "Ahmed Hassan",
      role: "Midfielder",
    },
    {
      quote: "25 years of coaching here, and I still get excited every training session. This club has heart.",
      author: "farah ahmed",
      role: "Head Coach",
    },
  ]

  const timeline = [
    { year: "1999", event: "Club Founded", description: "Established with a vision for excellence" },
    { year: "2005", event: "First Championship", description: "Won our first regional league title" },
    { year: "2012", event: "New Stadium", description: "Moved to our current 15,000 capacity home" },
    { year: "2018", event: "Youth Academy", description: "Launched professional youth development program" },
    { year: "2023", event: "International Recognition", description: "Awarded Best Community Club by FIFA" },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70 z-10"></div>
        <img
          src="/football-stadium-with-celebrating-team-in-blue-jer.png"
          alt="Dekedda Sports Club celebrating"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-krub font-bold text-6xl md:text-8xl text-gray-900 mb-6 text-balance">Our Story</h1>
          <p className="font-lexend text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 text-balance">
            Since 1999, Dekedda Sports Club has been a cornerstone of excellence in football, developing world-class
            players and creating unforgettable moments for our passionate fans.
          </p>
          <div className="flex items-center justify-center space-x-4 text-primary">
            <MapPin className="w-6 h-6" />
            <span className="font-lexend text-lg">Founded in the heart of the city</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-krub font-bold text-4xl text-gray-900 text-center mb-16">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <h3 className="font-krub font-bold text-2xl text-primary mb-2">{item.year}</h3>
                    <h4 className="font-krub font-semibold text-xl text-gray-900 mb-2">{item.event}</h4>
                    <p className="font-lexend text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-gray-50"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-krub font-bold text-4xl text-gray-900 mb-8">Our Mission</h2>
              <p className="font-lexend text-xl text-gray-700 leading-relaxed mb-8">
                To develop exceptional football talent while fostering character, teamwork, and community spirit. We
                believe in creating champions both on and off the field.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-full">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-krub font-semibold text-xl text-gray-900 mb-2">Excellence</h3>
                    <p className="font-lexend text-gray-600">Striving for the highest standards in everything we do</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-full">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-krub font-semibold text-xl text-gray-900 mb-2">Unity</h3>
                    <p className="font-lexend text-gray-600">Building strong bonds within our team and community</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-full">
                    <Heart className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-krub font-semibold text-xl text-gray-900 mb-2">Passion</h3>
                    <p className="font-lexend text-gray-600">Playing with heart and dedication in every match</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-50 h-80 mx-auto">
              <img
                src="/pic/all pl2.jpeg"
                alt="Team training"
                className="rounded-lg shadow-2xl w-full h-full"
              />
              <div className="absolute z-10 -bottom-6 -right-6 bg-primary p-6 rounded-lg shadow-lg ">
                <div className="text-center">
                  <div className="font-krub font-bold text-3xl text-primary-foreground">25+</div>
                  <div className="font-lexend text-primary-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-krub font-bold text-4xl text-gray-900 text-center mb-16">Our Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary mb-4">{achievement.icon}</div>
                <h3 className="font-krub font-bold text-xl text-gray-900 mb-2">{achievement.title}</h3>
                <p className="font-lexend text-gray-600 mb-4">{achievement.description}</p>
                <div className="text-primary font-krub font-semibold">{achievement.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-krub font-bold text-4xl text-gray-900 text-center mb-16">Team Culture</h2>
          <div className="relative bg-gray-50 p-12 rounded-lg shadow-2xl">
            <div className="text-center">
              <blockquote className="font-lexend text-2xl text-gray-900 leading-relaxed mb-8 text-balance">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="font-krub font-bold text-2xl text-primary-foreground">
                    {testimonials[currentTestimonial].author.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-krub font-semibold text-xl text-gray-900">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="font-lexend text-gray-600">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </div>
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary p-3 rounded-full text-primary-foreground hover:bg-primary/80 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary p-3 rounded-full text-primary-foreground hover:bg-primary/80 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-krub font-bold text-4xl text-primary-foreground mb-6">Join the Dekedda Family</h2>
          <p className="font-lexend text-xl text-primary-foreground/90 leading-relaxed mb-8">
            Be part of our legacy. Whether you're a player, fan, or supporter, there's a place for you in the Dekedda
            Sports Club community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-accent-foreground font-krub font-semibold px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors">
              Join Our Team
            </button>
            <button className="bg-transparent border-2 border-primary-foreground text-primary-foreground font-krub font-semibold px-8 py-4 rounded-lg hover:bg-primary-foreground hover:text-primary transition-colors">
              Become a Fan
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
