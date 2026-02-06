"use client";

import { useState } from "react";

export default function Header() {
  const [lang, setLang] = useState("ID");

  return (
    <>
      {/* TOP BAR (NOT STICKY) */}
      <div className="w-full bg-white/70 backdrop-blur border-b border-white/30 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          
          {/* Contact */}
          <div className="flex gap-4 text-gray-600 items-center">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-phone"></i>
              081355904897
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-envelope"></i>
              layanan@kelasdata.co.id
            </span>
          </div>

          {/* Social & Language */}
          <div className="flex items-center gap-4">
            <i className="fa-brands fa-instagram cursor-pointer"></i>
            <i className="fa-brands fa-facebook cursor-pointer"></i>
            <i className="fa-brands fa-twitter cursor-pointer"></i>

            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="border rounded-md px-2 py-1 text-sm bg-white"
            >
              <option value="ID">ID</option>
              <option value="EN">EN</option>
            </select>
          </div>
        </div>
      </div>

      {/* MAIN HEADER (STICKY) */}
      <div className="sticky top-0 z-50 bg-white/60 backdrop-blur-xl border-b border-white/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <h1 className="text-xl font-bold">KelasData</h1>

          {/* Menu */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Kursus</a>
            <a href="#" className="hover:text-blue-600">Ebook</a>
            <a href="#" className="hover:text-blue-600">Tentang</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Cari kursus..."
              className="hidden md:block border rounded-full px-4 py-2 text-sm w-48"
            />

            <button className="relative text-xl">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </button>

            <a href="/login" className="text-sm font-medium hover:text-blue-600">
              Login
            </a>

            <a
              href="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
            >
              Daftar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
