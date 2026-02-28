"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="min-h-screen p-12 bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-[210px] bg-white border rounded-xl border-gray-200 flex flex-col">
        {/* User Profile */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-sm">
              JD
            </div>
            <div>
              <div className="text-[14px] font-semibold text-gray-900">John Doe</div>
              <div className="text-[12px] text-gray-500">john@company.com</div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-3">
          <button
            onClick={() => setActiveTab("Overview")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[12px] font-medium transition-colors mb-1 ${activeTab === "Overview"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Overview
          </button>

          <button
            onClick={() => setActiveTab("My Products")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[12px] font-medium transition-colors mb-1 ${activeTab === "My Products"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            My Products
          </button>

          <button
            onClick={() => setActiveTab("Billing")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[12px] font-medium transition-colors mb-1 ${activeTab === "Billing"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Billing
          </button>

          <button
            onClick={() => setActiveTab("Activation Codes")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[12px] font-medium transition-colors mb-1 ${activeTab === "Activation Codes"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            Activation Codes
          </button>

          <button
            onClick={() => setActiveTab("Invoices")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[12px] font-medium transition-colors mb-1 ${activeTab === "Invoices"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Invoices
          </button>

          <button
            onClick={() => setActiveTab("Settings")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[12px] font-medium transition-colors mb-1 ${activeTab === "Settings"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </button>

          {/* Sign Out */}
          <Link
            href="/"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[12px] font-medium text-gray-700 hover:bg-gray-100 transition-colors mt-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sign Out
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <motion.main
        className="flex-1 px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-400 rounded-xl p-6 mb-6">
          <h1 className="text-[14px] font-bold text-white mb-1">Welcome back, John!</h1>
          <p className="text-[12px] text-blue-50">You have 1 active subscription. Manage your products and billing from this dashboard.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-5 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-[14px] font-bold text-gray-900">1</div>
                <div className="text-[12px] text-gray-500">Active Products</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div>
                <div className="text-[14px] font-bold text-gray-900">347</div>
                <div className="text-[12px] text-gray-500">Days Remaining</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-[14px] font-bold text-gray-900">2</div>
                <div className="text-[12px] text-gray-500">Activation Codes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Subscriptions */}
        <div className="bg-white rounded-lg border border-gray-200 mb-6">
          <div className="flex items-center justify-between p-5 border-b border-gray-200">
            <h2 className="text-[14px] font-semibold text-gray-900">Active Subscriptions</h2>
            <button className="text-[12px] font-medium text-blue-600 hover:text-blue-700 px-3 py-1.5 border border-gray-200 rounded-lg">
              Add Product
            </button>
          </div>

          <div className="p-5">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-gray-900">Pharmacy Management Suite</div>
                  <div className="text-[12px] text-gray-500">Growth Plan • Expires 2025-01-15</div>
                  <span className="inline-block mt-1.5 px-2 py-0.5 bg-green-100 text-green-700 text-[12px] font-medium rounded">
                    Active
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-[12px] font-medium text-gray-600 hover:text-gray-700 px-3 py-1.5 border border-gray-200 rounded-lg flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Renew
                </button>
                <button className="text-[12px] font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-lg">
                  Upgrade
                </button>
              </div>
            </div>

            {/* Activation Code */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="text-[12px] font-medium text-gray-700 mb-2">Activation Code:</div>
              <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg">
                <code className="text-[12px] font-mono text-gray-900">N65-PHR-2024-ABCD-1234</code>
                <button className="text-[12px] font-medium text-gray-600 hover:text-gray-700 px-3 py-1.5 border border-gray-200 rounded-lg bg-white">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Invoices */}
        <div className="bg-white rounded-lg border border-gray-200 mb-6">
          <div className="flex items-center justify-between p-5 border-b border-gray-200">
            <h2 className="text-[14px] font-semibold text-gray-900">Recent Invoices</h2>
            <button className="text-[12px] font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
              View All
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="p-5 space-y-3">
            {[
              { id: "INV-001", date: "2024-10-01", amount: "$298.00", status: "Paid" },
              { id: "INV-002", date: "2024-11-01", amount: "$298.00", status: "Paid" },
              { id: "INV-003", date: "2024-10-01", amount: "$298.00", status: "Paid" }
            ].map((invoice) => (
              <div key={invoice.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-gray-900">{invoice.id}</div>
                    <div className="text-[12px] text-gray-500">{invoice.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-[14px] font-semibold text-gray-900">{invoice.amount}</div>
                    <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-[12px] font-medium rounded">
                      {invoice.status}
                    </span>
                  </div>
                  <button className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activation Code History */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-5 border-b border-gray-200">
            <h2 className="text-[14px] font-semibold text-gray-900">Activation Code History</h2>
          </div>

          <div className="p-5 space-y-3">
            {[
              { code: "N65-PHR-2024-ABCD-1234", product: "Pharmacy Management Suite", date: "2024-01-15" },
              { code: "N65-PHR-2024-EFGH-5678", product: "Pharmacy Management Suite", date: "2023-12-15" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[14px] font-semibold text-gray-900">{item.code}</div>
                  <div className="text-[12px] text-gray-500">{item.product}</div>
                </div>
                <div className="text-[12px] text-gray-500">{item.date}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.main>
    </div>
  );
}
