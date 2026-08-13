"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FamilyTreePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">
        <div className="mx-auto max-w-6xl px-6">

          {/* Hero */}

          <section className="text-center">

            <p className="uppercase tracking-[0.45em] text-sm text-[#E8D6A8]">
              The Veil Chronicles Archive
            </p>

            <h1 className="mt-6 font-serif text-6xl text-[#F8F4EA]">
              The Schexnaydre Family Tree
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-300">
              Every generation leaves its mark. Follow the Schexnaydre family
              from Germany to Louisiana and discover the people whose choices
              shaped the Bayou Universe.
            </p>

          </section>

          {/* Family Tree */}

          <section className="mt-24">

            {/* Grandmother */}

            <div className="flex justify-center">

              <Link
                href="/stories/the-veil-chronicles/characters/grossmutter-adelheid"
                className="rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-8 text-center transition hover:border-[#E8D6A8] hover:-translate-y-1"
              >
                <h2 className="font-serif text-3xl text-[#F4E2B8]">
                  Großmutter Adelheid
                </h2>

                <p className="mt-3 text-gray-300">
                  Grandmother • Großmutter
                </p>
              </Link>

            </div>

            <div className="py-6 text-center text-5xl text-[#E8D6A8]">
              │
            </div>

            {/* Parents */}

            <div className="grid gap-10 md:grid-cols-2">

              <Link
                href="/stories/the-veil-chronicles/characters/johann-schexnaydre"
                className="rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-8 text-center transition hover:border-[#E8D6A8] hover:-translate-y-1"
              >
                <h2 className="font-serif text-3xl text-[#F4E2B8]">
                  Johann Schexnaydre
                </h2>

                <p className="mt-3 text-gray-300">
                  Father • Vater
                </p>
              </Link>

              <Link
                href="/stories/the-veil-chronicles/characters/elise-schexnaydre"
                className="rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-8 text-center transition hover:border-[#E8D6A8] hover:-translate-y-1"
              >
                <h2 className="font-serif text-3xl text-[#F4E2B8]">
                  Elise Schexnaydre
                </h2>

                <p className="mt-3 text-gray-300">
                  Mother • Mutter
                </p>
              </Link>

            </div>

            <div className="py-6 text-center text-5xl text-[#E8D6A8]">
              │
            </div>

            {/* Children */}

            <div className="grid gap-10 md:grid-cols-2">

              <Link
                href="/stories/the-veil-chronicles/characters/lena-schexnaydre"
                className="rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-8 text-center transition hover:border-[#E8D6A8] hover:-translate-y-1"
              >
                <h2 className="font-serif text-3xl text-[#F4E2B8]">
                  Magdalena "Lena" Schexnaydre
                </h2>

                <p className="mt-3 text-gray-300">
                  Daughter • Tochter
                </p>
              </Link>

              <Link
                href="/stories/the-veil-chronicles/characters/rein-schexnaydre"
                className="rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-8 text-center transition hover:border-[#E8D6A8] hover:-translate-y-1"
              >
                <h2 className="font-serif text-3xl text-[#F4E2B8]">
                  Reinhard "Rein" Schexnaydre
                </h2>

                <p className="mt-3 text-gray-300">
                  Son • Sohn
                </p>
              </Link>

            </div>

          </section>

          {/* Family Motto */}

          <section className="mx-auto mt-28 max-w-4xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-12 text-center">

            <h2 className="font-serif text-4xl text-[#F4E2B8]">
              Family Motto
            </h2>

            <p className="mt-8 text-xl italic leading-9 text-gray-300">
              "Our roots reach farther than memory.
              <br />
              Our stories travel farther than rivers."
            </p>

          </section>

          {/* Navigation */}

          <div className="mt-20 flex flex-wrap justify-center gap-6">

            <Link
              href="/stories/the-veil-chronicles/archive"
              className="rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
            >
              ← Back to Archive
            </Link>

            <Link
              href="/stories/the-veil-chronicles/characters"
              className="rounded-full bg-[#E8D6A8] px-8 py-4 font-semibold text-[#07161D] transition hover:scale-105"
            >
              Meet the Characters →
            </Link>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}