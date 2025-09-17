"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Send, MessageSquare, Calendar } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    contact: "hello@codecraft.dev",
    action: "Send Email",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our team",
    contact: "+1 (555) 123-4567",
    action: "Call Now",
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    description: "Book a consultation",
    contact: "30-minute free consultation",
    action: "Book Now",
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-4 text-accent border-accent/20">
            Get In Touch
          </Badge>
          <h2 className="text-mega font-space-grotesk text-balance mb-6">
            <span className="text-foreground">Let's Build</span> <span className="text-primary">Something</span>{" "}
            <span className="text-accent">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Ready to transform your business with custom software? We'd love to hear about your project and discuss how
            we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <MessageSquare className="h-6 w-6 text-primary" />
                Start Your Project
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-foreground mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="pos">POS System</option>
                    <option value="fullstack">Full-Stack Application</option>
                    <option value="quick">Quick Deployable Site</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div>
              <h3 className="text-huge font-space-grotesk text-foreground mb-6">
                Get In <span className="text-primary">Touch</span>
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Choose the method that works best for you. We're here to answer questions, discuss your project, and
                provide expert guidance on your software needs.
              </p>
            </div>

            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-1">{method.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                        <p className="text-foreground font-medium mb-3">{method.contact}</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 bg-transparent"
                        >
                          {method.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 text-center">
              <h4 className="text-lg font-semibold text-foreground mb-2">Quick Response Guarantee</h4>
              <p className="text-muted-foreground text-sm">
                We respond to all inquiries within 2 hours during business hours. For urgent projects, we offer same-day
                consultations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
