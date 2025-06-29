"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Cloud,
  GitBranch,
  Shield,
  Settings,
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Users,
  Globe,
  Zap,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const services = [
  {
    icon: Cloud,
    title: "Azure Cloud Solutions",
    description: "Comprehensive cloud migration, architecture, and optimization services for scalable business growth.",
    features: ["Cloud Migration", "Architecture Design", "Cost Optimization", "24/7 Support"],
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description: "Streamline your development lifecycle with automated pipelines and infrastructure as code.",
    features: ["Pipeline Automation", "Infrastructure as Code", "Monitoring", "Security Integration"],
  },
  {
    icon: Shield,
    title: "Site Reliability Engineering",
    description: "Ensure maximum uptime and performance with our expert SRE practices and monitoring.",
    features: ["Performance Monitoring", "Incident Response", "Capacity Planning", "Reliability Engineering"],
  },
  {
    icon: Settings,
    title: "Managed IT Services",
    description: "Complete IT infrastructure management and support for your business operations.",
    features: ["Infrastructure Management", "Help Desk Support", "Security Management", "Backup Solutions"],
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, FinTech Innovations Ltd",
    company: "London, UK",
    content:
      "Their Azure migration expertise saved us 40% on infrastructure costs while improving our system reliability. Outstanding service from the Pakistan delivery center.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Head of Operations, StartupHub",
    company: "Manchester, UK",
    content:
      "The DevOps transformation they delivered reduced our deployment time from hours to minutes. Truly professional team with deep technical expertise.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "IT Director, Financial Services Group",
    company: "Edinburgh, UK",
    content:
      "Their SRE practices have given us 99.9% uptime for the past 18 months. The proactive monitoring and incident response is exceptional.",
    rating: 5,
  },
]

const stats = [
  { number: "150+", label: "Projects Delivered" },
  { number: "50+", label: "Happy Clients" },
  { number: "99.9%", label: "Uptime Achieved" },
  { number: "24/7", label: "Support Available" },
]

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden min-h-screen flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-20">
            <source src="/placeholder.mp4" type="video/mp4" />
            {/* Fallback background */}
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 border border-emerald-400/20 rounded-lg animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-16 h-16 bg-emerald-600/10 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-12 h-12 border-2 border-emerald-400/30 rotate-45 animate-spin"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute bottom-20 right-40 w-24 h-24 border border-emerald-400/20 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 gap-4 h-full">
              {[...Array(144)].map((_, i) => (
                <div
                  key={i}
                  className="border border-emerald-400/20 animate-pulse"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: "3s",
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Animated Badge */}
              <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700 text-white animate-pulse hover:animate-none transition-all duration-300 transform hover:scale-105">
                  <Globe className="w-4 h-4 mr-2 animate-spin" style={{ animationDuration: "3s" }} />
                  UK Registered • Pakistan Delivery Center
                </Badge>
              </div>

              {/* Animated Title with Staggered Effect */}
              <div
                className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="inline-block animate-fade-in">Enterprise</span>{" "}
                  <span className="inline-block animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    IT
                  </span>{" "}
                  <span className="inline-block animate-fade-in" style={{ animationDelay: "0.4s" }}>
                    Solutions
                  </span>{" "}
                  <span className="inline-block animate-fade-in" style={{ animationDelay: "0.6s" }}>
                    for
                  </span>
                  <span className="text-emerald-400 block mt-2">
                    <span className="inline-block animate-slide-in-left" style={{ animationDelay: "0.8s" }}>
                      Modern
                    </span>{" "}
                    <span className="inline-block animate-slide-in-right" style={{ animationDelay: "1s" }}>
                      Businesses
                    </span>
                  </span>
                </h1>
              </div>

              {/* Animated Description */}
              <div
                className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Empowering UK SMEs, startups, and financial services with cutting-edge cloud solutions, DevOps
                  excellence, and reliable managed IT services.
                </p>
              </div>

              {/* Animated Buttons */}
              <div
                className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white group relative overflow-hidden btn-hover-lift transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center">
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-400 text-slate-300 hover:bg-slate-800 hover:text-white relative overflow-hidden group transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center">
                      <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                      View Our Services
                    </span>
                    <div className="absolute inset-0 bg-slate-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Button>
                </div>
              </div>

              {/* Animated Stats Preview */}
              <div
                className={`transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700/50">
                  <div className="text-center group">
                    <div className="text-2xl font-bold text-emerald-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                      <AnimatedCounter end={150} duration={2000} />+
                    </div>
                    <div className="text-sm text-slate-400">Projects</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl font-bold text-emerald-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                      <AnimatedCounter end={50} duration={2000} />+
                    </div>
                    <div className="text-sm text-slate-400">Clients</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl font-bold text-emerald-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                      99.9%
                    </div>
                    <div className="text-sm text-slate-400">Uptime</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Right Side with 3D Effect */}
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <div className="relative group">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>

                {/* Main Image Container */}
                <div className="relative transform group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="/placeholder.svg?height=500&width=600"
                    alt="Modern IT Infrastructure"
                    className="relative rounded-2xl shadow-2xl"
                  />

                  {/* Floating Tech Icons */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center animate-bounce shadow-lg">
                    <Cloud className="h-6 w-6 text-white" />
                  </div>
                  <div
                    className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center animate-bounce shadow-lg"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <GitBranch className="h-6 w-6 text-white" />
                  </div>
                  <div
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center animate-bounce shadow-lg"
                    style={{ animationDelay: "1s" }}
                  >
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div
                    className="absolute -bottom-4 -right-4 w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center animate-bounce shadow-lg"
                    style={{ animationDelay: "1.5s" }}
                  >
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-ping"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: "2s",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-slate-400 text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-slate-200"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                      <service.icon className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-slate-300">Trusted by leading UK businesses across various industries</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl lg:text-2xl text-slate-200 mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonials[currentTestimonial].name}</div>
                    <div className="text-slate-400">{testimonials[currentTestimonial].role}</div>
                    <div className="text-emerald-400 text-sm">{testimonials[currentTestimonial].company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-emerald-400" : "bg-slate-600"
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Future Platforms Teaser */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-600 text-white">Coming Soon</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Next-Generation Platforms</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're developing cutting-edge solutions to keep your business ahead of the curve
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">AI/LLM Platform</h3>
              <p className="text-slate-600 mb-4">
                Enterprise-grade AI solutions for automation and intelligent decision making
              </p>
              <Badge variant="outline">Q2 2024</Badge>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Crypto Solutions</h3>
              <p className="text-slate-600 mb-4">
                Blockchain integration and cryptocurrency payment solutions for modern businesses
              </p>
              <Badge variant="outline">Q3 2024</Badge>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Client Portal</h3>
              <p className="text-slate-600 mb-4">
                Comprehensive project management and communication platform for seamless collaboration
              </p>
              <Badge variant="outline">Q1 2024</Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Get in touch with our experts to discuss your requirements and discover how we can help your business
                thrive.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">UK Registered Company</div>
                    <div className="text-slate-600">Serving clients across the United Kingdom</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Pakistan Delivery Center</div>
                    <div className="text-slate-600">Expert technical team providing 24/7 support</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
