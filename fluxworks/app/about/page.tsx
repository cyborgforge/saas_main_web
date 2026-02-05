"use client";

import { useState } from "react";
import Link from "next/link";

export default function AboutPage() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      quote: "I love working at CloudSite because of the people and the ability to work with multiple teams. Having the ability to work cross-functionally and being part of something growing is so exciting.",
      name: "Courtney Jamison",
      role: "Enterprise Customer Success Manager",
      location: "Cambridge"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative">
        <div className="bg-[#e8f0f0] mx-6 mt-4 rounded-full px-5 py-2.5 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-base font-bold text-gray-900">CloudSite</Link>
            <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
              <Link href="/" className="text-sm text-gray-900 hover:text-gray-700 font-medium">Home</Link>
              <Link href="/product" className="text-sm text-gray-900 hover:text-gray-700 font-medium">Product</Link>
              <Link href="/about" className="text-sm text-gray-900 hover:text-gray-700 font-medium">About</Link>
              <Link href="/contact" className="text-sm text-gray-900 hover:text-gray-700 font-medium">Contact</Link>
            </nav>
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <button 
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="text-sm text-gray-900 hover:text-gray-700 flex items-center gap-1 px-4 py-1.5 hover:bg-black/5 rounded-full transition-colors font-medium"
                >
                  Log In
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors font-medium">
                      Log In
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors font-medium">
                      Sign Up
                    </button>
                  </div>
                )}
              </div>
              <button className="bg-[#4a90a4] text-white text-sm px-5 py-2 rounded-full hover:bg-[#3d7a8a] font-medium">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-[#e0eef4] text-[#4a90a4] text-xs font-medium px-4 py-1.5 rounded-full">
              About CloudSite
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* 3D Speech Bubble Decoration */}
              <div className="absolute -top-8 -left-8 w-24 h-20 bg-[#94b8d4] rounded-2xl transform -rotate-12 opacity-80"></div>
              
              <h1 className="font-serif text-4xl md:text-5xl font-normal text-gray-900 leading-tight relative z-10">
                Building the future of business software
              </h1>
            </div>
            
            <div className="relative">
              {/* 3D Chat Bubble */}
              <div className="absolute -top-4 -right-4 w-32 h-28">
                <svg viewBox="0 0 120 100" fill="none" className="w-full h-full">
                  <path d="M10 20 Q10 10 20 10 L100 10 Q110 10 110 20 L110 70 Q110 80 100 80 L30 80 L20 95 L25 80 L20 80 Q10 80 10 70 Z" fill="#94b8d4" opacity="0.6"/>
                </svg>
              </div>
              
              <p className="text-gray-600 relative z-10">
                {"We're a team of passionate engineers, designers, and business experts dedicated to creating software that makes a difference. Our mission is to empower businesses of all sizes with enterprise-grade tools that are accessible, affordable, and easy to use."}
              </p>
              <p className="text-gray-600 mt-4 relative z-10">
                {"Founded in 2019, we've grown from a small startup to a trusted partner for over 1000 businesses worldwide. But we're just getting started."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section with Images */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-normal text-gray-900 mb-4">Our values</h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
            {"These values guide how we work together every day. They don't just sit in a dusty document—they evolve and change as our company grows, and we love rewarding teammates who best exemplify them (with prizes 🏆)."}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Values List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-[#4a90a4] mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Take pride in your work</h3>
                  <p className="text-gray-600 text-sm">{"Be bold and aspire for excellence. Let's build a lasting company."}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[#4a90a4] mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Be an owner</h3>
                  <p className="text-gray-600 text-sm">Owners sweep the floors and take out the trash. They do {"what's"} best for the customer and company, and are always accountable to their teammates.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[#4a90a4] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Always be learning</h3>
                  <p className="text-gray-600 text-sm">Improve every day; feedback and reflection will make us all better.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[#4a90a4] mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Empower others</h3>
                  <p className="text-gray-600 text-sm">{"We exist to empower customers; we'll succeed by empowering each other."}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[#4a90a4] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Embrace the journey</h3>
                  <p className="text-gray-600 text-sm">Appreciate the entire experience, win as a team, and have fun.</p>
                </div>
              </div>
            </div>

            {/* Team Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" 
                alt="Team collaboration" 
                className="rounded-2xl object-cover w-full h-40"
              />
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop" 
                alt="Team meeting" 
                className="rounded-2xl object-cover w-full h-40"
              />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" 
                alt="Team discussion" 
                className="rounded-2xl object-cover w-full h-40"
              />
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop" 
                alt="Team working" 
                className="rounded-2xl object-cover w-full h-40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-[#4a5568]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-6xl text-[#6b7a8c] mb-6">"</div>
          <p className="text-white text-lg md:text-xl mb-8">
            {testimonials[testimonialIndex].quote}
          </p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[#8a9db0] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">{testimonials[testimonialIndex].name}</div>
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  {testimonials[testimonialIndex].location}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                  </svg>
                  {testimonials[testimonialIndex].role}
                </span>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Our Values Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-normal text-center text-gray-900 mb-3">Our Values</h2>
          <p className="text-center text-gray-600 mb-12">The principles that guide everything we do.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Customer First */}
            <div className="border border-gray-200 rounded-2xl p-6">
              <div className="w-10 h-10 bg-[#e0eef4] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#4a90a4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Customer First</h3>
              <p className="text-gray-600 text-sm">Every decision we make starts with our customers. Their success is our success.</p>
            </div>

            {/* Innovation */}
            <div className="border border-gray-200 rounded-2xl p-6">
              <div className="w-10 h-10 bg-[#e0eef4] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#4a90a4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">We constantly push boundaries to deliver cutting-edge solutions that solve real problems.</p>
            </div>

            {/* Collaboration */}
            <div className="border border-gray-200 rounded-2xl p-6">
              <div className="w-10 h-10 bg-[#e0eef4] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#4a90a4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600 text-sm">{"We believe in the power of teamwork—both within our company and with our partners."}</p>
            </div>

            {/* Excellence */}
            <div className="border border-gray-200 rounded-2xl p-6">
              <div className="w-10 h-10 bg-[#e0eef4] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#4a90a4]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">We strive for excellence in everything we do, from code quality to customer support.</p>
            </div>

            {/* Integrity */}
            <div className="border border-gray-200 rounded-2xl p-6">
              <div className="w-10 h-10 bg-[#e0eef4] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#4a90a4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">We operate with transparency and honesty, building trust with every interaction.</p>
            </div>

            {/* Passion */}
            <div className="border border-gray-200 rounded-2xl p-6">
              <div className="w-10 h-10 bg-[#e0eef4] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#4a90a4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Passion</h3>
              <p className="text-gray-600 text-sm">We love what we do, and that passion drives us to create exceptional products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-16 bg-[#f5f9fa]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-normal text-center text-gray-900 mb-3">Our Journey</h2>
          <p className="text-center text-gray-600 mb-12">From a small startup to a global SaaS platform.</p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Decorative Elements */}
            <div className="relative h-80 hidden md:block">
              {/* Pie Chart */}
              <div className="absolute top-0 left-0 w-40 h-40">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#e0eef4" strokeWidth="20"/>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#4a90a4" strokeWidth="20" strokeDasharray="188.5 251.3" transform="rotate(-90 50 50)"/>
                </svg>
              </div>
              
              {/* Gear Icons */}
              <div className="absolute bottom-0 right-0 text-[#94b8d4] opacity-50">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"/>
                </svg>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#4a90a4]"></div>
              
              <div className="space-y-8">
                {/* 2019 */}
                <div className="relative pl-12">
                  <div className="absolute left-2 w-5 h-5 bg-[#4a90a4] rounded-full border-4 border-white"></div>
                  <div className="text-[#4a90a4] text-sm font-medium">2019</div>
                  <h3 className="font-semibold text-gray-900">Company Founded</h3>
                  <p className="text-gray-600 text-sm">CloudSite was born with a vision to simplify business operations.</p>
                </div>

                {/* 2020 */}
                <div className="relative pl-12">
                  <div className="absolute left-2 w-5 h-5 bg-[#4a90a4] rounded-full border-4 border-white"></div>
                  <div className="text-[#4a90a4] text-sm font-medium">2020</div>
                  <h3 className="font-semibold text-gray-900">First Product Launch</h3>
                  <p className="text-gray-600 text-sm">Launched our flagship Pharmacy Management Suite.</p>
                </div>

                {/* 2021 */}
                <div className="relative pl-12">
                  <div className="absolute left-2 w-5 h-5 bg-[#4a90a4] rounded-full border-4 border-white"></div>
                  <div className="text-[#4a90a4] text-sm font-medium">2021</div>
                  <h3 className="font-semibold text-gray-900">100+ Customers</h3>
                  <p className="text-gray-600 text-sm">Reached our first 100 active business customers.</p>
                </div>

                {/* 2022 */}
                <div className="relative pl-12">
                  <div className="absolute left-2 w-5 h-5 bg-[#4a90a4] rounded-full border-4 border-white"></div>
                  <div className="text-[#4a90a4] text-sm font-medium">2022</div>
                  <h3 className="font-semibold text-gray-900">Platform Expansion</h3>
                  <p className="text-gray-600 text-sm">Introduced modular architecture and centralized billing.</p>
                </div>

                {/* 2023 */}
                <div className="relative pl-12">
                  <div className="absolute left-2 w-5 h-5 bg-[#4a90a4] rounded-full border-4 border-white"></div>
                  <div className="text-[#4a90a4] text-sm font-medium">2023</div>
                  <h3 className="font-semibold text-gray-900">Series A Funding</h3>
                  <p className="text-gray-600 text-sm">Secured funding to accelerate product development.</p>
                </div>

                {/* 2024 */}
                <div className="relative pl-12">
                  <div className="absolute left-2 w-5 h-5 bg-[#4a90a4] rounded-full border-4 border-white"></div>
                  <div className="text-[#4a90a4] text-sm font-medium">2024</div>
                  <h3 className="font-semibold text-gray-900">1000+ Businesses</h3>
                  <p className="text-gray-600 text-sm">Serving over 1000 businesses across multiple industries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2a3a] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {/* Newsletter Column */}
            <div className="col-span-2">
              <h3 className="font-semibold text-sm text-white mb-3">Newsletter</h3>
              <p className="text-sm text-gray-400 mb-4">
                {"We'd love to share our love for engineering with you in our monthly newsletter."}
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="jane@domain.com"
                  className="flex-1 px-3 py-2 bg-gray-700 rounded-l-lg text-sm placeholder:text-gray-400 focus:outline-none text-white"
                />
                <button className="px-3 py-2 bg-gray-600 rounded-r-lg text-sm font-semibold hover:bg-gray-500 text-white">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-semibold text-sm text-white mb-3">Company</h3>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-400 hover:text-white">Blog</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-white">Careers</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-white">Privacy</a>
              </div>
            </div>

            {/* Social Column */}
            <div>
              <h3 className="font-semibold text-sm text-white mb-3">Social</h3>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-white">Discord</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-white">LinkedIn</a>
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h3 className="font-semibold text-sm text-white mb-3">Product</h3>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-400 hover:text-white">Overview</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-white">Roadmap</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-white">Changelog</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-white">Book a demo</a>
              </div>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="font-semibold text-sm text-white mb-3">Resources</h3>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-400 hover:text-white">Documentation</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-white">GitHub</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-white">Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
