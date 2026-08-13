"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdelheidSchexnaydrePage() {
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
                  src="/images/stories/characters/adelheid-schexnaydre.png"
                  alt="Großmutter Adelheid Schexnaydre"
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
                    Keeper of the Family
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
                Großmutter
                <br />
                Adelheid Schexnaydre
              </h1>

              <p className="mt-5 text-xl italic text-[#E8D6A8]">
                Grandmother • Großmutter
              </p>

              <p className="mt-8 text-lg leading-9 text-gray-300">
                Adelheid stands at the heart of the Schexnaydre family,
                carrying the memories, traditions, and stories of the
                generations who came before her.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-300">
                Before the family begins its journey toward the New World,
                Adelheid represents the connection between the life they are
                leaving behind and the legacy they will carry with them.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6">
                  <p className="text-xs uppercase tracking-widest text-[#E8D6A8]">
                    Age in 1810
                  </p>

                  <p className="mt-2 font-serif text-2xl text-[#F4E2B8]">
                    65
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6">
                  <p className="text-xs uppercase tracking-widest text-[#E8D6A8]">
                    Birthdate
                  </p>

                  <p className="mt-2 font-serif text-2xl text-[#F4E2B8]">
                    February 2, 1745
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* Her Place in the Family */}

          <section className="mx-auto mt-28 max-w-5xl">

            <div className="text-center">

              <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
                The Keeper
              </p>

              <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
                The Memory of a Family
              </h2>

            </div>

            <div className="mt-10 rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10">

              <p className="text-lg leading-9 text-gray-300">
                Adelheid represents the family's connection to the past. The
                Schexnaydres do not leave Germany with only possessions. They
                carry stories, customs, heirlooms, and memories that have been
                passed down through generations.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-300">
                Her presence reminds the family that leaving one home does not
                mean leaving behind everything that made them who they are.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-300">
                For Lena especially, the things Adelheid leaves behind become
                part of a legacy whose meaning will not become clear all at
                once.
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
                The Schexnaydre Line
              </h2>

            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-4">

              <Link
                href="/stories/the-veil-chronicles/johann-schexnaydre"
                className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6 text-center transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >
                <p className="text-sm text-[#E8D6A8]">
                  Son
                </p>

                <p className="mt-2 font-serif text-xl text-[#F4E2B8]">
                  Johann
                </p>
              </Link>

              <Link
                href="/stories/the-veil-chronicles/elise-schexnaydre"
                className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6 text-center transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >
                <p className="text-sm text-[#E8D6A8]">
                  Daughter-in-Law
                </p>

                <p className="mt-2 font-serif text-xl text-[#F4E2B8]">
                  Elise
                </p>
              </Link>

              <Link
                href="/stories/the-veil-chronicles/reinhard-schexnaydre"
                className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6 text-center transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >
                <p className="text-sm text-[#E8D6A8]">
                  Grandson
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
                  Granddaughter
                </p>

                <p className="mt-2 font-serif text-xl text-[#F4E2B8]">
                  Magdalena
                </p>
              </Link>

            </div>

          </section>

          {/* Family Heirlooms */}

          <section className="mx-auto mt-24 max-w-5xl">

            <div className="text-center">

              <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
                Family Heirlooms
              </p>

              <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
                What the Family Carries Forward
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                The Schexnaydre heirlooms are more than objects. They preserve
                names, memories, traditions, and pieces of the lives that came
                before.
              </p>

            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">

              <Link
                href="/stories/the-veil-chronicles/archive/heirlooms/carved-wooden-woman"
                className="rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-8 transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >
                <p className="text-sm uppercase tracking-widest text-[#E8D6A8]">
                  Important Heirloom
                </p>

                <h3 className="mt-3 font-serif text-2xl text-[#F4E2B8]">
                  The Carved Wooden Woman
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  A mysterious family object whose history reaches beyond what
                  Lena initially understands.
                </p>
              </Link>

              <Link
                href="/stories/the-veil-chronicles/archive/heirlooms/locket"
                className="rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-8 transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >
                <p className="text-sm uppercase tracking-widest text-[#E8D6A8]">
                  Family Heirloom
                </p>

                <h3 className="mt-3 font-serif text-2xl text-[#F4E2B8]">
                  The Silver Locket
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  A treasured family locket whose journey continues through
                  generations of the Schexnaydre family.
                </p>
              </Link>

            </div>

          </section>

          {/* Legacy */}

          <section className="mx-auto mt-24 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10 text-center">

            <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
              The Legacy
            </p>

            <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
              The Past Whispers
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg italic leading-9 text-gray-300">
              Some things cross the water with you.
              <br />
              Some things are waiting on the other side.
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-300">
              Adelheid's generation represents the roots of the family. What
              the Schexnaydres carry forward will become part of a legacy that
              reaches far beyond the journey of 1810.
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