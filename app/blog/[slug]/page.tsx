"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  BookOpen,
  Tag,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Mock blog data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "The Complete Guide to Azure Cloud Migration for UK SMEs",
    excerpt:
      "Learn how to successfully migrate your business to Azure cloud with our step-by-step guide, including cost optimization strategies and best practices.",
    content: `
      <h2>Introduction to Azure Cloud Migration</h2>
      <p>Cloud migration has become a critical strategic initiative for UK small and medium enterprises (SMEs) looking to modernize their IT infrastructure, reduce costs, and improve scalability. Microsoft Azure, as one of the leading cloud platforms, offers a comprehensive suite of services that can transform how your business operates.</p>
      
      <h2>Why Choose Azure for Your UK Business?</h2>
      <p>Azure provides several advantages specifically beneficial to UK businesses:</p>
      <ul>
        <li><strong>Data Sovereignty:</strong> Azure has multiple data centers in the UK, ensuring your data remains within UK borders for compliance with local regulations.</li>
        <li><strong>GDPR Compliance:</strong> Built-in tools and features to help maintain GDPR compliance.</li>
        <li><strong>Cost Effectiveness:</strong> Pay-as-you-use pricing model that can reduce IT costs by up to 40%.</li>
        <li><strong>Scalability:</strong> Easily scale resources up or down based on business demands.</li>
      </ul>

      <h2>Pre-Migration Planning</h2>
      <p>Before beginning your migration journey, it's essential to conduct a thorough assessment of your current infrastructure:</p>
      
      <h3>1. Infrastructure Assessment</h3>
      <p>Document all your current systems, applications, and dependencies. Use tools like Azure Migrate to get detailed insights into your on-premises environment.</p>
      
      <h3>2. Cost Analysis</h3>
      <p>Utilize the Azure Pricing Calculator to estimate your monthly costs and compare them with your current on-premises expenses.</p>
      
      <h3>3. Security and Compliance Review</h3>
      <p>Identify any specific security requirements or compliance standards your business must maintain during and after migration.</p>

      <h2>Migration Strategies</h2>
      <p>There are several approaches to cloud migration, each with its own benefits:</p>
      
      <h3>Lift and Shift (Rehost)</h3>
      <p>The quickest migration approach where applications are moved to Azure with minimal changes. This is ideal for businesses wanting to migrate quickly while maintaining existing functionality.</p>
      
      <h3>Refactor</h3>
      <p>Making minor modifications to applications to take advantage of cloud capabilities without changing the core architecture.</p>
      
      <h3>Rearchitect</h3>
      <p>Redesigning applications to be cloud-native, taking full advantage of Azure's platform services.</p>

      <h2>Step-by-Step Migration Process</h2>
      
      <h3>Phase 1: Discovery and Assessment (Weeks 1-2)</h3>
      <ul>
        <li>Install and configure Azure Migrate</li>
        <li>Discover and assess on-premises servers</li>
        <li>Analyze dependencies between applications</li>
        <li>Create migration groups based on dependencies</li>
      </ul>
      
      <h3>Phase 2: Planning and Design (Weeks 3-4)</h3>
      <ul>
        <li>Design Azure architecture</li>
        <li>Plan network connectivity (VPN or ExpressRoute)</li>
        <li>Design security and access controls</li>
        <li>Create migration timeline and rollback plans</li>
      </ul>
      
      <h3>Phase 3: Pilot Migration (Weeks 5-6)</h3>
      <ul>
        <li>Migrate non-critical applications first</li>
        <li>Test functionality and performance</li>
        <li>Validate security and compliance</li>
        <li>Refine migration process based on learnings</li>
      </ul>
      
      <h3>Phase 4: Production Migration (Weeks 7-12)</h3>
      <ul>
        <li>Migrate applications in planned groups</li>
        <li>Monitor performance and resolve issues</li>
        <li>Update DNS and network configurations</li>
        <li>Decommission on-premises infrastructure</li>
      </ul>

      <h2>Cost Optimization Strategies</h2>
      <p>Once migrated, implementing these strategies can help reduce your Azure costs:</p>
      
      <h3>Right-sizing Resources</h3>
      <p>Regularly review and adjust VM sizes based on actual usage patterns. Azure Advisor provides recommendations for optimization.</p>
      
      <h3>Reserved Instances</h3>
      <p>For predictable workloads, Reserved Instances can provide up to 72% cost savings compared to pay-as-you-go pricing.</p>
      
      <h3>Auto-scaling</h3>
      <p>Implement auto-scaling to automatically adjust resources based on demand, ensuring you only pay for what you need.</p>
      
      <h3>Storage Optimization</h3>
      <p>Use appropriate storage tiers (Hot, Cool, Archive) based on data access patterns to optimize storage costs.</p>

      <h2>Common Challenges and Solutions</h2>
      
      <h3>Network Latency</h3>
      <p><strong>Challenge:</strong> Applications may experience latency when accessing on-premises resources.</p>
      <p><strong>Solution:</strong> Implement Azure ExpressRoute for dedicated, high-speed connectivity.</p>
      
      <h3>Data Transfer Costs</h3>
      <p><strong>Challenge:</strong> Large data transfers can result in significant costs.</p>
      <p><strong>Solution:</strong> Use Azure Data Box for large initial data migrations and optimize ongoing data sync processes.</p>
      
      <h3>Skills Gap</h3>
      <p><strong>Challenge:</strong> Internal teams may lack Azure expertise.</p>
      <p><strong>Solution:</strong> Invest in training and consider partnering with Azure specialists for initial migration and ongoing support.</p>

      <h2>Post-Migration Best Practices</h2>
      
      <h3>Monitoring and Alerting</h3>
      <p>Implement comprehensive monitoring using Azure Monitor and set up alerts for critical metrics.</p>
      
      <h3>Backup and Disaster Recovery</h3>
      <p>Configure Azure Backup and Site Recovery to ensure business continuity.</p>
      
      <h3>Security Hardening</h3>
      <p>Implement Azure Security Center recommendations and enable advanced threat protection.</p>
      
      <h3>Governance and Compliance</h3>
      <p>Use Azure Policy and Blueprints to maintain consistent governance across your cloud environment.</p>

      <h2>Conclusion</h2>
      <p>Azure cloud migration can provide significant benefits for UK SMEs, including cost savings, improved scalability, and enhanced security. Success depends on thorough planning, choosing the right migration strategy, and implementing proper governance and optimization practices post-migration.</p>
      
      <p>Remember that migration is not a one-time event but an ongoing journey of optimization and improvement. Regular reviews and adjustments will help ensure you continue to maximize the value of your Azure investment.</p>
    `,
    author: "Sarah Thompson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Cloud Migration",
    tags: ["Azure", "Cloud", "Migration", "SME"],
    image: "/placeholder.svg?height=400&width=800",
    featured: true,
  },
  {
    id: 2,
    title: "DevOps Best Practices: Lessons from 50+ UK Client Projects",
    excerpt:
      "Discover the DevOps strategies that have helped our UK clients reduce deployment time by 90% and improve system reliability.",
    content: `
      <h2>Introduction</h2>
      <p>Over the past five years, we've implemented DevOps practices across more than 50 UK client projects, ranging from fintech startups to established manufacturing companies. This article shares the key lessons learned and best practices that have consistently delivered results.</p>
      
      <h2>The DevOps Transformation Journey</h2>
      <p>DevOps isn't just about tools—it's a cultural shift that requires buy-in from all stakeholders. Our most successful implementations have followed a structured approach that addresses people, processes, and technology in that order.</p>
      
      <h2>Key Success Factors</h2>
      <h3>1. Leadership Buy-in</h3>
      <p>Every successful DevOps transformation we've witnessed started with strong leadership support. Without executive backing, cultural change initiatives often stall.</p>
      
      <h3>2. Cross-functional Teams</h3>
      <p>Breaking down silos between development and operations teams is crucial. We've seen the best results when teams are restructured around products rather than functions.</p>
      
      <h3>3. Automation First</h3>
      <p>Automation should be the default approach for repetitive tasks. This includes testing, deployment, infrastructure provisioning, and monitoring.</p>
    `,
    author: "Ahmed Hassan",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "DevOps",
    tags: ["DevOps", "CI/CD", "Best Practices", "Automation"],
    image: "/placeholder.svg?height=400&width=800",
    featured: false,
  },
  // Add more blog posts as needed...
]

const relatedPosts = [
  {
    id: 2,
    title: "DevOps Best Practices: Lessons from 50+ UK Client Projects",
    image: "/placeholder.svg?height=200&width=300",
    category: "DevOps",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "GDPR Compliance in the Cloud: A Practical Guide for UK Businesses",
    image: "/placeholder.svg?height=200&width=300",
    category: "Security & Compliance",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Site Reliability Engineering: Achieving 99.9% Uptime",
    image: "/placeholder.svg?height=200&width=300",
    category: "SRE",
    readTime: "7 min read",
  },
]

export default function BlogDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [liked, setLiked] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)

  useEffect(() => {
    const slug = params.slug
    // In a real app, you'd fetch the post by slug from your API
    const foundPost = blogPosts.find((p) => p.id.toString() === slug)
    setPost(foundPost)
    setLoading(false)
  }, [params.slug])

  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = post?.title || ""

    let shareUrl = ""
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
        break
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      case "copy":
        navigator.clipboard.writeText(url)
        return
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400")
    }
  }

  const handleRelatedPostClick = (postId: number) => {
    router.push(`/blog/${postId}`)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-slate-200 rounded w-1/2 mb-8"></div>
            <div className="h-64 bg-slate-200 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-slate-200 rounded"></div>
              <div className="h-4 bg-slate-200 rounded"></div>
              <div className="h-4 bg-slate-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Article Not Found</h1>
          <p className="text-slate-600 mb-8">The article you're looking for doesn't exist.</p>
          <Button onClick={() => router.push("/blog")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-slate-600">
            <button onClick={() => router.push("/")} className="hover:text-emerald-600">
              Home
            </button>
            <ChevronRight className="h-4 w-4" />
            <button onClick={() => router.push("/blog")} className="hover:text-emerald-600">
              Blog
            </button>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900 font-medium">{post.category}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-emerald-600 text-white">{post.category}</Badge>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">{post.excerpt}</p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-slate-300">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Image */}
              <div className="aspect-video mb-8 overflow-hidden rounded-lg">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              </div>

              {/* Article Body */}
              <div
                className="prose prose-lg max-w-none prose-slate prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-ul:text-slate-700 prose-ol:text-slate-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-5 w-5 text-slate-400" />
                  <span className="text-sm font-medium text-slate-600">Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <Badge key={tag} variant="outline" className="text-emerald-600 border-emerald-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Share2 className="h-5 w-5 text-slate-400" />
                    <span className="text-sm font-medium text-slate-600">Share this article:</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare("twitter")}
                      className="text-slate-600 hover:text-blue-500"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare("facebook")}
                      className="text-slate-600 hover:text-blue-600"
                    >
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare("linkedin")}
                      className="text-slate-600 hover:text-blue-700"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare("copy")}
                      className="text-slate-600 hover:text-emerald-600"
                    >
                      <Link2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Author Card */}
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="/placeholder-user.jpg"
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-slate-900">{post.author}</h3>
                      <p className="text-sm text-slate-600">Senior IT Consultant</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    Specializing in cloud migration and DevOps practices with over 10 years of experience helping UK
                    businesses transform their IT infrastructure.
                  </p>
                </Card>

                {/* Table of Contents */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2 text-sm">
                    <a href="#introduction" className="block text-slate-600 hover:text-emerald-600 transition-colors">
                      Introduction to Azure Cloud Migration
                    </a>
                    <a href="#why-azure" className="block text-slate-600 hover:text-emerald-600 transition-colors">
                      Why Choose Azure for Your UK Business?
                    </a>
                    <a href="#planning" className="block text-slate-600 hover:text-emerald-600 transition-colors">
                      Pre-Migration Planning
                    </a>
                    <a href="#strategies" className="block text-slate-600 hover:text-emerald-600 transition-colors">
                      Migration Strategies
                    </a>
                    <a href="#process" className="block text-slate-600 hover:text-emerald-600 transition-colors">
                      Step-by-Step Migration Process
                    </a>
                    <a href="#optimization" className="block text-slate-600 hover:text-emerald-600 transition-colors">
                      Cost Optimization Strategies
                    </a>
                    <a href="#challenges" className="block text-slate-600 hover:text-emerald-600 transition-colors">
                      Common Challenges and Solutions
                    </a>
                    <a href="#best-practices" className="block text-slate-600 hover:text-emerald-600 transition-colors">
                      Post-Migration Best Practices
                    </a>
                  </nav>
                </Card>

                {/* Related Articles */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <div
                        key={relatedPost.id}
                        className="flex gap-3 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors"
                        onClick={() => router.push(`/blog/${relatedPost.id}`)}
                      >
                        <img
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div>
                          <h4 className="text-sm font-medium text-slate-900 mb-1 line-clamp-2">{relatedPost.title}</h4>
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Badge variant="outline" className="text-xs">
                              {relatedPost.category}
                            </Badge>
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Navigation */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Button variant="outline" onClick={() => router.push("/blog")} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
            <Button onClick={() => router.push("/contact")} className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Get Expert Help
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want more insights like this?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly IT insights, best practices, and expert tips.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border-0 text-slate-900"
            />
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
