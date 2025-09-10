"use client"

import { Mail, Phone, Trophy, Users, Target, Zap } from "lucide-react"

const Team = () => {
  const coachingStaff = [
    {
      name: "hassan ali ",
      role: "Head Coach",
      image: "/pic/kabtan5.jpeg",
      contact: { email: "m.thompson@dekedda.com", phone: "+1 (555) 123-4567" },
    },
    {
      name: "Sarah omar",
      role: "Assistant Coach",
      image: "/pic/team5.jpeg",
      contact: { email: "s.omar@dekedda.com", phone: "+1 (555) 123-4568" },
    },
    {
      name: "Ahmed Hassan",
      role: "Goalkeeping Coach",
      description:
        "Former international goalkeeper with expertise in modern goalkeeping techniques and mental preparation.",
      image: "/pic/kb1.jpeg",
      contact: { email: "a.hassan@dekedda.com", phone: "+1 (555) 123-4569" },
    },
  ]

  const management = [
    {
      name: "Da'uud Jamal",
      role: "General Manager",
      description:
        "MBA graduate with 20 years in sports management. Oversees all club operations and strategic planning.",
      image: "/pic/kabtan1.jpeg",
      contact: { email: "d.jamal@dekedda.com", phone: "+1 (555) 123-4570" },
    },
    {
      name: "Caamir Yusuf",
      role: "Director of Football",
      description: "Former professional player turned executive. Manages player transfers and football operations.",
      image: "/pic/team1.jpeg",
      contact: { email: "e.petrov@dekedda.com", phone: "+1 (555) 123-4571" },
    },
    {
      name: "Jamal Wardheere",
      role: "Youth Academy Director",
      description: "Passionate about developing young talent. Has guided 50+ players to professional contracts.",
      image: "/pic/team2.jpeg",
      contact: { email: "j.wardheere@dekedda.com", phone: "+1 (555) 123-4572" },
    },
  ]

  const technicalTeam = [
    {
      name: "Dr. Anisa Jimcale",
      role: "Sports Scientist",
      description:
        "PhD in Sports Science. Develops fitness programs and monitors player performance using cutting-edge technology.",
      image: "/pic/team1.jpeg",
      contact: { email: "l.park@dekedda.com", phone: "+1 (555) 123-4573" },
    },
    {
      name: "Rooble Samatar",
      role: "Performance Analyst",
      description: "Data analytics expert who provides tactical insights and opponent analysis for match preparation.",
      image: "/pic/team6.jpeg",
      contact: { email: "r.silva@dekedda.com", phone: "+1 (555) 123-4574" },
    },
    {
      name: "Dr. Muxsin Barre",
      role: "Team Physician",
      description:
        "Sports medicine specialist ensuring player health and managing injury prevention and recovery programs.",
      image: "/pic/tm2.jpeg",
      contact: { email: "m.barre@dekedda.com", phone: "+1 (555) 123-4575" },
    },
  ]

  const supportStaff = [
    {
      name: "Caaliyo Macalin",
      role: "Physiotherapist",
      description: "Licensed physiotherapist specializing in sports injuries and rehabilitation programs for athletes.",
      image: "/support-anna-martinez-headshot.png",
      contact: { email: "a.martinez@dekedda.com", phone: "+1 (555) 123-4576" },
    },
    {
      name: "Axmed Nur",
      role: "Equipment Manager",
      description:
        "Ensures all training and match equipment is maintained to the highest standards for optimal performance.",
      image: "/support-tom-anderson-headshot.png",
      contact: { email: "t.anderson@dekedda.com", phone: "+1 (555) 123-4577" },
    },
    {
      name: "Maryan Gacal",
      role: "Nutritionist",
      description:
        "Certified sports nutritionist creating personalized meal plans to optimize player performance and recovery.",
      image: "/support-maria-gonzalez-headshot.png",
      contact: { email: "m.gonzalez@dekedda.com", phone: "+1 (555) 123-4578" },
    },
  ]

  const TeamSection = ({ title, members, icon, description }) => (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-primary p-4 rounded-full mr-4">{icon}</div>
            <h2 className="font-krub font-bold text-4xl text-foreground">{title}</h2>
          </div>
          <p className="font-lexend text-xl text-muted-foreground max-w-3xl mx-auto">{description}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-lg border border-border hover:shadow-xl hover:bg-accent/10 transition-all duration-300 group"
            >
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-krub font-bold text-2xl text-card-foreground mb-2">{member.name}</h3>
                <p className="font-lexend text-accent font-semibold text-lg mb-4">{member.role}</p>
              </div>
              <p className="font-lexend text-muted-foreground leading-relaxed mb-6 text-center">{member.description}</p>
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="font-lexend text-sm">{member.contact.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="font-lexend text-sm">{member.contact.phone}</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button className="bg-primary text-primary-foreground font-krub font-semibold px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-krub font-bold text-6xl md:text-8xl text-primary-foreground mb-6 text-balance">
            Meet Our Team
          </h1>
          <p className="font-lexend text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-4xl mx-auto text-balance">
            Behind every great team is an exceptional group of professionals dedicated to excellence, innovation, and
            the pursuit of victory.
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-background p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-krub font-bold text-accent mb-2">25+</div>
              <div className="font-lexend text-muted-foreground">Years Combined Experience</div>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-krub font-bold text-accent mb-2">15</div>
              <div className="font-lexend text-muted-foreground">Professional Staff Members</div>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-krub font-bold text-accent mb-2">8</div>
              <div className="font-lexend text-muted-foreground">International Certifications</div>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-krub font-bold text-accent mb-2">100%</div>
              <div className="font-lexend text-muted-foreground">Commitment to Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Staff */}
      <TeamSection
        title="Coaching Staff"
        members={coachingStaff}
        icon={<Trophy className="w-8 h-8 text-primary-foreground" />}
        description="Our experienced coaching team brings world-class expertise and tactical knowledge to develop players and achieve championship success."
      />

      {/* Management */}
      <div className="bg-card">
        <TeamSection
          title="Management"
          members={management}
          icon={<Users className="w-8 h-8 text-primary-foreground" />}
          description="Strategic leaders who oversee club operations, player development, and long-term vision to ensure sustainable success."
        />
      </div>

      {/* Technical Team */}
      <TeamSection
        title="Technical Team"
        members={technicalTeam}
        icon={<Target className="w-8 h-8 text-primary-foreground" />}
        description="Specialists in sports science, performance analysis, and medical care who optimize player performance and prevent injuries."
      />

      

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-krub font-bold text-4xl text-primary-foreground mb-6">Join Our Professional Team</h2>
          <p className="font-lexend text-xl text-primary-foreground/90 leading-relaxed mb-8">
            We're always looking for talented professionals who share our passion for excellence and commitment to
            developing world-class football talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-accent-foreground font-krub font-semibold px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors">
              View Open Positions
            </button>
            <button className="bg-transparent border-2 border-primary-foreground text-primary-foreground font-krub font-semibold px-8 py-4 rounded-lg hover:bg-primary-foreground hover:text-primary transition-colors">
              Contact HR
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team
 