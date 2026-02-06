"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [lang, setLang] = useState("ID");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* TOP BAR (NON STICKY) */}
      {/* TOP BAR */}
<div className="w-full bg-white/70 backdrop-blur text-sm border-b border-black/10">
  <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
    <div className="flex gap-4 items-center text-gray-600">
      <span className="flex items-center gap-2">
        <i className="fa-solid fa-phone"></i>
        08xxxxxxxx
      </span>
      <span className="flex items-center gap-2">
        <i className="fa-solid fa-envelope"></i>
        kelas@data.com
      </span>
    </div>

    <div className="flex items-center gap-4">
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-facebook"></i>
      <i className="fa-brands fa-twitter"></i>

      <select className="border rounded-md px-2 py-1 text-sm bg-white">
        <option>ID</option>
        <option>EN</option>
      </select>
    </div>
  </div>
</div>


      {/* WRAPPER STICKY */}
      {/* WRAPPER STICKY */}
<div className="sticky top-4 z-50">
  {/* FLOATING HEADER */}
  <div
    className={`
      transition-all duration-300 ease-out
      mx-auto border border-white/30
      ${
        scrolled
          ? "max-w-6xl mt-2 rounded-2xl bg-white/80 backdrop-blur-xl shadow-xl"
          : "max-w-7xl mt-0 rounded-none bg-white/60 backdrop-blur-md"
      }
    `}
  >
          <div
            className={`
              px-6 flex items-center justify-between transition-all duration-300
              ${scrolled ? "py-2" : "py-4"}
            `}
          >
            {/* Logo */}
            <h1
              className={`font-bold transition-all duration-300 ${
                scrolled ? "text-lg" : "text-xl"
              }`}
            >
             LogoKelasData
            </h1>

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
                className={`hidden md:block border rounded-full px-4 text-sm transition-all duration-300
                  ${scrolled ? "py-1.5 w-36" : "py-2 w-48"}`}
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
                className={`rounded-full text-sm transition-all duration-300
                ${
                  scrolled
                    ? "px-3 py-1.5 bg-blue-600 text-white"
                    : "px-4 py-2 bg-blue-600 text-white"
                }`}
              >
                Daftar
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
