"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Rocket, Target, Award } from "lucide-react"

const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "50+", label: "Projects Completed" },
  { number: "30+", label: "Happy Clients" },
  { number: "99%", label: "Success Rate" },
]

const values = [
  {
    icon: Code2,
    title: "Quality Code",
    description: "We write clean, maintainable code that scales with your business growth.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Rapid development cycles without compromising on quality or functionality.",
  },
  {
    icon: Target,
    title: "Business Focus",
    description: "Every solution is tailored to solve real business problems and drive results.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering exceptional software that exceeds expectations.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            About CodeCraft
          </Badge>
          <h2 className="text-mega font-space-grotesk text-balance mb-6">
            <span className="text-foreground">Building</span> <span className="text-primary">Tomorrow's</span>{" "}
            <span className="text-foreground">Software</span> <span className="text-accent">Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            We're a team of passionate developers who believe that great software should be accessible, efficient, and
            transformative. From small businesses to enterprise solutions, we craft digital experiences that make a
            difference.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-mega font-space-grotesk text-primary mb-2">{stat.number}</div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-huge font-space-grotesk text-foreground mb-6">
            Our <span className="text-primary">Mission</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed text-balance">
            To democratize access to high-quality software solutions by providing fast, affordable, and scalable
            development services that empower businesses to thrive in the digital age. We believe every business
            deserves software that works as hard as they do.
          </p>
        </div>
      </div>
    </section>
  )
}
