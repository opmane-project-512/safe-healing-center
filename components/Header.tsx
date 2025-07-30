"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled || isMenuOpen
          ? "bg-white/90 backdrop-blur-xl shadow-2xl border-b border-emerald-100"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="group flex items-center space-x-3 transition-all duration-300 hover:scale-105"
          >
            <div
              className={`w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center transition-all duration-300 group-hover:rotate-6 group-hover:shadow-lg ${
                scrolled || isMenuOpen
                  ? "shadow-emerald-500/25"
                  : "shadow-white/25"
              }`}
            >
              <i className="ri-leaf-line text-2xl text-white"></i>
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold transition-colors duration-300 ${
                  scrolled || isMenuOpen ? "text-emerald-800" : "text-white"
                }`}
              >
                Safe Healing
              </span>
              <span
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled || isMenuOpen
                    ? "text-emerald-600"
                    : "text-emerald-200"
                }`}
              >
                Center
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {[
              { href: "/", label: "Home", icon: "ri-home-4-line" },
              { href: "/about", label: "About", icon: "ri-team-line" },
              {
                href: "/services",
                label: "Services",
                icon: "ri-hand-heart-line",
              },
              {
                href: "/pricing",
                label: "Pricing",
                icon: "ri-price-tag-3-line",
              },
              { href: "/contact", label: "Contact", icon: "ri-chat-4-line" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap ${
                  scrolled || isMenuOpen
                    ? "text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
                    : "text-white hover:text-emerald-200 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <i
                    className={`${item.icon} text-lg transform group-hover:scale-110 transition-transform duration-300`}
                  ></i>
                  <span>{item.label}</span>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300 rounded-full"></div>
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden relative w-12 h-12 rounded-xl transition-all duration-300 hover:scale-110 cursor-pointer ${
              scrolled || isMenuOpen
                ? "bg-emerald-50 hover:bg-emerald-100"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            <div className="flex flex-col items-center justify-center space-y-1">
              <span
                className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                } ${scrolled || isMenuOpen ? "bg-emerald-600" : "bg-white"}`}
              ></span>
              <span
                className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                } ${scrolled || isMenuOpen ? "bg-emerald-600" : "bg-white"}`}
              ></span>
              <span
                className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                } ${scrolled || isMenuOpen ? "bg-emerald-600" : "bg-white"}`}
              ></span>
            </div>
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`py-6 border-t transition-all duration-300 ${
              scrolled || isMenuOpen ? "border-emerald-100" : "border-white/20"
            }`}
          >
            <nav className="flex flex-col space-y-2">
              {[
                { href: "/", label: "Home", icon: "ri-home-4-line" },
                { href: "/about", label: "About Us", icon: "ri-team-line" },
                {
                  href: "/services",
                  label: "Services",
                  icon: "ri-hand-heart-line",
                },
                {
                  href: "/pricing",
                  label: "Pricing",
                  icon: "ri-price-tag-3-line",
                },
                { href: "/contact", label: "Contact", icon: "ri-chat-4-line" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 cursor-pointer ${
                    scrolled || isMenuOpen
                      ? "text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
                      : "text-white hover:text-emerald-200 hover:bg-white/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className={`${item.icon} text-lg`}></i>
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
