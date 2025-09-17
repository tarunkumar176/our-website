"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Smartphone, Zap, ArrowRight, CheckCircle, Clock, Users } from "lucide-react"

const services = [
  {
    icon: ShoppingCart,
    title: "POS Systems",
    subtitle: "Point of Sale Software",
    description: "Complete retail solutions with inventory management, payment processing, and real-time analytics.",
    features: ["Inventory Management", "Payment Processing", "Sales Analytics", "Multi-location Support"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Smartphone,
    title: "Full-Stack Apps",
    subtitle: "Mobile & Web Applications",
    description: "Custom mobile apps and web platforms built with modern technologies for scalable business growth.",
    features: ["React Native Apps", "Web Applications", "API Development", "Database Design"],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Zap,
    title: "Quick Sites",
    subtitle: "One-Day Deployments",
    description: "Lightning-fast development of landing pages, portfolios, and signup forms deployed within 24 hours.",
    features: ["Landing Pages", "Portfolio Sites", "Signup Forms", "24h Delivery"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-mega font-space-grotesk text-balance mb-6">
            <span className="text-foreground">Our</span> <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            We specialize in three core areas of software development, each designed to solve specific business
            challenges with precision and speed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`h-8 w-8 ${service.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-huge font-space-grotesk text-foreground mb-2">{service.title}</h3>
                  <p className="text-lg font-medium text-muted-foreground mb-4">{service.subtitle}</p>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Process Section */}
        <div className="bg-card rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-huge font-space-grotesk text-foreground mb-4">
              Our <span className="text-accent">Process</span>
            </h3>
            <p className="text-lg text-muted-foreground">From concept to deployment, we follow a proven methodology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Consultation</h4>
              <p className="text-muted-foreground">We understand your business needs and technical requirements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Development</h4>
              <p className="text-muted-foreground">Rapid development using modern technologies and best practices</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Deployment</h4>
              <p className="text-muted-foreground">Fast deployment with ongoing support and maintenance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
