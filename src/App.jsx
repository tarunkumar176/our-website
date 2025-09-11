import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, BarChart3, Zap, CheckCircle, Star, Menu, X, Globe, TrendingUp, Shield } from 'lucide-react';

const TarVenPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "24-Hour Portfolio Websites",
      description: "Lightning-fast delivery of stunning portfolio websites for local shops and businesses. From concept to launch in just one day.",
      features: ["Responsive Design", "SEO Optimized", "Custom Branding", "Mobile-First"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Management Software",
      description: "Comprehensive software solutions for supermarkets and retail businesses with advanced analytics and reporting capabilities.",
      features: ["Real-time Analytics", "Custom Reports", "Inventory Management", "Financial Tracking"]
    }
  ];

  const stats = [
    { number: "24", label: "Hour Delivery", suffix: "hrs" },
    { number: "150+", label: "Websites Delivered", suffix: "" },
    { number: "99.9%", label: "Uptime Guarantee", suffix: "%" },
    { number: "50+", label: "Happy Clients", suffix: "" }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      business: "Mitchell's Boutique",
      text: "TarVen delivered our website in under 20 hours. The quality exceeded our expectations and our online sales tripled!"
    },
    {
      name: "David Chen",
      business: "Chen's Supermarket",
      text: "Their business management software revolutionized our operations. The analytics dashboard is incredibly intuitive."
    },
    {
      name: "Maria Rodriguez",
      business: "Rodriguez Electronics",
      text: "Professional, fast, and reliable. TarVen transformed our digital presence completely."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
              TarVen
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Services</a>
              <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">About</a>
              <a href="#testimonials" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Testimonials</a>
              <button className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
            <div className="px-6 py-4 space-y-4">
              <a href="#services" className="block text-slate-300 hover:text-blue-400 transition-colors">Services</a>
              <a href="#about" className="block text-slate-300 hover:text-blue-400 transition-colors">About</a>
              <a href="#testimonials" className="block text-slate-300 hover:text-blue-400 transition-colors">Testimonials</a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-sky-600 px-6 py-2 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-sky-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8 inline-flex items-center px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700">
            <Zap className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm text-slate-300">Lightning-fast digital solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-sky-200 bg-clip-text text-transparent">
              Digital Excellence
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Delivered Fast
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            We build stunning portfolio websites in 24 hours and create powerful business management software 
            that transforms how supermarkets and retail businesses operate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Start Your Project
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-slate-700 rounded-full text-lg font-medium hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Our Premium Services
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We specialize in rapid website development and comprehensive business management solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-sky-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-600/20 to-sky-600/20 rounded-xl text-blue-400 mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-slate-400">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <button className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                      Learn More 
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Why Choose TarVen?
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                We combine cutting-edge technology with lightning-fast delivery to help businesses establish 
                their digital presence and optimize their operations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-600/20 rounded-lg mr-4 mt-1">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">24-Hour Delivery Promise</h3>
                    <p className="text-slate-400">Your website will be live within 24 hours, guaranteed.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-sky-600/20 rounded-lg mr-4 mt-1">
                    <TrendingUp className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Data-Driven Solutions</h3>
                    <p className="text-slate-400">Advanced analytics and reporting to grow your business.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-sky-600/20 rounded-lg mr-4 mt-1">
                    <Shield className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Enterprise-Grade Security</h3>
                    <p className="text-slate-400">Your data is protected with industry-leading security measures.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-sky-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                    <div className="text-slate-400 text-sm">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-sky-400 mb-2">24/7</div>
                    <div className="text-slate-400 text-sm">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-sky-400 mb-2">5★</div>
                    <div className="text-slate-400 text-sm">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                    <div className="text-slate-400 text-sm">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-sky-900/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-sky-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-blue-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-slate-400 text-sm">{testimonial.business}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-slate-950 to-sky-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Join the growing number of businesses that trust TarVen for their digital transformation needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Get Started Today
            </button>
            <button className="px-10 py-4 border-2 border-slate-700 rounded-full text-lg font-medium hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-900 to-slate-950 py-20 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-sky-900/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-600/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent mb-6">
                TarVen
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                We specialize in lightning-fast website development and comprehensive business management solutions. 
                Transform your business with our innovative digital solutions.
              </p>
              
              {/* Newsletter Signup */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <button className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 px-6 py-3 rounded-lg text-white font-medium transition-all duration-200 transform hover:scale-105 whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-200 group">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-200 group">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-200 group">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.180 1.896-.960 6.728-.960 6.728-.405 3.056-1.512 3.592-2.808 3.592-.696 0-1.32-.192-1.896-.576-.384-.24-.72-.48-1.044-.744-.06-.048-.12-.096-.168-.144-.048-.048-.084-.096-.12-.144-.252-.336-.42-.696-.42-1.056 0-.024 0-.06.012-.084.609-6.792.609-6.792.609-6.792-.06-.528-.06-1.044.12-1.512.24-.624.72-1.044 1.32-1.224.12-.036.252-.06.384-.06.756 0 1.44.36 1.872.936.216.288.36.624.432.984z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-200 group">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.1.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12.013C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Our Services
                </a></li>
                <li><a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </a></li>
                <li><a href="#testimonials" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Testimonials
                </a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Portfolio
                </a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Blog
                </a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 mt-1 mr-3 text-blue-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-slate-500 text-sm block">Email us</span>
                    <a href="mailto:hello@tarven.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      hello@tarven.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 mt-1 mr-3 text-blue-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-slate-500 text-sm block">Call us</span>
                    <a href="tel:+919876543210" className="text-blue-400 hover:text-blue-300 transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 mt-1 mr-3 text-blue-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-slate-500 text-sm block">Visit us</span>
                    <span className="text-slate-300">
                      Visakhapatnam<br />Andhra Pradesh, India
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-800/50 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="text-slate-400 text-center lg:text-left">
                © 2025 TarVen. All rights reserved. Made with ❤️ in India
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors text-sm">
                  Cookie Policy
                </a>
                <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors text-sm">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TarVenPortfolio;