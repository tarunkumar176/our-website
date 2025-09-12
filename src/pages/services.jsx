import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, BarChart3, Globe, Zap, CheckCircle, Code, Smartphone, Database, Cloud, Layout, Search, Settings, Users, TrendingUp, Shield, Monitor, Palette, Layers, Server, ChevronRight,Twitter, Linkedin, Github  } from 'lucide-react';
import { Link } from "react-router-dom";
import Header from "../components/header.jsx";
import GetInTouch from "../components/getintouch.jsx";


const ServicesPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainServices = [
    {
      id: 1,
      icon: <Code className="w-10 h-10" />,
      title: "Full Stack Web & Mobile Apps",
      subtitle: "Complete End-to-End Solutions",
      description: "Transform your business ideas into powerful digital experiences with our comprehensive full-stack development services. We build scalable, modern applications that grow with your business.",
      longDescription: "Our full-stack development approach covers every aspect of your digital product, from concept to deployment. We specialize in creating robust, scalable applications that deliver exceptional user experiences while maintaining high performance and security standards.",
      features: [
        {
          icon: <Layout className="w-6 h-6" />,
          title: "Modern UI/UX Design",
          description: "Intuitive, user-centered designs that engage and convert"
        },
        {
          icon: <Server className="w-6 h-6" />,
          title: "Scalable Backend Systems",
          description: "Robust server architecture that handles growth seamlessly"
        },
        {
          icon: <Database className="w-6 h-6" />,
          title: "Database Integration",
          description: "Optimized data management and storage solutions"
        },
        {
          icon: <Smartphone className="w-6 h-6" />,
          title: "Cross-Platform Mobile Apps",
          description: "Native-quality apps for both iOS and Android platforms"
        },
        {
          icon: <Cloud className="w-6 h-6" />,
          title: "Cloud Deployment",
          description: "Secure, scalable hosting with 99.9% uptime guarantee"
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Security & Performance",
          description: "Enterprise-grade security with lightning-fast performance"
        }
      ],
      whyChoose: [
        "End-to-end development from concept to deployment",
        "Modern tech stack including React, Node.js, and cloud services",
        "Agile development methodology for faster delivery",
        "Scalable architecture that grows with your business",
        "Ongoing maintenance and support",
        "Cost-effective compared to hiring in-house teams"
      ],
      idealFor: "Startups, SMEs, and enterprises looking for comprehensive digital solutions",
      
    },
    {
      id: 2,
      icon: <Globe className="w-10 h-10" />,
      title: "24-Hour Portfolio Websites",
      subtitle: "Lightning-Fast Professional Websites",
      description: "Get your professional online presence up and running in just 24 hours. Perfect for freelancers, professionals, and small businesses who need a stunning website quickly.",
      longDescription: "Our rapid website development service is designed for professionals who need a high-quality online presence without the typical weeks-long development cycle. We've streamlined our process to deliver beautiful, functional websites in record time.",
      features: [
        {
          icon: <Monitor className="w-6 h-6" />,
          title: "Responsive Design",
          description: "Perfect viewing experience across all devices and screen sizes"
        },
        {
          icon: <Palette className="w-6 h-6" />,
          title: "Personalized Layouts",
          description: "Custom designs tailored to your brand and industry"
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "24-Hour Delivery",
          description: "From brief to live website in just one day"
        },
        {
          icon: <Search className="w-6 h-6" />,
          title: "SEO-Ready Structure",
          description: "Optimized for search engines from day one"
        },
        {
          icon: <Layers className="w-6 h-6" />,
          title: "Modern Technologies",
          description: "Built with latest web standards and best practices"
        },
        {
          icon: <Settings className="w-6 h-6" />,
          title: "Easy Content Management",
          description: "Simple tools to update your content without technical knowledge"
        }
      ],
      whyChoose: [
        "Fastest turnaround time in the industry",
        "Professional quality at affordable prices",
        "No compromise on design or functionality",
        "Mobile-first responsive design approach",
        "SEO optimization included as standard",
        "Free revisions until you're satisfied"
      ],
      idealFor: "Freelancers, consultants, artists, photographers, and small service providers",
      
    },
    {
      id: 3,
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Business Management Software",
      subtitle: "Custom Solutions for Operational Excellence",
      description: "Streamline your business operations with custom-built management software. From CRM to inventory management, we create solutions that fit your unique business needs.",
      longDescription: "Our business management software solutions are designed to eliminate operational bottlenecks and provide you with the insights needed to make data-driven decisions. We build custom systems tailored to your specific industry and business processes.",
      features: [
        {
          icon: <Users className="w-6 h-6" />,
          title: "CRM Systems",
          description: "Manage customer relationships and sales pipelines effectively"
        },
        {
          icon: <BarChart3 className="w-6 h-6" />,
          title: "Inventory Management",
          description: "Real-time stock tracking and automated reorder alerts"
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Analytics & Reporting",
          description: "Comprehensive dashboards with actionable business insights"
        },
        {
          icon: <Settings className="w-6 h-6" />,
          title: "HR Management",
          description: "Employee management, attendance, and payroll systems"
        },
        {
          icon: <Database className="w-6 h-6" />,
          title: "Data Integration",
          description: "Seamless integration with existing business tools and systems"
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Security & Compliance",
          description: "Enterprise-grade security with industry compliance standards"
        }
      ],
      whyChoose: [
        "Tailored to your specific business processes",
        "Scalable solutions that grow with your business",
        "Integration with existing systems and tools",
        "Real-time analytics and reporting capabilities",
        "User-friendly interfaces for all skill levels",
        "Ongoing support and system maintenance"
      ],
      idealFor: "Supermarkets, retail stores, service businesses, and growing enterprises",
      
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header/>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-sky-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* <div className="mb-8 inline-flex items-center px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700">
            <Zap className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm text-slate-300">Comprehensive Digital Solutions</span>
          </div> */}
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-sky-200 bg-clip-text text-transparent">
              Our Premium
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            From rapid website development to comprehensive business solutions, we deliver technology 
            that transforms your business operations and accelerates growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div key={service.id} className="group">
                {/* Service Header */}
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600/20 to-sky-600/20 rounded-2xl text-blue-400 mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    {service.title}
                  </h2>
                  <p className="text-xl text-blue-400 font-medium mb-4">{service.subtitle}</p>
                  <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    {service.longDescription}
                  </p>
                </div>

                {/* Service Details */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Left Column - Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-8">Key Features & Capabilities</h3>
                    <div className="space-y-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start group/feature">
                          <div className="flex-shrink-0 p-3 bg-slate-800/50 rounded-lg mr-4 group-hover/feature:bg-blue-600/20 transition-colors">
                            <div className="text-blue-400 group-hover/feature:text-blue-300 transition-colors">
                              {feature.icon}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                            <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Why Choose & Details */}
                  <div className="space-y-8">
                    {/* Why Choose This Service */}
                    <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <CheckCircle className="w-6 h-6 text-blue-400 mr-3" />
                        Why Choose This Service?
                      </h3>
                      <ul className="space-y-3">
                        {service.whyChoose.map((reason, idx) => (
                          <li key={idx} className="flex items-start text-slate-300">
                            <ChevronRight className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Service Details */}
                    <div className="grid grid-cols-1 gap-6">
                      <div className="bg-gradient-to-br from-blue-600/10 to-sky-600/10 backdrop-blur-sm p-6 rounded-xl border border-blue-600/20">
                        <h4 className="text-lg font-semibold text-blue-200 mb-2">Ideal For</h4>
                        <p className="text-blue-100">{service.idealFor}</p>
                      </div>
                      
                      
                    </div>

                    {/* CTA Button */}
                    <Link to="/contact">
                        <button className="w-full bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl group">
                            Get Started with {service.title.split(" ")[0]} {service.title.split(" ")[1]}
                            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                  </div>
                </div>

                {/* Divider (except for last service) */}
                {index < mainServices.length - 1 && (
                  <div className="mt-24 pt-12 border-t border-slate-800"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Our Work Process
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A streamlined approach that ensures quality delivery and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs, goals, and requirements" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline" },
              { step: "03", title: "Development", description: "Building your solution with regular updates" },
              { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto group-hover:scale-110 transition-transform">
                    {process.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-blue-600/50 to-sky-600/50 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                <p className="text-slate-400">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/*<section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-slate-950 to-sky-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Choose the service that fits your needs and let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Schedule a Consultation
            </button>
            <button className="px-10 py-4 border-2 border-slate-700 rounded-full text-lg font-medium hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>*/}

      {/* Footer */}
        <footer className="bg-slate-950 border-t border-slate-800 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left - Copyright */}
            <p className="text-slate-400 text-sm text-center sm:text-left">
            © 2025 TarVen. All rights reserved.
            </p>

            {/* Right - Social Icons */}
            <div className="flex space-x-4">
            <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all"
            >
                <Twitter className="w-4 h-4 text-slate-400 hover:text-white" />
            </a>

            <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all"
            >
                <Linkedin className="w-4 h-4 text-slate-400 hover:text-white" />
            </a>

            <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all"
            >
                <Github className="w-4 h-4 text-slate-400 hover:text-white" />
            </a>
            </div>
        </div>
        </footer>
    </div>
  );
};

export default ServicesPage;