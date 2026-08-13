"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TraditionsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24 text-[#F8F4EA]">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="font-serif text-5xl mb-8">
            Family Traditions
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            For generations, the Schexnaydre family carried traditions across
            the Atlantic and into the Louisiana bayous. Some were simple family
            customs, while others became sacred rituals woven into the history
            of The Veil Chronicles.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}