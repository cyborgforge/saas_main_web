"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log({ username, password });
  };

  return (
    <div className="min-h-screen w-full bg-[#d6eaf8] flex items-center justify-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[30%] h-full bg-[#7b8cde] z-0" />
      <div className="absolute -bottom-10 left-25 w-[80px] h-[200px] bg-[#7b8cde] rounded-t-full rotate-[40deg] translate-y-[40px] -translate-x-[20px] z-0" />

      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between px-3 py-4 gap-4">
        {/* Left side - Login Form */}
        <div className="w-full md:w-1/2 max-w-[280px]">
          <h1 className="text-base font-bold text-gray-800 mb-2.5 text-center">
            Welcome Back!
          </h1>

          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label className="block text-[12px] font-medium text-gray-700 mb-1.5">
                Username:
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full text-[12px] px-2 py-1.5 border border-[#a8b8e8] rounded-full bg-transparent text-gray-800 outline-none focus:border-[#7b8cde] focus:ring-1 focus:ring-[#7b8cde] transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-[12px] font-medium text-gray-700 mb-1.5">
                Password:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-[12px] px-2 py-1.5 border border-[#a8b8e8] rounded-full bg-transparent text-gray-800 outline-none focus:border-[#7b8cde] focus:ring-1 focus:ring-[#7b8cde] transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-1.5 text-[12px] bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-colors cursor-pointer mt-1">
              Login
            </button>
          </form>

          <p className="text-center text-[12px] text-gray-600 mt-2">
            Dont have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-gray-800 hover:underline"
            >
              Register
            </Link>
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-2.5 mt-2">
            <a href="#" aria-label="Facebook" className="text-[#7b8cde] hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp" className="text-[#7b8cde] hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a href="#" aria-label="Telegram" className="text-[#7b8cde] hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right side - Laptop Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image
            src="/laptop.png"
            alt="Laptop illustration"
            width={360}
            height={0}
            style={{ height: 'auto' }}
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}
