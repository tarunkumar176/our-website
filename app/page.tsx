"use client"

import type React from "react"

import { useState, useEffect } from "react"

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Get all sections
      const heroSection = document.querySelector("section:nth-child(2)") as HTMLElement
      const servicesSection = document.getElementById("services") as HTMLElement
      const statementSection = document.querySelector("section:nth-child(4)") as HTMLElement
      const processSection = document.getElementById("process") as HTMLElement
      const contactSection = document.getElementById("contact") as HTMLElement
      const footerSection = document.querySelector("footer") as HTMLElement

      if (!heroSection || !servicesSection || !statementSection || !processSection || !contactSection || !footerSection)
        return

      // Calculate section positions
      const heroTop = heroSection.offsetTop
      const heroBottom = heroTop + heroSection.offsetHeight
      const servicesTop = servicesSection.offsetTop
      const servicesBottom = servicesTop + servicesSection.offsetHeight
      const statementTop = statementSection.offsetTop
      const statementBottom = statementTop + statementSection.offsetHeight
      const processTop = processSection.offsetTop
      const processBottom = processTop + processSection.offsetHeight
      const contactTop = contactSection.offsetTop
      const contactBottom = contactTop + contactSection.offsetHeight

      const currentScroll = scrollY + windowHeight / 2

      // Apply smooth transitions between sections
      if (currentScroll >= servicesBottom - 100 && currentScroll <= statementTop + 100) {
        // Transition from dark services to light statement
        const progress = Math.min(1, Math.max(0, (currentScroll - (servicesBottom - 100)) / 200))
        document.body.style.backgroundColor = `rgb(${progress * 255}, ${progress * 255}, ${progress * 255})`
      } else if (currentScroll >= statementBottom - 100 && currentScroll <= processTop + 100) {
        // Transition from light statement to dark process
        const progress = Math.min(1, Math.max(0, (currentScroll - (statementBottom - 100)) / 200))
        document.body.style.backgroundColor = `rgb(${255 - progress * 255}, ${255 - progress * 255}, ${255 - progress * 255})`
      } else if (currentScroll >= processBottom - 100 && currentScroll <= contactTop + 100) {
        // Transition from dark process to light contact
        const progress = Math.min(1, Math.max(0, (currentScroll - (processBottom - 100)) / 200))
        document.body.style.backgroundColor = `rgb(${progress * 255}, ${progress * 255}, ${progress * 255})`
      } else if (currentScroll >= contactBottom - 100) {
        // Transition from light contact to dark footer
        const progress = Math.min(1, Math.max(0, (currentScroll - (contactBottom - 100)) / 200))
        document.body.style.backgroundColor = `rgb(${255 - progress * 255}, ${255 - progress * 255}, ${255 - progress * 255})`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMenuOpen(false)
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <main className="bg-black text-white overflow-x-hidden transition-colors duration-500">
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-black/90 border border-gray-700 rounded-full px-8 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-white text-xl font-black tracking-tight">SHIPZERO</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              WORK
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              PROCESS
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-700">
            <div className="space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="block text-gray-400 hover:text-white text-sm transition-colors"
              >
                WORK
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="block text-gray-400 hover:text-white text-sm transition-colors"
              >
                PROCESS
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-gray-400 hover:text-white text-sm transition-colors"
              >
                CONTACT
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="min-h-screen flex items-center px-8 relative pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-colossal mb-8">
            <div className="overflow-hidden">
              <span className="slide-up slide-up-1 text-white animate-fade-in-up">BUILD</span>
            </div>
            <div className="overflow-hidden">
              <span className="slide-up slide-up-2 text-gray-600 animate-fade-in-up animation-delay-200">DEPLOY</span>
            </div>
            <div className="overflow-hidden">
              <span className="slide-up slide-up-3 text-white animate-fade-in-up animation-delay-400">SCALE</span>
            </div>
          </h1>

          <p className="text-2xl md:text-3xl font-light text-gray-400 ml-8 mb-16 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-600">
            We create software that transforms businesses through three core capabilities.
          </p>

          <button
            onClick={() => scrollToSection("services")}
            className="ml-8 text-xl font-semibold text-white border-b-2 border-white pb-2 hover:bg-white hover:text-black hover:px-8 hover:py-4 hover:border-none hover:ml-0 transition-all duration-300 animate-fade-in-up animation-delay-800"
          >
            SEE OUR WORK
          </button>
        </div>
      </section>

      <section id="services" className="py-40 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {/* Service 01 - Point of Sale */}
            <div className="relative border-b border-gray-800 pb-32">
              <div className="absolute left-0 top-0 text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-gray-900 leading-none select-none">
                01
              </div>
              <div className="ml-32 md:ml-48 lg:ml-64 pt-16">
                <h3 className="text-[4rem] md:text-[6rem] lg:text-[8rem] text-white mb-8 leading-none font-black animate-fade-in-up">
                  POINT OF
                  <br />
                  SALE
                </h3>
                <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12 max-w-2xl">
                  Complete retail ecosystems with inventory management, analytics, and seamless payment processing that
                  scale with your business.
                </p>
                <ul className="space-y-4 text-lg text-gray-300 font-medium">
                  <li className="flex items-center">
                    <span className="text-white mr-8">—</span>
                    Real-time inventory tracking
                  </li>
                  <li className="flex items-center">
                    <span className="text-white mr-8">—</span>
                    Multi-payment gateway integration
                  </li>
                  <li className="flex items-center">
                    <span className="text-white mr-8">—</span>
                    Advanced reporting & analytics
                  </li>
                  <li className="flex items-center">
                    <span className="text-white mr-8">—</span>
                    Cloud synchronization
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 02 - Full Stack Development */}
            <div className="relative border-b border-gray-800 pb-32">
              <div className="absolute left-0 top-0 text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-gray-900 leading-none select-none">
                02
              </div>
              <div className="ml-32 md:ml-48 lg:ml-64 pt-16">
                <h3 className="text-[4rem] md:text-[6rem] lg:text-[8rem] text-gray-600 mb-8 leading-none font-black animate-fade-in-up">
                  FULL STACK
                  <br />
                  DEVELOPMENT
                </h3>
                <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12 max-w-2xl">
                  End-to-end mobile applications and web platforms built with cutting-edge technologies and scalable
                  architecture.
                </p>
                <ul className="space-y-4 text-lg text-gray-300 font-medium">
                  <li className="flex items-center">
                    <span className="text-white mr-8">—</span>
                    Cross-platform mobile apps
                  </li>
                  <li className="flex items-center">
                    <span className="text-white mr-8">—</span>
                    Progressive web applications
                  </li>
                  <li className="flex items-center">
                    <span className="text-white mr-8">—</span>
                    API development & integration
                  </li>
                  <li className="flex items-center">
                    <span className="text-white mr-8">—</span>
                    Cloud infrastructure setup
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 03 - Rapid Deploy */}
            <div className="relative">
              <div className="absolute left-0 top-0 text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-gray-900 leading-none select-none">
                03
              </div>
              <div className="ml-32 md:ml-48 lg:ml-64 pt-16">
                <h3 className="text-[4rem] md:text-[6rem] lg:text-[8rem] text-white mb-8 leading-none font-black animate-fade-in-up">
                  RAPID
                  <br />
                  DEPLOY
                </h3>
                <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12 max-w-2xl">
                  Professional websites and landing pages deployed within 24 hours. Perfect for portfolios, signup
                  pages, and quick launches.
                </p>
                <ul className="space-y-4 text-lg text-gray-300 font-medium">
                  <li className="flex items-center">
                    <span className="text-white mr-8">—</span>
                    24-hour deployment guarantee
                  </li>
                  <li className="flex items-center">
                    <span className="text-white mr-8">—</span>
                    Mobile-responsive design
                  </li>
                  <li className="flex items-center">
                    <span className="text-white mr-8">—</span>
                    SEO optimization
                  </li>
                  <li className="flex items-center">
                    <span className="text-white mr-8">—</span>
                    Performance optimized
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-60 px-8 bg-white text-black text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-giant md:text-titan leading-none font-black">
            WE DON'T JUST CODE
            <br />
            WE{" "}
            <span className="relative">
              ARCHITECT
              <span className="absolute bottom-0 left-0 right-0 h-2/5 bg-black -z-10"></span>
            </span>
            <br />
            DIGITAL FUTURES
          </h2>
        </div>
      </section>

      <section id="process" className="py-40 px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-giant md:text-titan text-gray-800 text-center mb-24 font-black">PROCESS</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {/* Step 1 - Discover */}
            <div className="text-center group hover:-translate-y-4 transition-transform duration-300">
              <div className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-gray-900 leading-none mb-12">
                1
              </div>
              <h3 className="text-huge md:text-mega text-white mb-6 font-black leading-none">DISCOVER</h3>
              <p className="text-lg text-gray-400 font-light">We dive deep into your business needs and challenges</p>
            </div>

            {/* Step 2 - Create */}
            <div className="text-center group hover:-translate-y-4 transition-transform duration-300">
              <div className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-gray-900 leading-none mb-12">
                2
              </div>
              <h3 className="text-huge md:text-mega text-gray-600 mb-6 font-black leading-none">CREATE</h3>
              <p className="text-lg text-gray-400 font-light">
                We architect and build solutions that exceed expectations
              </p>
            </div>

            {/* Step 3 - Deliver */}
            <div className="text-center group hover:-translate-y-4 transition-transform duration-300">
              <div className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-gray-900 leading-none mb-12">
                3
              </div>
              <h3 className="text-huge md:text-mega text-white mb-6 font-black leading-none">DELIVER</h3>
              <p className="text-lg text-gray-400 font-light">We deploy and scale your software for maximum impact</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-60 px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-giant md:text-titan font-black leading-none mb-16 animate-fade-in-up">
            READY TO BUILD
            <br />
            SOMETHING GREAT?
          </h2>
          <p className="text-2xl md:text-3xl font-light text-gray-600 max-w-4xl mx-auto mb-24 animate-fade-in-up animation-delay-200">
            Let's discuss your project and create software that transforms your business.
          </p>

          <div className="max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            <form onSubmit={handleEmailSubmit} className="flex items-center bg-black rounded-full p-2 shadow-2xl">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-transparent text-white placeholder-gray-400 px-6 py-4 text-lg focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                SEND
              </button>
            </form>
            <p className="text-gray-600 text-lg mt-8 font-light">
              Send us your email and we will get back to you within 24 hours
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white relative overflow-hidden rounded-t-3xl">
        {/* Giant SHIPZERO Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[12rem] md:text-[20rem] lg:text-[30rem] xl:text-[40rem] font-black text-gray-900 leading-none select-none opacity-50">
            SHIPZERO
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="text-4xl font-black mb-8 tracking-tight animate-fade-in-up">SHIPZERO</div>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-md animate-fade-in-up animation-delay-200">
                Transforming businesses through software that builds, deploys, and scales. From concept to production in
                record time.
              </p>
              <div className="flex items-center gap-4 animate-fade-in-up animation-delay-400">
                <span className="text-gray-400 text-lg">hello@shipzero.dev</span>
              </div>
            </div>

            {/* Services */}
            <div className="animate-fade-in-up animation-delay-600">
              <h4 className="text-2xl font-bold mb-8 uppercase tracking-tight">Services</h4>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-400 hover:text-white text-lg transition-colors"
                  >
                    Point of Sale
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-400 hover:text-white text-lg transition-colors"
                  >
                    Full Stack Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-400 hover:text-white text-lg transition-colors"
                  >
                    Rapid Deploy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-400 hover:text-white text-lg transition-colors"
                  >
                    Consulting
                  </button>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="animate-fade-in-up animation-delay-800">
              <h4 className="text-2xl font-bold mb-8 uppercase tracking-tight">Company</h4>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => scrollToSection("process")}
                    className="text-gray-400 hover:text-white text-lg transition-colors"
                  >
                    Process
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-400 hover:text-white text-lg transition-colors"
                  >
                    Work
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-400 hover:text-white text-lg transition-colors"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-lg transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-12 flex flex-col lg:flex-row justify-between items-center gap-8 animate-fade-in-up animation-delay-1000">
            <p className="text-gray-500 text-lg">© 2024 SHIPZERO. All rights reserved.</p>
            <div className="flex items-center gap-12">
              <a href="#" className="text-gray-500 hover:text-white text-lg transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-lg transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
