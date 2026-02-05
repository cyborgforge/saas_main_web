"use client";

import { useState } from "react";
import Link from "next/link";
import { JSX } from "react/jsx-runtime"; // Import JSX to resolve undeclared variable error

export default function ProductPage() {
  const [showDropdown, setShowDropdown] = useState(false);

  const modules = [
    { name: "HRMS", description: "Fully integrated with the platform", icon: "users" },
    { name: "POS", description: "Fully integrated with the platform", icon: "credit-card" },
    { name: "Online Ordering & Delivery", description: "Fully integrated with the platform", icon: "truck" },
    { name: "Inventory Management", description: "Fully integrated with the platform", icon: "box" },
    { name: "Vendor Management", description: "Fully integrated with the platform", icon: "building" },
    { name: "User Management", description: "Fully integrated with the platform", icon: "user-check" },
    { name: "Employee Management", description: "Fully integrated with the platform", icon: "users" },
    { name: "Invoice & Billing", description: "Fully integrated with the platform", icon: "file-text" },
    { name: "Modern Website", description: "Fully integrated with the platform", icon: "globe" },
  ];

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: JSX.Element } = {
      "users": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      "credit-card": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      "truck": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
      "box": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      "building": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      "user-check": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      "file-text": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      "globe": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    };
    return icons[iconName] || icons["users"];
  };

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
      <section className="py-16" style={{
        background: 'linear-gradient(180deg, #d4e8eb 0%, #e8f4f6 100%)',
      }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#fef3c7] px-3 py-1.5 rounded-full text-sm mb-6">
                <span className="text-yellow-600">🍊</span>
                <span className="text-yellow-800 font-medium">Available Now</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Pharmacy<br/>Management Suite
              </h1>
              
              <p className="text-gray-600 mb-8">
                Complete pharmacy management solution with POS, inventory, online ordering, and delivery management. Streamline your pharmacy operations with our all-in-one platform.
              </p>
              
              <div className="flex gap-3">
                <button className="bg-[#4a90a4] text-white px-5 py-3 rounded-lg font-medium hover:bg-[#3d7a8a] flex items-center gap-2">
                  Request Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <button className="bg-transparent border border-gray-300 text-gray-700 px-5 py-3 rounded-lg font-medium hover:bg-gray-50 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contact Sales
                </button>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                {/* Browser Dots */}
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 bg-[#4a90a4] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#4a90a4] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#4a90a4] rounded-full"></div>
                </div>
                
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">2,847</div>
                    <div className="text-xs text-gray-500">Orders</div>
                  </div>
                  <div className="text-center border-x border-gray-100">
                    <div className="text-2xl font-bold text-gray-900">$84.2K</div>
                    <div className="text-xs text-gray-500">Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">1,234</div>
                    <div className="text-xs text-gray-500">Customers</div>
                  </div>
                </div>

                {/* Chart */}
                <div className="h-32 flex items-end gap-2 mb-4">
                  {[40, 55, 45, 60, 50, 70, 65, 80, 75, 90].map((height, i) => (
                    <div 
                      key={i}
                      className="flex-1 bg-[#4a90a4] rounded-t"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>

                {/* Real-time Sync Badge */}
                <div className="flex items-center justify-end gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-[#4a90a4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900">Real-time Sync</div>
                    <div className="text-xs text-gray-500">Across all devices</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">Modules Included</h2>
          <p className="text-center text-gray-600 mb-12">Everything you need to run your business, all in one place.</p>

          <div className="grid md:grid-cols-3 gap-4">
            {modules.map((module, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-5 hover:border-[#4a90a4] transition-colors">
                <div className="flex items-start gap-3">
                  <div className="text-[#4a90a4]">
                    {getIcon(module.icon)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{module.name}</h3>
                    <p className="text-gray-500 text-sm">{module.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-[#f5f9fa]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">How It Works</h2>
          <p className="text-center text-gray-600 mb-12">Get started in minutes with our simple onboarding process.</p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Subscribe", description: "Choose a plan that fits your business needs and subscribe." },
              { step: "2", title: "Get Access", description: "Receive your activation code instantly after payment." },
              { step: "3", title: "Activate", description: "Enter the code in the product to unlock full access." },
              { step: "4", title: "Grow", description: "Start using all modules and scale as you grow." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#1a2a3a] text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">Simple, Transparent Pricing</h2>
          <p className="text-center text-gray-600 mb-12">Choose the plan that works best for your business.</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 text-sm mb-4">Perfect for small businesses getting started</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">Contact Us</span>
                <span className="text-gray-500 text-sm"> /per month</span>
              </div>
              <div className="space-y-3 mb-6">
                {["Up to 3 users", "Core modules included", "Email support", "Basic analytics", "Standard integrations"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#4a90a4]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
              <button className="w-full bg-[#4a90a4] text-white py-3 rounded-full font-medium hover:bg-[#3d7a8a]">
                Get Started
              </button>
            </div>

            {/* Growth Plan */}
            <div className="border-2 border-[#4a90a4] rounded-2xl p-6 relative bg-[#f8fcfd]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4a90a4] text-white text-xs font-medium px-3 py-1 rounded-full">
                Most Popular
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600 text-sm mb-4">For growing businesses with expanding needs</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">Contact Us</span>
                <span className="text-gray-500 text-sm"> /per month</span>
              </div>
              <div className="space-y-3 mb-6">
                {["Up to 15 users", "All modules included", "Priority support", "Advanced analytics", "Custom integrations", "API access"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#4a90a4]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
              <button className="w-full bg-gray-900 text-white py-3 rounded-full font-medium hover:bg-gray-800">
                Most Popular
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 text-sm mb-4">Custom solutions for large organizations</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">Contact Us</span>
                <span className="text-gray-500 text-sm"> /custom</span>
              </div>
              <div className="space-y-3 mb-6">
                {["Unlimited users", "Custom modules", "24/7 dedicated support", "White-label options", "On-premise deployment", "SLA guarantee"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#4a90a4]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
              <button className="w-full bg-[#4a90a4] text-white py-3 rounded-full font-medium hover:bg-[#3d7a8a]">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 px-6 border-t border-gray-100">
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
      </footer>
    </div>
  );
}
