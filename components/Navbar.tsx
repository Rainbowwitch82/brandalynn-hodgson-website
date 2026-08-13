"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-[#E8D6A8]/15 bg-[#07161D]/75 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-6 lg:px-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-3xl tracking-tight text-[#E8D6A8] transition duration-300 hover:text-white"
        >
          Brandalynn Hodgson
        </Link>

        {/* Navigation */}
        <ul className="hidden items-center gap-10 font-body text-lg text-[#F8F4EA] md:flex">
          <li>
            <Link
              href="/"
              className="inline-block transition duration-300 hover:-translate-y-0.5 hover:text-[#E8D6A8]"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/stories"
              className="inline-block transition duration-300 hover:-translate-y-0.5 hover:text-[#E8D6A8]"
            >
              Stories
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="inline-block transition duration-300 hover:-translate-y-0.5 hover:text-[#E8D6A8]"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/journal"
              className="inline-block transition duration-300 hover:-translate-y-0.5 hover:text-[#E8D6A8]"
            >
              Journal
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="inline-block transition duration-300 hover:-translate-y-0.5 hover:text-[#E8D6A8]"
            >
              Connect
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}