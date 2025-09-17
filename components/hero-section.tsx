"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-12">
          {/* Minimal Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs font-medium">
            <Code className="h-3 w-3" />
            SOFTWARE THAT SCALES
          </div>

          {/* Colossal Main Statement */}
          <div className="space-y-4">
            <h1 className="text-colossal font-helvetica text-white text-shadow-dramatic">BUILD</h1>
            <h1 className="text-colossal font-helvetica text-white/20 text-outline -mt-8">DEPLOY</h1>
            <h1 className="text-colossal font-helvetica text-white -mt-8">SCALE</h1>
          </div>

          {/* Titan Supporting Text */}
          <div className="space-y-6 max-w-6xl mx-auto">
            <p className="text-titan font-helvetica text-white/60 font-weight-black tracking-tighter">SOFTWARE</p>
            <p className="text-mega font-helvetica text-white/40 tracking-tight -mt-4">THAT TRANSFORMS BUSINESSES</p>
          </div>

          {/* Service Categories - Giant Typography */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-16 max-w-6xl mx-auto">
            <div className="text-left space-y-2">
              <div className="text-huge font-helvetica text-white font-weight-black">POS</div>
              <p className="text-white/60 text-lg font-helvetica">Point of Sale Systems</p>
            </div>
            <div className="text-left space-y-2">
              <div className="text-huge font-helvetica text-white font-weight-black">APPS</div>
              <p className="text-white/60 text-lg font-helvetica">Full-Stack Applications</p>
            </div>
            <div className="text-left space-y-2">
              <div className="text-huge font-helvetica text-white font-weight-black">SITES</div>
              <p className="text-white/60 text-lg font-helvetica">24-Hour Deployments</p>
            </div>
          </div>

          {/* Minimal CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-16">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 text-lg px-12 py-6 h-auto font-helvetica font-semibold"
            >
              START PROJECT
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-12 py-6 h-auto border-2 border-white/20 bg-transparent text-white hover:bg-white/5 font-helvetica"
            >
              VIEW WORK
            </Button>
          </div>

          {/* Dramatic Stats */}
          <div className="grid grid-cols-3 gap-8 pt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-mega font-helvetica text-white font-weight-black">50+</div>
              <p className="text-white/40 font-helvetica text-sm tracking-wide">PROJECTS</p>
            </div>
            <div className="text-center">
              <div className="text-mega font-helvetica text-white font-weight-black">24H</div>
              <p className="text-white/40 font-helvetica text-sm tracking-wide">DEPLOYMENT</p>
            </div>
            <div className="text-center">
              <div className="text-mega font-helvetica text-white font-weight-black">100%</div>
              <p className="text-white/40 font-helvetica text-sm tracking-wide">SATISFACTION</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/30">
        <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
