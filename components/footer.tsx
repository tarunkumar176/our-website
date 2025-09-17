"use client"

import { Code2, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  services: [
    { name: "POS Systems", href: "#services" },
    { name: "Full-Stack Apps", href: "#services" },
    { name: "Quick Sites", href: "#services" },
    { name: "Custom Solutions", href: "#contact" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Process", href: "#services" },
    { name: "Case Studies", href: "#" },
    { name: "Careers", href: "#" },
  ],
  support: [
    { name: "Contact", href: "#contact" },
    { name: "Documentation", href: "#" },
    { name: "Support Center", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
}

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Code2 className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-foreground">CodeCraft</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
                Building tomorrow's software today. We specialize in POS systems, full-stack applications, and
                lightning-fast deployable sites.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>hello@codecraft.dev</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className="w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary"
                      asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        <IconComponent className="h-4 w-4" />
                      </a>
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Support</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Get the latest updates on new services and development insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">© 2024 CodeCraft Solutions. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
