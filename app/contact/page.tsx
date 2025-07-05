"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, MessageCircle, Calendar, Clock, ArrowRight, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our UK-based team",
    contact: "+44 20 1234 5678",
    availability: "Mon-Fri, 9AM-6PM GMT",
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed responses within 2 hours",
    contact: "hello@ukitservices.co.uk",
    availability: "24/7 Response",
    action: "Send Email",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Chat",
    description: "Quick responses for urgent queries",
    contact: "+44 7700 123456",
    availability: "Mon-Fri, 8AM-8PM GMT",
    action: "Start Chat",
  },
  {
    icon: Calendar,
    title: "Book a Meeting",
    description: "Schedule a consultation with our experts",
    contact: "calendly.com/ukitservices",
    availability: "Flexible Scheduling",
    action: "Book Now",
  },
]

const offices = [
  {
    title: "UK Headquarters",
    address: "123 Tech Street, London EC2A 4DP, United Kingdom",
    phone: "+44 20 1234 5678",
    email: "london@ukitservices.co.uk",
    hours: "Mon-Fri: 9AM-6PM GMT",
    description: "Our main UK office handling client relationships and strategic planning.",
  },
  {
    title: "Pakistan Delivery Center",
    address: "Plot 456, Clifton Block 5, Karachi 75600, Pakistan",
    phone: "+92 21 1234 5678",
    email: "karachi@ukitservices.co.uk",
    hours: "Mon-Fri: 9AM-6PM PKT (24/7 Support Available)",
    description: "Our technical delivery center with 30+ expert engineers and developers.",
  },
]

const faqs = [
  {
    question: "How do you ensure quality with a Pakistan delivery center?",
    answer:
      "Our Pakistan team consists of highly qualified engineers with international certifications. We maintain UK standards through rigorous quality processes, regular training, and direct oversight from our UK leadership team.",
  },
  {
    question: "What are your typical project timelines?",
    answer:
      "Project timelines vary based on complexity. Small projects typically take 2-4 weeks, medium projects 1-3 months, and large enterprise transformations 3-12 months. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you provide 24/7 support?",
    answer:
      "Yes, we offer 24/7 support for critical systems and managed services clients. Our Pakistan delivery center provides round-the-clock monitoring and incident response capabilities.",
  },
  {
    question: "How do you handle data security and compliance?",
    answer:
      "We are ISO 27001 certified and GDPR compliant. All client data is handled according to UK data protection standards, with secure communication channels and strict access controls in place.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    urgency: "normal",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-emerald-600 text-white">Get In Touch</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's Discuss Your
              <span className="text-emerald-400 block">IT Transformation</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Ready to take your business to the next level? Our UK and Pakistan teams are here to help. Get in touch
              for a free consultation and discover how we can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Schedule Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-400 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-slate-600">Choose the communication method that works best for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow group">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 transition-colors">
                  <method.icon className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{method.title}</h3>
                <p className="text-slate-600 text-sm mb-3">{method.description}</p>
                <p className="font-medium text-slate-900 mb-2">{method.contact}</p>
                <p className="text-xs text-slate-500 mb-4">{method.availability}</p>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">{method.action}</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and we'll get back to you within 2 hours during business hours.
              </p>

              {!isSubmitted ? (
                <Card className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                        <Input
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Your Company Ltd"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+44 20 1234 5678"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Service Interest</label>
                        <select
                          value={formData.service}
                          onChange={(e) => handleInputChange("service", e.target.value)}
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        >
                          <option value="">Select a service</option>
                          <option value="cloud-migration">Cloud Migration</option>
                          <option value="devops">DevOps & CI/CD</option>
                          <option value="sre">Site Reliability Engineering</option>
                          <option value="managed-it">Managed IT Services</option>
                          <option value="security">Security & Compliance</option>
                          <option value="consultation">General Consultation</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Project Budget</label>
                        <select
                          value={formData.budget}
                          onChange={(e) => handleInputChange("budget", e.target.value)}
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-10k">Under £10,000</option>
                          <option value="10k-25k">£10,000 - £25,000</option>
                          <option value="25k-50k">£25,000 - £50,000</option>
                          <option value="50k-100k">£50,000 - £100,000</option>
                          <option value="over-100k">Over £100,000</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Project Details *</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please describe your project requirements, timeline, and any specific challenges you're facing..."
                        rows={5}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Urgency Level</label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="normal"
                            checked={formData.urgency === "normal"}
                            onChange={(e) => handleInputChange("urgency", e.target.value)}
                            className="mr-2"
                          />
                          Normal (1-2 weeks)
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="urgent"
                            checked={formData.urgency === "urgent"}
                            onChange={(e) => handleInputChange("urgency", e.target.value)}
                            className="mr-2"
                          />
                          Urgent (Within 1 week)
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="asap"
                            checked={formData.urgency === "asap"}
                            onChange={(e) => handleInputChange("urgency", e.target.value)}
                            className="mr-2"
                          />
                          ASAP (Same day)
                        </label>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Card>
              ) : (
                <Card className="p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-slate-600 mb-6">
                    Thank you for reaching out. We'll get back to you within 2 hours during business hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    Send Another Message
                  </Button>
                </Card>
              )}
            </div>

            {/* Office Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Offices</h2>
              <p className="text-slate-600 mb-8">
                With offices in the UK and Pakistan, we provide local expertise with global reach.
              </p>

              <div className="space-y-8">
                {offices.map((office, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{office.title}</h3>
                        <p className="text-slate-600 text-sm mb-4">{office.description}</p>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-slate-400 mr-3" />
                        <span className="text-slate-600">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-slate-400 mr-3" />
                        <span className="text-slate-600">{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-slate-400 mr-3" />
                        <span className="text-slate-600">{office.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-slate-400 mr-3" />
                        <span className="text-slate-600">{office.hours}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Common questions about working with our UK-Pakistan delivery model</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Don't wait - let's discuss your project today. Our experts are standing by to help you achieve your IT
            goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100">
              <Phone className="h-5 w-5 mr-2" />
              Call +44 20 1234 5678
            </Button>
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100">
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
