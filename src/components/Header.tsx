"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Time Helo", href: "/time" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contato", href: "/#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="z-50">
          <Image
            src={scrolled || menuOpen ? "/images/logo/logo-preta.png" : "/images/logo/logo-branca.png"}
            alt="Helo Trindade Arquitetura"
            width={60}
            height={60}
            className="w-12 h-12 md:w-14 md:h-14 transition-opacity duration-500"
            priority
          />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-[family-name:var(--font-body)] text-xs tracking-[0.2em] uppercase transition-colors duration-500 hover:opacity-70 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botão Hambúrguer Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden z-50 flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span
            className={`block w-6 h-[1.5px] transition-all duration-300 ${
              scrolled || menuOpen ? "bg-foreground" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-[4.5px]" : ""}`}
          />
          <span
            className={`block w-6 h-[1.5px] transition-all duration-300 ${
              scrolled || menuOpen ? "bg-foreground" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-[1.5px] transition-all duration-300 ${
              scrolled || menuOpen ? "bg-foreground" : "bg-white"
            } ${menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`}
          />
        </button>
      </div>

      {/* Menu Mobile Fullscreen */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-heading)] text-3xl tracking-wider text-foreground hover:opacity-70 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
