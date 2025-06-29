"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Briefcase,
  GraduationCap,
  Coffee,
  Wifi,
  Car,
  Shield,
  TrendingUp,
  Search,
  Filter,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const jobs = [
  {
    id: 1,
    title: "Senior DevOps Engineer",
    department: "Engineering",
    location: "Karachi, Pakistan (Remote)",
    type: "Full-time",
    experience: "5+ years",
    salary: "PKR 180,000 - 250,000",
    description: "Lead our DevOps initiatives and help UK clients achieve seamless CI/CD automation.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "5+ years of DevOps experience",
      "Expert knowledge of Docker, Kubernetes, and cloud platforms",
      "Experience with CI/CD tools (Jenkins, GitLab CI, Azure DevOps)",
      "Strong scripting skills (Python, Bash, PowerShell)",
      "Excellent English communication skills",
    ],
    responsibilities: [
      "Design and implement CI/CD pipelines for UK clients",
      "Manage cloud infrastructure on Azure and AWS",
      "Collaborate with development teams to optimize deployment processes",
      "Provide technical mentorship to junior team members",
      "Participate in client calls and technical discussions",
    ],
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Cloud Solutions Architect",
    department: "Architecture",
    location: "Lahore, Pakistan (Remote)",
    type: "Full-time",
    experience: "7+ years",
    salary: "PKR 220,000 - 300,000",
    description: "Design scalable cloud architectures for enterprise clients in the UK financial sector.",
    requirements: [
      "Bachelor's/Master's degree in Computer Science or Engineering",
      "7+ years of cloud architecture experience",
      "Azure and AWS certifications (Solutions Architect level)",
      "Experience with microservices and containerization",
      "Knowledge of financial services compliance requirements",
      "Fluent English with excellent presentation skills",
    ],
    responsibilities: [
      "Design enterprise-grade cloud solutions for UK clients",
      "Lead technical workshops and architecture reviews",
      "Create detailed technical documentation and proposals",
      "Mentor development teams on cloud best practices",
      "Ensure solutions meet security and compliance requirements",
    ],
    posted: "1 week ago",
  },
  {
    id: 3,
    title: "Site Reliability Engineer",
    department: "Operations",
    location: "Karachi, Pakistan (Remote)",
    type: "Full-time",
    experience: "4+ years",
    salary: "PKR 160,000 - 220,000",
    description:
      "Ensure 99.9% uptime for critical UK client systems through proactive monitoring and incident response.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "4+ years of SRE or similar experience",
      "Strong knowledge of monitoring tools (Prometheus, Grafana, ELK)",
      "Experience with incident management and on-call rotations",
      "Scripting and automation skills",
      "Strong problem-solving and communication skills",
    ],
    responsibilities: [
      "Monitor and maintain client production systems",
      "Respond to incidents and perform root cause analysis",
      "Implement automation to reduce manual operations",
      "Collaborate with development teams on reliability improvements",
      "Participate in capacity planning and performance optimization",
    ],
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    department: "Development",
    location: "Islamabad, Pakistan (Remote)",
    type: "Full-time",
    experience: "3+ years",
    salary: "PKR 120,000 - 180,000",
    description: "Build modern web applications and APIs for UK startups and SMEs.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of full-stack development experience",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms and databases",
      "Knowledge of modern development practices (Git, testing, CI/CD)",
      "Good English communication skills",
    ],
    responsibilities: [
      "Develop responsive web applications using modern frameworks",
      "Build and maintain RESTful APIs and microservices",
      "Collaborate with UK-based product teams",
      "Write clean, testable, and maintainable code",
      "Participate in code reviews and technical discussions",
    ],
    posted: "5 days ago",
  },
  {
    id: 5,
    title: "Cybersecurity Specialist",
    department: "Security",
    location: "Karachi, Pakistan (Remote)",
    type: "Full-time",
    experience: "5+ years",
    salary: "PKR 200,000 - 280,000",
    description: "Protect UK client infrastructure and ensure compliance with security standards.",
    requirements: [
      "Bachelor's degree in Cybersecurity, Computer Science, or related field",
      "5+ years of cybersecurity experience",
      "Security certifications (CISSP, CISM, or equivalent)",
      "Knowledge of UK/EU compliance requirements (GDPR, ISO 27001)",
      "Experience with security tools and vulnerability assessment",
      "Excellent analytical and communication skills",
    ],
    responsibilities: [
      "Conduct security assessments and penetration testing",
      "Implement security controls and monitoring systems",
      "Ensure compliance with regulatory requirements",
      "Respond to security incidents and breaches",
      "Provide security training and awareness programs",
    ],
    posted: "1 week ago",
  },
  {
    id: 6,
    title: "Project Manager",
    department: "Management",
    location: "Karachi, Pakistan (Remote)",
    type: "Full-time",
    experience: "6+ years",
    salary: "PKR 180,000 - 240,000",
    description: "Lead complex IT projects for UK clients and ensure successful delivery.",
    requirements: [
      "Bachelor's degree in Project Management, Business, or related field",
      "6+ years of IT project management experience",
      "PMP or equivalent certification preferred",
      "Experience managing international client relationships",
      "Strong knowledge of Agile and Waterfall methodologies",
      "Excellent English communication and leadership skills",
    ],
    responsibilities: [
      "Manage end-to-end project delivery for UK clients",
      "Coordinate with cross-functional teams and stakeholders",
      "Ensure projects are delivered on time and within budget",
      "Manage client relationships and communications",
      "Implement project management best practices",
    ],
    posted: "4 days ago",
  },
]

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "Market-leading compensation packages with annual reviews",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear career progression paths and skill development opportunities",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Sponsored certifications, training programs, and conference attendance",
  },
  {
    icon: Shield,
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and your family",
  },
  {
    icon: Wifi,
    title: "Remote Work",
    description: "Flexible remote work options with modern collaboration tools",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible hours and generous vacation policy",
  },
  {
    icon: Users,
    title: "International Exposure",
    description: "Work directly with UK clients and gain global experience",
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Transportation allowance for office visits and client meetings",
  },
]

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("All")
  const [selectedJob, setSelectedJob] = useState<number | null>(null)

  const departments = ["All", "Engineering", "Architecture", "Operations", "Development", "Security", "Management"]

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment
    return matchesSearch && matchesDepartment
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-emerald-600 text-white">Join Our Team</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Build Your Career with
              <span className="text-emerald-400 block">TechSolutions UK</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Join our Pakistan delivery center and work on exciting projects for UK clients. Remote-first culture with
              international exposure and competitive benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                View Open Positions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-400 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                Learn About Benefits
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Work with Us?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We offer more than just a job - we provide a platform for growth, learning, and making a real impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Open Positions</h2>
            <p className="text-xl text-slate-600">Remote opportunities based in Pakistan, serving UK clients</p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-slate-400" />
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Job Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredJobs.map((job) => (
              <Card
                key={job.id}
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedJob(job.id)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{job.title}</h3>
                      <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-2">
                        {job.department}
                      </Badge>
                    </div>
                    <span className="text-sm text-slate-500">{job.posted}</span>
                  </div>

                  <p className="text-slate-600 mb-4">{job.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center text-slate-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Briefcase className="h-4 w-4 mr-2" />
                      {job.experience}
                    </div>
                    <div className="flex items-center text-slate-600">
                      <DollarSign className="h-4 w-4 mr-2" />
                      {job.salary}
                    </div>
                  </div>

                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    View Details & Apply
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No positions found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedDepartment("All")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {(() => {
                const job = jobs.find((j) => j.id === selectedJob)!
                return (
                  <>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h2>
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.type}
                          </span>
                          <span className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {job.salary}
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" onClick={() => setSelectedJob(null)}>
                        ×
                      </Button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">Requirements</h3>
                        <ul className="space-y-2 mb-6">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start text-sm text-slate-600">
                              <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">Responsibilities</h3>
                        <ul className="space-y-2 mb-6">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start text-sm text-slate-600">
                              <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">Apply Now</h3>
                      <form className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <Input placeholder="Full Name" />
                          <Input placeholder="Email Address" type="email" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <Input placeholder="Phone Number" />
                          <Input placeholder="Years of Experience" />
                        </div>
                        <Textarea placeholder="Cover Letter (Optional)" rows={4} />
                        <div className="flex gap-4">
                          <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
                            Submit Application
                          </Button>
                          <Button variant="outline" onClick={() => setSelectedJob(null)}>
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </div>
                  </>
                )
              })()}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Don't See the Right Role?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future
            opportunities.
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100">
            Send Your Resume
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
