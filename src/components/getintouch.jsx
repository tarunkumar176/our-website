import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, BarChart3, Globe, Zap, CheckCircle, Code, Smartphone, Database, Cloud, Layout, Search, Settings, Users, TrendingUp, Shield, Monitor, Palette, Layers, Server, ChevronRight,Twitter, Linkedin, Github  } from 'lucide-react';
import Header from "./header.jsx";
import Footer from "./footer.jsx";


export default function GetInTouch() {
  return (
    <section id="contact" className="py-24 relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-sky-900/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl"></div>
      <Header/>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello?  
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex justify-center">
        <form className="w-full max-w-xl bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-xl">
            <div className="mb-6">
            <label className="block text-slate-300 mb-2">Your Name</label>
            <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white focus:border-blue-500 outline-none transition-colors"
            />
            </div>

            <div className="mb-6">
            <label className="block text-slate-300 mb-2">Your Email</label>
            <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white focus:border-blue-500 outline-none transition-colors"
            />
            </div>

          <div className="mb-6">
            <label className="block text-slate-300 mb-2">Service required</label>
            <input
                type="text"
                placeholder="Enter the required service"
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white focus:border-blue-500 outline-none transition-colors"
            />
            </div>

            <div className="mb-6">
            <label className="block text-slate-300 mb-2">Message</label>
            <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white focus:border-blue-500 outline-none transition-colors resize-none"
            ></textarea>
            </div>

            <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
            Send Message
            </button>
        </form>
        </div>
        
    </div>
      
    </section>
  );
}
