"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Clock, Users, Award, BookOpen, Star, ArrowRight } from "lucide-react"

// Mock course data
const courses = [
  {
    id: "cloud-computing-aws",
    title: "Cloud Computing with AWS",
    shortDescription: "Master Amazon Web Services and cloud infrastructure deployment with hands-on projects.",
    instructor: "Sarah Johnson",
    duration: "12 weeks",
    level: "Intermediate",
    category: "Cloud Computing",
    price: "£899",
    rating: 4.8,
    students: 245,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "cybersecurity-fundamentals",
    title: "Cybersecurity Fundamentals",
    shortDescription: "Learn essential cybersecurity principles, threat detection, and security best practices.",
    instructor: "Michael Chen",
    duration: "10 weeks",
    level: "Beginner",
    category: "Security",
    price: "£749",
    rating: 4.9,
    students: 189,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "data-analytics-python",
    title: "Data Analytics with Python",
    shortDescription: "Analyze data using Python, pandas, and visualization libraries for business insights.",
    instructor: "Dr. Emily Rodriguez",
    duration: "14 weeks",
    level: "Intermediate",
    category: "Data Science",
    price: "£999",
    rating: 4.7,
    students: 312,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "devops-automation",
    title: "DevOps & Automation",
    shortDescription: "Implement CI/CD pipelines, containerization, and infrastructure as code practices.",
    instructor: "James Wilson",
    duration: "16 weeks",
    level: "Advanced",
    category: "DevOps",
    price: "£1199",
    rating: 4.8,
    students: 156,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "web-development-fullstack",
    title: "Full-Stack Web Development",
    shortDescription: "Build modern web applications using React, Node.js, and database technologies.",
    instructor: "Alex Thompson",
    duration: "20 weeks",
    level: "Beginner",
    category: "Web Development",
    price: "£1299",
    rating: 4.9,
    students: 428,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "machine-learning-ai",
    title: "Machine Learning & AI",
    shortDescription: "Explore machine learning algorithms, neural networks, and artificial intelligence concepts.",
    instructor: "Dr. Priya Patel",
    duration: "18 weeks",
    level: "Advanced",
    category: "AI/ML",
    price: "£1399",
    rating: 4.6,
    students: 203,
    image: "/placeholder.svg?height=200&width=300",
  },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-emerald-100 text-emerald-800"
    case "Intermediate":
      return "bg-amber-100 text-amber-800"
    case "Advanced":
      return "bg-red-100 text-red-800"
    default:
      return "bg-slate-100 text-slate-800"
  }
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Professional IT Training Courses</h1>
            <p className="text-xl text-slate-600 mb-8">
              Advance your career with industry-leading courses designed by experts. Learn in-demand skills with
              hands-on projects and real-world applications.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-emerald-600 mr-2" />
                Industry Certified
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-emerald-600 mr-2" />
                Expert Instructors
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-emerald-600 mr-2" />
                Hands-on Projects
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Choose Your Learning Path</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From beginner-friendly introductions to advanced specializations, find the perfect course to match your
              career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-slate-100 rounded-t-lg overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {course.category}
                    </Badge>
                    <Badge className={`text-xs ${getLevelColor(course.level)}`}>{course.level}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">{course.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.instructor}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-amber-400 fill-current" />
                          <span className="text-sm text-slate-600 ml-1">{course.rating}</span>
                        </div>
                        <span className="text-sm text-slate-500">({course.students} students)</span>
                      </div>
                      <span className="text-lg font-bold text-emerald-600">{course.price}</span>
                    </div>

                    <Link href={`/courses/${course.id}`}>
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white group">
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join thousands of professionals who have advanced their careers with our expert-led courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-emerald-50"
              onClick={() => (window.location.href = "/contact")}
            >
              Get Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
              onClick={() => (window.location.href = "/about")}
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
