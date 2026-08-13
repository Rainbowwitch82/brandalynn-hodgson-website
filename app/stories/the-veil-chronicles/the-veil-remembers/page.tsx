"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TheVeilRemembersPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">

          {/* Hero */}
          <section className="grid items-center gap-16 lg:grid-cols-2">

            <div>
              <p className="text-sm uppercase tracking-[0.45em] text-[#B79CFF]">
                The Veil Chronicles • Book Three
              </p>

              <h1 className="mt-6 font-serif text-6xl text-[#F8F4EA]">
                The Veil Remembers
              </h1>

              <div className="mt-8 inline-flex rounded-full bg-[#B79CFF]/20 px-5 py-2 text-[#D9C9FF]">
                Coming Soon
              </div>

              <p className="mt-10 text-lg leading-9 text-gray-300">
                The Veil has watched for generations, quietly preserving every
                promise, sacrifice, and secret. As the Schexnaydre family's
                story reaches its turning point, forgotten truths emerge from
                the shadows, revealing that the past is never truly gone. Some
                memories wait patiently until the right soul is ready to
                remember.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <Link
                  href="/stories/the-veil-chronicles/characters"
                  className="rounded-full bg-[#B79CFF] px-8 py-4 font-semibold text-[#07161D] transition hover:scale-105"
                >
                  Meet the Legacies
                </Link>

                <Link
                  href="/stories/the-veil-chronicles"
                  className="rounded-full border border-[#B79CFF] px-8 py-4 text-[#B79CFF] transition hover:bg-[#B79CFF] hover:text-[#07161D]"
                >
                  ← Back to Trilogy
                </Link>

              </div>
            </div>

            <div className="flex justify-center">

              <Image
                src="/images/stories/the-veil-remembers.png"
                alt="The Veil Remembers"
                width={500}
                height={750}
                priority
                className="rounded-3xl shadow-2xl"
              />

            </div>

          </section>

          {/* Synopsis */}
          <section className="mt-28 rounded-3xl border border-[#B79CFF]/20 bg-[#0B1F29] p-12">

            <h2 className="font-serif text-4xl text-[#F8F4EA]">
              Synopsis
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              As old wounds reopen and long-forgotten stories come to light,
              Lena realizes that her family's journey has always been part of
              something far greater than they imagined. Ancient promises are
              fulfilled, hidden histories are revealed, and the Veil itself
              begins to unveil the truth behind the legacy that will echo
              through generations and eventually shape the world of Bayou Veil.
            </p>

          </section>

          {/* Themes */}
          <section className="mt-20">

            <h2 className="text-center font-serif text-4xl text-[#F8F4EA]">
              Themes
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

              {[
                "Memory",
                "Legacy",
                "The Veil",
                "Destiny",
              ].map((theme) => (
                <div
                  key={theme}
                  className="rounded-2xl border border-[#B79CFF]/20 bg-[#0B1F29] p-8 text-center"
                >
                  <p className="text-lg text-[#D9C9FF]">
                    {theme}
                  </p>
                </div>
              ))}

            </div>

          </section>

          {/* Navigation */}
          <section className="mt-28 flex flex-wrap justify-center gap-6">

            <Link
              href="/stories/the-veil-chronicles/the-bones-of-the-bayou"
              className="rounded-full border border-[#B79CFF] px-8 py-4 text-[#B79CFF] transition hover:bg-[#B79CFF] hover:text-[#07161D]"
            >
              ← Book Two
            </Link>

            <Link
              href="/stories/the-veil-chronicles/characters"
              className="rounded-full bg-[#B79CFF] px-8 py-4 font-semibold text-[#07161D] transition hover:scale-105"
            >
              Meet the Characters →
            </Link>

          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}