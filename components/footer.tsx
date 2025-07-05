import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, MessageCircle, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">IT</span>
              </div>
              <div>
                <div className="text-xl font-bold">TechSolutions UK</div>
                <div className="text-sm text-slate-400">Enterprise IT Services</div>
              </div>
            </div>
            <p className="text-slate-300 mb-6">
              Empowering UK businesses with innovative IT solutions, delivered by our expert team from our Pakistan
              delivery center.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-800">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-800">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Azure Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  DevOps & CI/CD
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Site Reliability Engineering
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Managed IT Services
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Security & Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-400 mr-3" />
                <span className="text-slate-300">+44 20 1234 5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-400 mr-3" />
                <span className="text-slate-300">hello@ukitservices.co.uk</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-400 mr-3 mt-1" />
                <span className="text-slate-300">
                  London, United Kingdom
                  <br />
                  Delivery Center: Karachi, Pakistan
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Chat
              </Button>
              <Button
                variant="outline"
                className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book Meeting
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-slate-300 mb-4">Get the latest insights on IT trends and our services</p>
            <div className="flex gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 TechSolutions UK Ltd. All rights reserved. Company registered in England and Wales.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
              Terms
            </Link>
            <Link href="/#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
              Privacy
            </Link>
            <Link href="/#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
