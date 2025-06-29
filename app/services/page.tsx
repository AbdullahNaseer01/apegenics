"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Cloud,
  GitBranch,
  Shield,
  Settings,
  CheckCircle,
  ArrowRight,
  Lock,
  Zap,
  BarChart3,
  Users,
  Globe,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const services = [
  {
    icon: Cloud,
    title: "Azure Cloud Solutions",
    description: "Comprehensive cloud migration, architecture, and optimization services for scalable business growth.",
    features: [
      "Cloud Migration Strategy & Execution",
      "Azure Architecture Design",
      "Cost Optimization & Management",
      "Multi-cloud Integration",
      "Disaster Recovery Planning",
      "24/7 Cloud Monitoring",
    ],
    benefits: [
      "Reduce infrastructure costs by up to 40%",
      "Improve scalability and flexibility",
      "Enhanced security and compliance",
      "Faster deployment and time-to-market",
    ],
    pricing: "From £2,500/month",
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description: "Streamline your development lifecycle with automated pipelines and infrastructure as code.",
    features: [
      "CI/CD Pipeline Development",
      "Infrastructure as Code (IaC)",
      "Automated Testing Integration",
      "Container Orchestration",
      "Monitoring & Alerting",
      "Security Integration (DevSecOps)",
    ],
    benefits: [
      "Reduce deployment time by 90%",
      "Improve code quality and reliability",
      "Faster feedback loops",
      "Enhanced collaboration between teams",
    ],
    pricing: "From £3,000/month",
  },
  {
    icon: Shield,
    title: "Site Reliability Engineering",
    description: "Ensure maximum uptime and performance with our expert SRE practices and monitoring.",
    features: [
      "Performance Monitoring & Optimization",
      "Incident Response & Management",
      "Capacity Planning & Scaling",
      "Reliability Engineering",
      "SLA/SLO Definition & Monitoring",
      "Post-incident Analysis",
    ],
    benefits: [
      "Achieve 99.9%+ uptime",
      "Reduce mean time to recovery (MTTR)",
      "Proactive issue identification",
      "Improved customer satisfaction",
    ],
    pricing: "From £2,000/month",
  },
  {
    icon: Settings,
    title: "Managed IT Services",
    description: "Complete IT infrastructure management and support for your business operations.",
    features: [
      "Infrastructure Management",
      "24/7 Help Desk Support",
      "Security Management",
      "Backup & Recovery Solutions",
      "Network Administration",
      "Software License Management",
    ],
    benefits: [
      "Reduce IT operational costs",
      "Access to expert technical team",
      "Proactive maintenance and updates",
      "Focus on core business activities",
    ],
    pricing: "From £1,500/month",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "Comprehensive cybersecurity solutions to protect your business and ensure compliance.",
    features: [
      "Security Assessment & Auditing",
      "Compliance Management (GDPR, ISO 27001)",
      "Vulnerability Management",
      "Identity & Access Management",
      "Security Incident Response",
      "Employee Security Training",
    ],
    benefits: [
      "Protect against cyber threats",
      "Ensure regulatory compliance",
      "Reduce security risks",
      "Build customer trust",
    ],
    pricing: "From £2,200/month",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    description: "Transform your data into actionable insights with our analytics and business intelligence solutions.",
    features: [
      "Data Warehouse Design",
      "ETL/ELT Pipeline Development",
      "Business Intelligence Dashboards",
      "Predictive Analytics",
      "Data Governance",
      "Real-time Reporting",
    ],
    benefits: [
      "Make data-driven decisions",
      "Improve operational efficiency",
      "Identify new opportunities",
      "Enhance customer insights",
    ],
    pricing: "From £3,500/month",
  },
]

const industries = [
  {
    name: "Financial Services",
    description: "Specialized solutions for banks, fintech, and financial institutions",
    icon: BarChart3,
  },
  {
    name: "Healthcare",
    description: "HIPAA-compliant IT solutions for healthcare providers",
    icon: Shield,
  },
  {
    name: "E-commerce",
    description: "Scalable platforms for online retail and marketplace businesses",
    icon: Globe,
  },
  {
    name: "Manufacturing",
    description: "Industry 4.0 solutions for modern manufacturing operations",
    icon: Settings,
  },
  {
    name: "Startups",
    description: "Cost-effective IT solutions for growing businesses",
    icon: Zap,
  },
  {
    name: "Enterprise",
    description: "Large-scale IT transformation for established organizations",
    icon: Users,
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-emerald-600 text-white">Comprehensive IT Solutions</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Enterprise-Grade Services for
              <span className="text-emerald-400 block">Modern Businesses</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              From cloud migration to DevOps automation, we provide end-to-end IT solutions that drive growth and
              innovation for UK businesses.
            </p>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-slate-200">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-emerald-600 transition-colors">
                      <service.icon className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                      <p className="text-slate-600 mb-4">{service.description}</p>
                      <div className="text-emerald-600 font-semibold text-lg">{service.pricing}</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-600">
                            <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-600">
                            <ArrowRight className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">Get Started</Button>
                    <Button variant="outline" className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Industry Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We understand the unique challenges and requirements of different industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{industry.name}</h3>
                <p className="text-slate-600 text-sm">{industry.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your requirements and create a customized solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100">
              Schedule Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600"
            >
              Download Service Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
