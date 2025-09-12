import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, BarChart3, Zap, CheckCircle, Star, Menu, X, Globe, TrendingUp, Shield, Heart, Target, Rocket, MapPin, Users, Code  } from 'lucide-react';
import { Link } from "react-router-dom";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import GetInTouch from "../components/getintouch.jsx";

const Homepage = () => {
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
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Full Stack Web & Mobile apps",
      description:"End-to-end development of scalable, high-performance web and mobile applications tailored for businesses and startups.",
      features: ["Cross-Platform Support", "Scalable Architecture", "Modern UI/UX", "API Integration"]

    }
  ];

  const stats = [
    { number: "24", label: "Hour Delivery", suffix: "hrs" },
    { number: "10+", label: "Websites Delivered", suffix: "" },
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
    const values = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Simple",
      description: "Technology shouldn't be complicated"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Affordable",
      description: "Quality solutions within your budget"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Impactful",
      description: "Solutions that drive real growth"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Header/>

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
              We Code
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              You Grow
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            We build stunning portfolio websites in 24 hours and create powerful business management software 
            that transforms how supermarkets and retail businesses operate.
          </p>
          
          {/*<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Start Your Project
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-slate-700 rounded-full text-lg font-medium hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
              View Our Work
            </button>
          </div>*/}
          <Link to="/contact">
                <button className="group bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-2xl">
              
                  Get Started
                </button>
              </Link>
        </div>
      </section>

      {/* Stats Section */}
      {/*<section className="py-20 bg-slate-900/50">
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
      </section>*/}

      {/* Services Section */}
      <section id="services" className="py-15 relative">
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

          <div className="grid md:grid-cols-3 gap-12">
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

                  
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 text-white font-medium hover:from-blue-700 hover:to-sky-700 transition-all shadow-lg"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* why us section */}
      <section id="whyus" className="py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
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
                    <h3 className="text-lg font-semibold text-white mb-2">Lightning-Fast Delivery</h3>
                    <p className="text-slate-400">We specialize in building websites and applications in record time without compromising on quality..</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-sky-600/20 rounded-lg mr-4 mt-1">
                    <TrendingUp className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Data-Driven Solutions</h3>
                    <p className="text-slate-400">Our solutions are designed to be simple, easy-to-use, and effective for small shops, startups, and enterprises with advanced analytics and reporting to grow your business.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-sky-600/20 rounded-lg mr-4 mt-1">
                    <Shield className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Full-Stack Expertise</h3>
                    <p className="text-slate-400">From sleek frontend designs to powerful backend systems and mobile apps — we deliver complete end-to-end solutions.</p>
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
                    <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
                    <div className="text-slate-400 text-sm">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
        {/* About TarVen Section */}    
            <section id="about" className="py-24 bg-slate-900/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-sky-900/10"></div>
            <div className="absolute top-20 right-10 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-20 w-80 h-80 bg-sky-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Main Heading */}
                <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    About TarVen
                </h2>
                <p className="text-xl text-blue-400 font-medium italic max-w-3xl mx-auto">
                    Empowering Local Businesses & Startups with Technology
                </p>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
                {/* Left Column - Story & What We Do */}
                <div className="space-y-10">
                    {/* Who We Are */}
                    <div className="group">
                    <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-blue-600/30 transition-all duration-300 group-hover:bg-slate-800/50">
                        <div className="flex items-center mb-6">
                        <div className="p-3 bg-gradient-to-r from-blue-600/20 to-sky-600/20 rounded-xl text-blue-400 mr-4">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Who We Are</h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-lg">
                        At <span className="text-blue-400 font-semibold">TarVen</span>, we are a passionate team of developers and problem-solvers dedicated to helping businesses thrive in the digital era. We believe that technology should be <span className="text-blue-300 font-medium">simple, affordable, and impactful</span> — whether you are a local shop owner, a startup founder, or a growing enterprise.
                        </p>
                    </div>
                    </div>

                    {/* What We Do */}
                    <div className="group">
                    <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-sky-600/30 transition-all duration-300 group-hover:bg-slate-800/50">
                        <div className="flex items-center mb-6">
                        <div className="p-3 bg-gradient-to-r from-sky-600/20 to-blue-600/20 rounded-xl text-sky-400 mr-4">
                            <Code className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">What We Do</h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-lg">
                        We specialize in <span className="text-sky-400 font-semibold">lightning-fast website development, full-stack applications, and business management software</span> tailored to your unique needs. From creating engaging websites to building powerful backend systems and mobile apps, we deliver <span className="text-sky-300 font-medium">end-to-end solutions</span> that drive growth and efficiency.
                        </p>
                    </div>
                    </div>

                    {/* Core Values */}
                    <div className="grid grid-cols-3 gap-4">
                    {values.map((value, index) => (
                        <div key={index} className="text-center group">
                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-600/50 transition-all duration-300 group-hover:bg-slate-800/70">
                            <div className="flex justify-center mb-4">
                            <div className="p-3 bg-gradient-to-r from-blue-600/20 to-sky-600/20 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors">
                                {value.icon}
                            </div>
                            </div>
                            <h4 className="text-white font-semibold mb-2">{value.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Right Column - Why We Started & Mission/Vision */}
                <div className="space-y-10">
                    {/* Why We Started */}
                    <div className="group">
                    <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-blue-600/30 transition-all duration-300 group-hover:bg-slate-800/50">
                        <div className="flex items-center mb-6">
                        <div className="p-3 bg-gradient-to-r from-blue-600/20 to-sky-600/20 rounded-xl text-blue-400 mr-4">
                            <Heart className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Why We Started</h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-lg">
                        Our journey began with a mission: to <span className="text-blue-400 font-semibold">support local businesses</span> like supermarkets, kirana stores, salons, and startups by giving them <span className="text-blue-300 font-medium">easy-to-use digital tools</span>. Most small business owners struggle with technology — we make it <span className="text-sky-400 font-medium">simple, accessible, and scalable</span>.
                        </p>
                        
                        <div className="mt-6 flex flex-wrap gap-3">
                        {['Supermarkets', 'Kirana Stores', 'Salons', 'Startups', 'Local Shops'].map((business, index) => (
                            <span key={index} className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30">
                            {business}
                            </span>
                        ))}
                        </div>
                    </div>
                    </div>

                    {/* Vision & Mission */}
                    <div className="space-y-6">
                    {/* Vision */}
                    <div className="group">
                        <div className="bg-gradient-to-br from-blue-600/10 to-sky-600/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-600/20 hover:border-blue-600/40 transition-all duration-300 group-hover:from-blue-600/15 group-hover:to-sky-600/15">
                        <div className="flex items-center mb-4">
                            <div className="p-3 bg-gradient-to-r from-blue-600/30 to-sky-600/30 rounded-xl text-blue-300 mr-4">
                            <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-blue-200">Our Vision</h3>
                        </div>
                        <p className="text-blue-100 leading-relaxed">
                            To become the go-to technology partner for small businesses and startups across <span className="text-blue-300 font-semibold">India and beyond</span>.
                        </p>
                        </div>
                    </div>

                    {/* Mission */}
                    <div className="group">
                        <div className="bg-gradient-to-br from-sky-600/10 to-blue-600/10 backdrop-blur-sm p-8 rounded-2xl border border-sky-600/20 hover:border-sky-600/40 transition-all duration-300 group-hover:from-sky-600/15 group-hover:to-blue-600/15">
                        <div className="flex items-center mb-4">
                            <div className="p-3 bg-gradient-to-r from-sky-600/30 to-blue-600/30 rounded-xl text-sky-300 mr-4">
                            <Rocket className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-sky-200">Our Mission</h3>
                        </div>
                        <p className="text-sky-100 leading-relaxed">
                            To provide <span className="text-sky-300 font-semibold">affordable, innovative, and user-friendly solutions</span> that empower businesses to grow faster in the digital world.
                        </p>
                        </div>
                    </div>
                    </div>

                    {/* Location Badge */}
                    {/*<div className="flex justify-center">
                    <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700">
                        <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                        <span className="text-slate-300">Based in <span className="text-blue-400 font-medium">Visakhapatnam, India</span></span>
                    </div>
                    </div>*/}
                </div>
                </div>

            </div>
        </section>

      {/* Testimonials */}
      {/*<section id="testimonials" className="py-24 relative overflow-hidden">
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
      </section>*/}

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
            <Link to="/contact">
            <button className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Get Started Today
            </button>
            </Link>
            
          </div>
        </div>
      </section>
      
      <Footer/>

    </div>
  );
};

export default Homepage;