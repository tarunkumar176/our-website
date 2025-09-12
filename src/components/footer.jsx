import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ArrowRight, Clock, BarChart3, Zap, CheckCircle, Star, Menu, X, Globe, TrendingUp, Shield,Twitter, Linkedin, Dribbble, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 py-20 border-t border-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-sky-900/5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-600/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            
              <img
                src="/name.png"  // directly from public folder
                alt="TarVen Logo"
                className="w-40 h-auto cursor-pointer"
              />
            
            <p className="text-slate-300 mb-8 leading-relaxed text-lg">
              We specialize in lightning-fast website development and comprehensive business management solutions. 
              Transform your business with our innovative digital solutions.
            </p>

            {/* Newsletter Signup */}
            {/*<div className="mb-8">
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
            </div>*/}

            <div className="flex space-x-4">
            {/* Social Icons */}
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-200">
                <Twitter className="w-5 h-5 text-slate-400 hover:text-white" />
            </a>

            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-200">
                <Linkedin className="w-5 h-5 text-slate-400 hover:text-white" />
            </a>

            <a href="https://dribbble.com/yourprofile" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-200">
                <Dribbble className="w-5 h-5 text-slate-400 hover:text-white" />
            </a>

            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-200">
                <Github className="w-5 h-5 text-slate-400 hover:text-white" />
            </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">Our Services</a></li>
              <li><a href="#whyus" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">Why us</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">About</a></li>
            
              
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>Email: <a href="mailto:hello@tarven.com" className="text-blue-400">hello@tarven.com</a></li>
              <li>Phone: <a href="tel:+919876543210" className="text-blue-400">+91 98765 43210</a></li>
              <li>Address: <span className="text-slate-300">Visakhapatnam, Andhra Pradesh, India</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-center lg:text-left">
              © 2025 TarVen. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors text-sm">Cookie Policy</a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
