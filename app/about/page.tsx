"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Globe, Award, Target, ArrowRight, MapPin, Calendar } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const team = [
  {
    name: "James Mitchell",
    role: "Founder & CEO",
    location: "London, UK",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Former senior consultant at Accenture with 15+ years in enterprise IT transformation.",
    expertise: ["Strategic Planning", "Digital Transformation", "Client Relations"],
  },
  {
    name: "Sarah Thompson",
    role: "CTO",
    location: "Manchester, UK",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Ex-Microsoft Azure architect specializing in cloud-native solutions and DevOps.",
    expertise: ["Cloud Architecture", "DevOps", "Technical Strategy"],
  },
  {
    name: "Ahmed Hassan",
    role: "Head of Delivery",
    location: "Karachi, Pakistan",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Leading our Pakistan delivery center with expertise in agile project management.",
    expertise: ["Project Management", "Team Leadership", "Quality Assurance"],
  },
  {
    name: "Fatima Khan",
    role: "Lead DevOps Engineer",
    location: "Karachi, Pakistan",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Certified Kubernetes administrator with extensive experience in CI/CD automation.",
    expertise: ["Kubernetes", "CI/CD", "Infrastructure Automation"],
  },
  {
    name: "David Wilson",
    role: "Head of Security",
    location: "Edinburgh, UK",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Former cybersecurity consultant with deep expertise in financial services compliance.",
    expertise: ["Cybersecurity", "Compliance", "Risk Management"],
  },
  {
    name: "Zara Ali",
    role: "Senior Cloud Architect",
    location: "Lahore, Pakistan",
    image: "/placeholder.svg?height=300&width=300",
    bio: "AWS and Azure certified architect with focus on scalable, cost-effective solutions.",
    expertise: ["Cloud Architecture", "Cost Optimization", "Migration Strategy"],
  },
]

const values = [
  {
    icon: Target,
    title: "Client-First Approach",
    description: "Every decision we make is guided by what's best for our clients' success and growth.",
  },
  {
    icon: Award,
    title: "Excellence in Delivery",
    description: "We maintain the highest standards in everything we do, from code quality to customer service.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description: "We work as an extension of your team, fostering long-term relationships built on trust.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Our UK-Pakistan model combines local market knowledge with global technical expertise.",
  },
]

const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description: "Established TechSolutions UK with a vision to bridge UK businesses with world-class IT talent.",
  },
  {
    year: "2020",
    title: "Pakistan Delivery Center",
    description: "Opened our state-of-the-art delivery center in Karachi, Pakistan.",
  },
  {
    year: "2021",
    title: "ISO 27001 Certified",
    description: "Achieved ISO 27001 certification for information security management.",
  },
  {
    year: "2022",
    title: "50+ Clients Milestone",
    description: "Reached 50+ satisfied clients across various industries in the UK.",
  },
  {
    year: "2023",
    title: "Azure Gold Partner",
    description: "Became Microsoft Azure Gold Partner, recognizing our cloud expertise.",
  },
  {
    year: "2024",
    title: "Expansion & Innovation",
    description: "Expanding services with AI/ML platforms and blockchain solutions.",
  },
]

const certifications = [
  "Microsoft Azure Gold Partner",
  "AWS Advanced Consulting Partner",
  "ISO 27001:2013 Certified",
  "GDPR Compliant",
  "Cyber Essentials Plus",
  "SOC 2 Type II Compliant",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-emerald-600 text-white">About TechSolutions UK</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Bridging UK Innovation with
                <span className="text-emerald-400 block">Global Excellence</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                We're a UK-registered IT services company with a world-class delivery center in Pakistan, combining
                local market expertise with global technical talent to serve UK businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-400 text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  Our Certifications
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="TechSolutions UK Team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">5+</div>
              <div className="text-slate-600">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">50+</div>
              <div className="text-slate-600">UK Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">150+</div>
              <div className="text-slate-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">30+</div>
              <div className="text-slate-600">Expert Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6">
                Founded in 2019 by former Accenture and Microsoft consultants, TechSolutions UK was born from a vision
                to provide UK businesses with access to world-class IT expertise at competitive rates.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Our unique UK-Pakistan delivery model combines the best of both worlds: deep understanding of UK
                business culture and regulatory requirements, paired with exceptional technical talent and
                cost-effective delivery from our Pakistan center.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Today, we're proud to serve 50+ UK clients across various industries, from innovative startups to
                established financial institutions, helping them navigate their digital transformation journeys.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-emerald-600 mr-3" />
                  <div>
                    <div className="font-semibold text-slate-900">UK Headquarters</div>
                    <div className="text-slate-600 text-sm">London, United Kingdom</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-emerald-600 mr-3" />
                  <div>
                    <div className="font-semibold text-slate-900">Delivery Center</div>
                    <div className="text-slate-600 text-sm">Karachi, Pakistan</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="/placeholder.svg?height=500&width=600" alt="Our Journey" className="rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients and team members
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-xl text-slate-600">Key milestones in our growth and evolution</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-slate-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-full max-w-md ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                    <Card className="p-6">
                      <div className="flex items-center mb-3">
                        <Calendar className="h-5 w-5 text-emerald-600 mr-2" />
                        <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                          {milestone.year}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{milestone.title}</h3>
                      <p className="text-slate-600">{milestone.description}</p>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-slate-600">
              Experienced professionals from leading consulting firms and technology companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 text-slate-500 mr-2" />
                    <span className="text-sm text-slate-500">{member.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-slate-600">
              Maintaining the highest standards of security, quality, and professional excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-900">{cert}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Work with Us?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join 50+ UK businesses who trust us with their IT transformation. Let's discuss how we can help your
            business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100">
              Schedule a Meeting
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600"
            >
              View Our Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
