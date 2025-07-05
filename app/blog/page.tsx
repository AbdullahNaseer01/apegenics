"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, User, Clock, ArrowRight, Search, TrendingUp, BookOpen } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useRouter } from "next/navigation"

const blogPosts = [
  {
    id: 1,
    title: "The Complete Guide to Azure Cloud Migration for UK SMEs",
    excerpt:
      "Learn how to successfully migrate your business to Azure cloud with our step-by-step guide, including cost optimization strategies and best practices.",
    content: "Full article content would go here...",
    author: "Sarah Thompson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Cloud Migration",
    tags: ["Azure", "Cloud", "Migration", "SME"],
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    id: 2,
    title: "DevOps Best Practices: Lessons from 50+ UK Client Projects",
    excerpt:
      "Discover the DevOps strategies that have helped our UK clients reduce deployment time by 90% and improve system reliability.",
    content: "Full article content would go here...",
    author: "Ahmed Hassan",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "DevOps",
    tags: ["DevOps", "CI/CD", "Best Practices", "Automation"],
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    id: 3,
    title: "GDPR Compliance in the Cloud: A Practical Guide for UK Businesses",
    excerpt:
      "Navigate GDPR requirements while leveraging cloud technologies. Essential compliance strategies for UK businesses operating in the digital age.",
    content: "Full article content would go here...",
    author: "David Wilson",
    date: "2024-01-08",
    readTime: "10 min read",
    category: "Security & Compliance",
    tags: ["GDPR", "Compliance", "Security", "Cloud"],
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    id: 4,
    title: "Site Reliability Engineering: Achieving 99.9% Uptime",
    excerpt:
      "How we help UK financial services maintain critical system uptime through proactive monitoring, incident response, and reliability engineering.",
    content: "Full article content would go here...",
    author: "Fatima Khan",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "SRE",
    tags: ["SRE", "Monitoring", "Reliability", "Financial Services"],
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    id: 5,
    title: "The Future of IT Services: AI and Automation Trends for 2024",
    excerpt:
      "Explore how artificial intelligence and automation are reshaping IT services and what UK businesses need to know to stay competitive.",
    content: "Full article content would go here...",
    author: "James Mitchell",
    date: "2024-01-03",
    readTime: "9 min read",
    category: "Technology Trends",
    tags: ["AI", "Automation", "Future Tech", "Innovation"],
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    id: 6,
    title: "Cost Optimization Strategies for Azure Workloads",
    excerpt:
      "Practical tips and tools to reduce your Azure costs by up to 40% without compromising performance or security.",
    content: "Full article content would go here...",
    author: "Zara Ali",
    date: "2024-01-01",
    readTime: "5 min read",
    category: "Cloud Optimization",
    tags: ["Azure", "Cost Optimization", "Cloud Management"],
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
]

const categories = [
  "All",
  "Cloud Migration",
  "DevOps",
  "Security & Compliance",
  "SRE",
  "Technology Trends",
  "Cloud Optimization",
]

const popularTags = ["Azure", "DevOps", "Security", "Cloud", "AI", "Automation", "GDPR", "Migration"]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTag, setSelectedTag] = useState("")

  const router = useRouter()

  const handlePostClick = (postId: number) => {
    router.push(`/blog/${postId}`)
  }

  const filteredPosts = blogPosts.filter((post) => {
    const searchLower = searchTerm.toLowerCase().trim()
    const matchesSearch =
      searchLower === "" ||
      post.title.toLowerCase().includes(searchLower) ||
      post.excerpt.toLowerCase().includes(searchLower) ||
      post.author.toLowerCase().includes(searchLower) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesTag = selectedTag === "" || post.tags.includes(selectedTag)
    return matchesSearch && matchesCategory && matchesTag
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-emerald-600 text-white">Tech Insights & Updates</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Stay Ahead with
              <span className="text-emerald-400 block">Expert IT Insights</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Discover the latest trends, best practices, and expert insights from our team of IT professionals serving
              UK businesses.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <TrendingUp className="h-6 w-6 text-emerald-600 mr-3" />
            <h2 className="text-2xl font-bold text-slate-900">Featured Articles</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
                onClick={() => handlePostClick(post.id)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
                    <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                      {post.category}
                    </Badge>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-slate-400 mr-2" />
                      <span className="text-sm text-slate-600">{post.author}</span>
                    </div>
                    <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 p-0">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Categories */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedCategory === category
                            ? "bg-emerald-100 text-emerald-700"
                            : "text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </Card>

                {/* Popular Tags */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          selectedTag === tag
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </Card>

                {/* Recent Posts */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div
                        key={post.id}
                        className="flex gap-3 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors"
                        onClick={() => handlePostClick(post.id)}
                      >
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div>
                          <h4 className="text-sm font-medium text-slate-900 mb-1 line-clamp-2">{post.title}</h4>
                          <p className="text-xs text-slate-500">{new Date(post.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <BookOpen className="h-6 w-6 text-emerald-600 mr-3" />
                  <h2 className="text-2xl font-bold text-slate-900">All Articles ({filteredPosts.length})</h2>
                </div>
                {(selectedCategory !== "All" || selectedTag) && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedCategory("All")
                      setSelectedTag("")
                    }}
                  >
                    Clear Filters
                  </Button>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                    onClick={() => handlePostClick(post.id)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-3 text-sm text-slate-600">
                        <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                          {post.category}
                        </Badge>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 mb-4 text-sm">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-slate-500">
                          <User className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                          <span className="mx-2">•</span>
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 p-0">
                          Read
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-slate-600 text-lg">No articles found matching your criteria.</p>
                  <Button
                    variant="outline"
                    className="mt-4 bg-transparent"
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedCategory("All")
                      setSelectedTag("")
                    }}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Stay Updated with Our Latest Insights</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get weekly updates on IT trends, best practices, and expert insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input placeholder="Enter your email" className="bg-white border-white text-slate-900" />
            <Button className="bg-slate-900 hover:bg-slate-800 text-white">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
