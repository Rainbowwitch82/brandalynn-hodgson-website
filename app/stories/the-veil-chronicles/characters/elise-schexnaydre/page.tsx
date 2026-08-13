"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EliseSchexnaydrePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">

          {/* Hero */}

          <section className="grid items-center gap-12 lg:grid-cols-2">

            {/* Character Image */}

            <div className="relative overflow-hidden rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] shadow-2xl">

              <div className="relative aspect-[4/5]">

                <Image
                  src="/images/stories/characters/elise-schexnaydre.png"
                  alt="Elise Schexnaydre"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8">

                  <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
                    The Veil Chronicles
                  </p>

                  <p className="mt-2 text-lg italic text-[#F4E2B8]">
                    The Heart of the Family
                  </p>

                </div>

              </div>

            </div>

            {/* Character Introduction */}

            <div>

              <p className="text-sm uppercase tracking-[0.45em] text-[#E8D6A8]">
                The Schexnaydre Family
              </p>

              <h1 className="mt-5 font-serif text-5xl leading-tight text-[#F8F4EA] md:text-6xl">
                Elise
                <br />
                Schexnaydre
              </h1>

              <p className="mt-5 text-xl italic text-[#E8D6A8]">
                Mother • Mutter
              </p>

              <p className="mt-8 text-lg leading-9 text-gray-300">
                Elise is the heart of the Schexnaydre household, carrying the
                warmth of family and the traditions of home as the family
                prepares to leave Germany behind.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-300">
                As wife to Johann and mother to Rein and Lena, Elise stands
                beside her family as they begin the difficult journey toward
                a new life in Louisiana.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6">
                  <p className="text-xs uppercase tracking-widest text-[#E8D6A8]">
                    Age in 1810
                  </p>

                  <p className="mt-2 font-serif text-2xl text-[#F4E2B8]">
                    36
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6">
                  <p className="text-xs uppercase tracking-widest text-[#E8D6A8]">
                    Birthdate
                  </p>

                  <p className="mt-2 font-serif text-2xl text-[#F4E2B8]">
                    May 14, 1774
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* Her Role */}

          <section className="mx-auto mt-28 max-w-5xl">

            <div className="text-center">

              <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
                The Mother
              </p>

              <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
                Carrying Home Across the Water
              </h2>

            </div>

            <div className="mt-10 rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10">

              <p className="text-lg leading-9 text-gray-300">
                For Elise, the journey to Louisiana is more than a change of
                place. She carries the customs, memories, and traditions of
                her family with her as the Schexnaydres prepare to begin
                another chapter of their lives.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-300">
                Her role within the family is rooted in protection, love, and
                keeping the people she cares for connected even when the world
                around them changes.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-300">
                The journey will test what the family believes they can leave
                behind, and what must be carried forward.
              </p>

            </div>

          </section>

          {/* Family */}

          <section className="mx-auto mt-24 max-w-5xl">

            <div className="text-center">

              <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
                Her Family
              </p>

              <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
                The Schexnaydre Family
              </h2>

            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-4">

              <Link
                href="/stories/the-veil-chronicles/adelheid-schexnaydre"
                className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6 text-center transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >
                <p className="text-sm text-[#E8D6A8]">
                  Mother-in-Law
                </p>

                <p className="mt-2 font-serif text-xl text-[#F4E2B8]">
                  Adelheid
                </p>
              </Link>

              <Link
                href="/stories/the-veil-chronicles/johann-schexnaydre"
                className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6 text-center transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >
                <p className="text-sm text-[#E8D6A8]">
                  Husband
                </p>

                <p className="mt-2 font-serif text-xl text-[#F4E2B8]">
                  Johann
                </p>
              </Link>

              <Link
                href="/stories/the-veil-chronicles/rein-schexnaydre"
                className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6 text-center transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >
                <p className="text-sm text-[#E8D6A8]">
                  Son
                </p>

                <p className="mt-2 font-serif text-xl text-[#F4E2B8]">
                  Reinhard
                </p>
              </Link>

              <Link
                href="/stories/the-veil-chronicles/lena-schexnaydre"
                className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6 text-center transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >
                <p className="text-sm text-[#E8D6A8]">
                  Daughter
                </p>

                <p className="mt-2 font-serif text-xl text-[#F4E2B8]">
                  Magdalena
                </p>
              </Link>

            </div>

          </section>

          {/* Family Traditions */}

          <section className="mx-auto mt-24 max-w-5xl">

            <div className="text-center">

              <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
                What She Carries
              </p>

              <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
                Traditions of Home
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                The things carried across the Atlantic are not limited to
                trunks and belongings. Family traditions become part of the
                legacy as well.
              </p>

            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">

              <div className="rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-8">

                <h3 className="font-serif text-2xl text-[#F4E2B8]">
                  Family
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  Elise's family remains at the center of every decision as
                  they face an uncertain future.
                </p>

              </div>

              <div className="rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-8">

                <h3 className="font-serif text-2xl text-[#F4E2B8]">
                  Memory
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  The memories of the old world travel with the Schexnaydres,
                  shaping the way they understand their new home.
                </p>

              </div>

              <div className="rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-8">

                <h3 className="font-serif text-2xl text-[#F4E2B8]">
                  Legacy
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  What Elise helps preserve within her family will continue
                  beyond her own generation.
                </p>

              </div>

            </div>

          </section>

          {/* Heirloom Connection */}

          <section className="mx-auto mt-24 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10">

            <div className="text-center">

              <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
                Family Heirloom
              </p>

              <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
                The Silver Locket
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-300">
                The Schexnaydre family carries heirlooms whose importance
                extends beyond their physical form. The silver locket becomes
                one of the objects whose story continues through generations.
              </p>

              <Link
                href="/stories/the-veil-chronicles/archive/heirlooms/locket"
                className="mt-8 inline-flex rounded-full border border-[#E8D6A8] px-7 py-3 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
              >
                Examine the Silver Locket →
              </Link>

            </div>

          </section>

          {/* Legacy */}

          <section className="mx-auto mt-24 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10 text-center">

            <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
              The Legacy
            </p>

            <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
              Family Is the First Home
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-300">
              As the Schexnaydres prepare to leave everything familiar behind,
              Elise becomes part of the quiet work of keeping the family
              together. The home they build in Louisiana will be different
              from the one they leave behind, but the people within it will
              carry their history with them.
            </p>

          </section>

          {/* Navigation */}

          <div className="mt-20 flex flex-wrap justify-center gap-5">

            <Link
              href="/stories/the-veil-chronicles/characters"
              className="rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
            >
              ← Character Archive
            </Link>

            <Link
              href="/stories/the-veil-chronicles"
              className="rounded-full bg-[#E8D6A8] px-8 py-4 font-semibold text-[#07161D] transition hover:scale-105"
            >
              Back to The Veil Chronicles →
            </Link>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}