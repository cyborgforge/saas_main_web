"use client";

import { useState } from "react";

export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Contains Header */}
      <section className="relative overflow-hidden pb-20" style={{
        background: 'linear-gradient(180deg, #5b9aa0 0%, #7ba8d4 50%, #a8d4c8 100%)',
      }}>
        {/* Header */}
        <header className="relative">
          <div className="bg-[#b8c8b8]/90 backdrop-blur-sm mx-6 mt-4 rounded-full px-5 py-2.5 shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="text-base font-bold text-gray-900">CloudSite</div>
              <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
                <a href="#" className="text-sm text-gray-900 hover:text-gray-700 font-medium">Home</a>
                <a href="#" className="text-sm text-gray-900 hover:text-gray-700 font-medium">Product</a>
                <a href="#" className="text-sm text-gray-900 hover:text-gray-700 font-medium">About</a>
                <a href="#" className="text-sm text-gray-900 hover:text-gray-700 font-medium">Contact</a>
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

        <div className="max-w-7xl mx-auto px-8 pt-16 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Blue Server Icon */}
              <div className="bg-[#4a90a4] p-3 rounded-2xl shadow-lg w-fit">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/>
                  <circle cx="7" cy="7" r="1" fill="white"/>
                  <circle cx="7" cy="12" r="1" fill="white"/>
                  <circle cx="7" cy="17" r="1" fill="white"/>
                </svg>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We build scalable<br />
                SaaS products<br />
                for modern<br />
                businesses
              </h1>
              <div className="flex gap-3 pt-2">
                <button className="bg-white text-gray-900 text-sm px-5 py-2.5 rounded-lg font-medium hover:bg-gray-100 shadow-md border border-gray-200">
                  View Products
                </button>
                <button className="bg-transparent text-gray-900 text-sm px-5 py-2.5 rounded-lg font-medium hover:bg-black/5 border border-gray-400">
                  Book a Demo
                </button>
              </div>
            </div>

            {/* Right Content - Hero Image and Stats */}
            <div className="relative h-[450px]">
              {/* Yellow/Teal Striped Background Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] overflow-hidden rounded-full">
                <div className="absolute inset-0" style={{
                  background: 'repeating-linear-gradient(45deg, #e5d68a 0px, #e5d68a 25px, #5b9aa0 25px, #5b9aa0 50px)'
                }}>
                </div>
              </div>

              {/* Person Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-[280px] h-[350px] flex items-center justify-center relative">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                    alt="Person smiling" 
                    className="w-full h-full object-cover rounded-b-full"
                  />
                </div>
              </div>

              {/* 5 Star Rating */}
              <div className="absolute bottom-24 left-4 bg-white px-4 py-2 rounded-xl shadow-xl z-30">
                <div className="flex gap-0.5 text-yellow-400 text-lg">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>

              {/* Total Projects Card */}
              <div className="absolute top-4 right-0 bg-white p-4 rounded-2xl shadow-xl w-48 z-30">
                <div className="space-y-2">
                  <div className="text-xs text-gray-600 font-medium">Total Projects</div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-3xl font-bold text-gray-900">38</div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">Views</div>
                  <div className="flex gap-1 h-12 items-end pt-2">
                    <div className="w-4 bg-blue-600 rounded-t" style={{height: '35%'}}></div>
                    <div className="w-4 bg-blue-400 rounded-t" style={{height: '55%'}}></div>
                    <div className="w-4 bg-blue-600 rounded-t" style={{height: '25%'}}></div>
                    <div className="w-4 bg-blue-600 rounded-t" style={{height: '75%'}}></div>
                    <div className="w-4 bg-blue-400 rounded-t" style={{height: '45%'}}></div>
                    <div className="w-4 bg-blue-600 rounded-t" style={{height: '65%'}}></div>
                  </div>
                  <div className="text-xs text-gray-700 flex items-center gap-1.5 pt-1 border-t border-gray-100">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="7" height="7" rx="1"/>
                      <rect x="3" y="14" width="7" height="7" rx="1"/>
                      <rect x="14" y="3" width="7" height="7" rx="1"/>
                      <rect x="14" y="14" width="7" height="7" rx="1"/>
                    </svg>
                    <span className="font-medium text-[10px]">Projects Management</span>
                  </div>
                </div>
              </div>

              {/* Growth Chart Card */}
              <div className="absolute bottom-4 right-0 bg-white p-4 rounded-2xl shadow-xl w-52 z-30">
                <div className="text-sm font-bold mb-2 text-gray-900">Growth</div>
                <div className="h-16 relative mb-2">
                  <svg className="w-full h-full" viewBox="0 0 200 64" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#93c5fd" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <path 
                      d="M 0 50 Q 30 45 60 40 Q 90 35 120 28 Q 150 20 180 15 L 200 12 L 200 64 L 0 64 Z" 
                      fill="url(#gradient)"
                    />
                    <path 
                      d="M 0 50 Q 30 45 60 40 Q 90 35 120 28 Q 150 20 180 15 L 200 12" 
                      fill="none" 
                      stroke="#3b82f6" 
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="120" cy="28" r="3" fill="#3b82f6"/>
                    <circle cx="180" cy="15" r="3" fill="#3b82f6"/>
                  </svg>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gray-300 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between text-[9px] text-gray-400 font-medium">
                  <span>67</span>
                  <span>73</span>
                  <span>53</span>
                  <span>47</span>
                  <span>39</span>
                  <span>27</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WE BUILD Section */}
      <section className="bg-gradient-to-b from-[#7ba8d4] to-[#5b9aa0] py-16 relative">
        {/* Wave Top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -mt-1">
          <svg className="relative block w-full h-12" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,0 Q300,40 600,20 T1200,0 L1200,0 L0,0 Z" fill="#a8d4c8"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8">
          <h2 className="text-5xl font-bold text-center mb-12" style={{
            WebkitTextStroke: '2px white',
            WebkitTextFillColor: 'transparent',
          }}>
            WE BUILD
          </h2>

          <div className="grid md:grid-cols-4 gap-5">
            {/* POS & Billing Systems */}
            <div className="bg-[#c8dce8] p-6 rounded-3xl text-center space-y-3">
              <div className="flex justify-center mb-4">
                <div className="relative w-28 h-28">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-24 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <div className="text-xs font-bold text-blue-600">RECEIPT</div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs">
                    ▶
                  </div>
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-purple-300 rounded-full"></div>
                  <div className="absolute -bottom-2 right-2 w-6 h-6 bg-blue-400 rounded-full"></div>
                  <div className="absolute -bottom-2 left-2 w-5 h-5 bg-purple-400 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900">POS & Billing<br/>Systems</h3>
              <p className="text-xs text-gray-700">
                Complete point-of-sale solutions with integrated billing and invoicing
              </p>
            </div>

            {/* Inventory Management */}
            <div className="bg-[#c8dce8] p-6 rounded-3xl text-center space-y-3">
              <div className="flex justify-center mb-4">
                <div className="relative w-28 h-28">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <div className="absolute top-2 left-4 w-7 h-7 bg-purple-400 rounded-full flex items-center justify-center text-white text-xs">
                    +
                  </div>
                  <div className="absolute top-2 right-4 w-7 h-7 bg-purple-300 rounded-full"></div>
                  <div className="absolute bottom-2 left-4 w-7 h-7 bg-blue-400 rounded-full"></div>
                  <div className="absolute bottom-2 right-4 w-7 h-7 bg-blue-300 rounded-full"></div>
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Inventory<br/>Management</h3>
              <p className="text-xs text-gray-700">
                Real-time stock tracking and automated reordering systems
              </p>
            </div>

            {/* Online Ordering */}
            <div className="bg-[#c8dce8] p-6 rounded-3xl text-center space-y-3">
              <div className="flex justify-center mb-4">
                <div className="bg-white p-3 rounded-xl shadow-lg w-32">
                  <div className="text-[8px] font-bold mb-2 text-left">Online Ordering Flow</div>
                  <div className="space-y-1 text-[7px]">
                    <div className="flex justify-between">
                      <span>Order Details</span>
                      <span className="text-gray-400">$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Info</span>
                      <span className="text-gray-400">$0.00</span>
                    </div>
                    <div className="border-t pt-1">
                      <div className="font-bold text-[6px]">Address</div>
                      <div className="font-bold text-[6px]">Payment Method</div>
                    </div>
                  </div>
                  <div className="mt-2 space-y-1">
                    <div className="bg-yellow-400 text-[6px] py-1 rounded text-center">Processing Payment</div>
                    <div className="flex justify-around text-[6px]">
                      <div className="flex items-center gap-0.5">
                        <span className="text-green-500">✓</span> Order Confirm
                      </div>
                      <div className="flex items-center gap-0.5">
                        <span className="text-green-500">✓</span> Payment Info
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Online<br/>Ordering</h3>
              <p className="text-xs text-gray-700">
                E-commerce integration with web and mobile ordering platforms
              </p>
            </div>

            {/* HRM's and User Management */}
            <div className="bg-[#c8dce8] p-6 rounded-3xl text-center space-y-3">
              <div className="flex justify-center mb-4 gap-2">
                <div className="bg-white p-2 rounded-lg shadow-lg w-24 space-y-1">
                  <div className="text-[7px] font-bold">New User Sign Up</div>
                  <div className="h-10 flex items-end gap-0.5">
                    <div className="flex-1 bg-blue-200 rounded" style={{height: '40%'}}></div>
                    <div className="flex-1 bg-blue-400 rounded" style={{height: '60%'}}></div>
                    <div className="flex-1 bg-blue-300 rounded" style={{height: '80%'}}></div>
                  </div>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-lg w-24 space-y-1">
                  <div className="text-[7px] font-bold">Onboarding Report</div>
                  <div className="h-10">
                    <svg className="w-full h-full" viewBox="0 0 80 40">
                      <path d="M 0 30 Q 20 25 40 20 T 80 10" fill="none" stroke="#3b82f6" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{"HRM's and User"}<br/>Management</h3>
              <p className="text-xs text-gray-700">
                Employee management, attendance, and role-based access control
              </p>
            </div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,20 Q150,40 300,30 T600,20 T900,30 T1200,20 L1200,60 L0,60 Z" fill="#1a2a3a"></path>
          </svg>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="bg-[#1a2a3a] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Our Products</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
            {/* Pharmacy Management Suite */}
            <div className="bg-[#c8dce8] p-6 rounded-3xl">
              <div className="inline-block bg-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                Active
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Pharmacy<br/>Management Suite
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Complete pharmacy solution with POS, inventory, online ordering, and delivery
              </p>
              <div className="space-y-1.5 mb-6">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-900">HRMS</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-900">POS</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-900">Inventory</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-900">Online Ordering</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-900">Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-900">Billing</span>
                </div>
              </div>
              <button className="w-full bg-gray-900 text-white py-2.5 rounded-full text-sm font-medium hover:bg-gray-800">
                View Product
              </button>
            </div>

            {/* Retail Suite */}
            <div className="bg-[#c8dce8] p-6 rounded-3xl">
              <div className="inline-block bg-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                Soon
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Retail<br/>Suite
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Multi-store retail management with inventory sync and customer analytics
              </p>
              <div className="space-y-1.5 mb-6">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-900">Multi-Store</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-900">CRM</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-900">Inventory</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-900">Online Ordering</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-900">Analytics</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-900">Billing</span>
                </div>
              </div>
              <button className="w-full bg-gray-900 text-white py-2.5 rounded-full text-sm font-medium hover:bg-gray-800">
                Coming soon
              </button>
            </div>
          </div>

          {/* Clinic Management Suite */}
          <div className="max-w-md mx-auto">
            <div className="bg-[#c8dce8] p-6 rounded-3xl">
              <div className="inline-block bg-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                Active
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Clinic Management<br/>Suite
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Healthcare practice management with appointments and patient records
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-900">EMR</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-900">Prescription</span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-900">Billing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-900">Appointments</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-gray-900 text-white py-2.5 rounded-full text-sm font-medium hover:bg-gray-800">
                View Product
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel Section */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-8 flex-wrap opacity-60">
            <div className="text-sm font-semibold text-gray-600">NYU Langone Health</div>
            <div className="text-sm font-semibold text-gray-600">Dana-Farber Brigham</div>
            <div className="text-sm font-semibold text-gray-600">Cleveland Clinic</div>
            <div className="text-sm font-semibold text-gray-600">Mass General</div>
            <div className="text-sm font-semibold text-gray-600">Stanford Medicine</div>
            <div className="text-sm font-semibold text-gray-600">Cedars Sinai</div>
            <div className="text-sm font-semibold text-gray-600">Mayo Clinic</div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Trusted By Many Organizations and<br/>Businesses
          </h2>
          <p className="text-gray-600 text-sm mb-12">
            Join over 800 institutions and Organizations<br/>and optimize your Software.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">450+</div>
              <div className="text-gray-600 text-sm">Clients</div>
            </div>
            <div className="text-center border-x border-gray-200 px-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">45k+</div>
              <div className="text-gray-600 text-sm">users</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600 text-sm">Softwares shipped</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">Why Choose Us</h2>
          <p className="text-center text-gray-600 text-sm mb-12">
            {"We don't just build software—we build partnerships. Our platform is designed"}<br/>
            with your growth in mind.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {/* Modular Product Architecture */}
            <div className="bg-gray-900 text-white p-5 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="bg-gray-700 p-2 rounded-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="7" height="7" rx="1"/>
                    <rect x="3" y="14" width="7" height="7" rx="1"/>
                    <rect x="14" y="3" width="7" height="7" rx="1"/>
                    <rect x="14" y="14" width="7" height="7" rx="1"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">Modular Product Architecture</h3>
                  <p className="text-gray-400 text-xs">
                    Pick and choose the modules you need. Scale up as your business grows without disrupting existing workflows.
                  </p>
                </div>
              </div>
            </div>

            {/* Centralized Billing & Subscriptions */}
            <div className="bg-gray-900 text-white p-5 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="bg-gray-700 p-2 rounded-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2"/>
                    <path d="M7 8h10M7 12h10M7 16h6" stroke="white" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">Centralized Billing & Subscriptions</h3>
                  <p className="text-gray-400 text-xs">
                    One dashboard to manage all your subscriptions, payments, and invoices across all products.
                  </p>
                </div>
              </div>
            </div>

            {/* Activation-Based Access Control */}
            <div className="bg-gray-900 text-white p-5 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="bg-gray-700 p-2 rounded-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">Activation-Based Access Control</h3>
                  <p className="text-gray-400 text-xs">
                    Secure, role-based access system that puts you in control of who can use what and when.
                  </p>
                </div>
              </div>
            </div>

            {/* Scalable & Future-Ready */}
            <div className="bg-gray-900 text-white p-5 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="bg-gray-700 p-2 rounded-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">Scalable & Future-Ready</h3>
                  <p className="text-gray-400 text-xs">
                    Built on modern cloud infrastructure that grows with your business, ensuring 99.9% uptime.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-500 mb-1">50+</div>
              <div className="text-gray-500 text-xs">Modules Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-500 mb-1">99.9%</div>
              <div className="text-gray-500 text-xs">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-500 mb-1">{'<'}2min</div>
              <div className="text-gray-500 text-xs">Avg. Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-500 mb-1">24/7</div>
              <div className="text-gray-500 text-xs">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div 
          className="py-20 px-6"
          style={{
            background: "linear-gradient(180deg, #87CEEB 0%, #4169E1 50%, #8B5CF6 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-black mb-8">
              Ready to go? Start<br/>Building together.
            </h2>
            <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-900 transition-colors">
              <span className="font-semibold text-sm">Request Demo</span>
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
              {/* Newsletter Column */}
              <div className="col-span-2">
                <h3 className="font-semibold text-sm text-black mb-3">Newsletter</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {"We'd love to share our love for engineering with you in our monthly newsletter."}
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="jane@domain.com"
                    className="flex-1 px-3 py-2 bg-gray-100 rounded-l-lg text-sm placeholder:text-gray-400 focus:outline-none"
                  />
                  <button className="px-3 py-2 bg-gray-100 rounded-r-lg text-sm font-semibold hover:bg-gray-200">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Company Column */}
              <div>
                <h3 className="font-semibold text-sm text-black mb-3">Company</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-gray-600 hover:text-black">Blog</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-black">Careers</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-black">Privacy</a>
                </div>
              </div>

              {/* Social Column */}
              <div>
                <h3 className="font-semibold text-sm text-black mb-3">Social</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-gray-600 hover:text-black">Twitter</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-black">Discord</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-black">LinkedIn</a>
                </div>
              </div>

              {/* Product Column */}
              <div>
                <h3 className="font-semibold text-sm text-black mb-3">Product</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-gray-600 hover:text-black">Overview</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-black">Roadmap</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-black">Changelog</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-black">Book a demo</a>
                </div>
              </div>

              {/* Resources Column */}
              <div>
                <h3 className="font-semibold text-sm text-black mb-3">Resources</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-gray-600 hover:text-black">Documentation</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-black">GitHub</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-black">Contact us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
