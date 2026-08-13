"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorBio from "@/components/AuthorBio";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">
        <AuthorBio />
      </main>

      <Footer />
    </>
  );
}