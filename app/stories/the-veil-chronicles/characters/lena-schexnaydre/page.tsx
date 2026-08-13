"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LenaSchexnaydrePage() {
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
                  src="/images/stories/characters/lena-schexnaydre.png"
                  alt="Magdalena Lena Schexnaydre"
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
                    Book One
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
                Magdalena "Lena"
                <br />
                Schexnaydre
              </h1>

              <p className="mt-5 text-xl italic text-[#E8D6A8]">
                Daughter • Tochter
              </p>

              <p className="mt-8 text-lg leading-9 text-gray-300">
                Eleven-year-old Magdalena Schexnaydre stands at the beginning
                of a journey that will carry her family across an ocean and
                into a world none of them fully understand.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-300">
                In <strong className="text-[#F4E2B8]">
                  Beneath the Black Water
                </strong>, Lena leaves Germany with her family and waits in
                L'Orient, France, for the ship that will carry them toward the
                New World.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6">
                  <p className="text-xs uppercase tracking-widest text-[#E8D6A8]">
                    Age
                  </p>

                  <p className="mt-2 font-serif text-2xl text-[#F4E2B8]">
                    11
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6">
                  <p className="text-xs uppercase tracking-widest text-[#E8D6A8]">
                    Birthdate
                  </p>

                  <p className="mt-2 font-serif text-2xl text-[#F4E2B8]">
                    September 8, 1799
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* Journey */}

          <section className="mx-auto mt-28 max-w-5xl">

            <div className="text-center">

              <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
                Her Journey Begins
              </p>

              <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
                From the Old World to the New
              </h2>

            </div>

            <div className="mt-10 rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10">

              <p className="text-lg leading-9 text-gray-300">
                Lena's story begins before the family ever reaches Louisiana.
                The Schexnaydres leave Germany carrying their belongings,
                traditions, memories, and heirlooms with them.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-300">
                At L'Orient, France, Lena waits with her family for the ship
                that will carry them toward their new life. The crossing is
                more than a journey between countries. It marks the beginning
                of a legacy that will continue long after the family reaches
                the Louisiana frontier.
              </p>

            </div>

          </section>

          {/* Family */}

          <section className="mx-auto mt-24 max-w-5xl">

            <div className="text-center">

              <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
                The Family
              </p>

              <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
                The Schexnaydre Legacy
              </h2>

            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-4">

              <Link
                href="/stories/the-veil-chronicles/characters/grossmutter-adelheid"
                className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6 text-center transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >
                <p className="text-sm text-[#E8D6A8]">
                  Grandmother
                </p>

                <p className="mt-2 font-serif text-xl text-[#F4E2B8]">
                  Adelheid
                </p>
              </Link>

              <Link
                href="/stories/the-veil-chronicles/characters/johann-schexnaydre"
                className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6 text-center transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >
                <p className="text-sm text-[#E8D6A8]">
                  Father
                </p>

                <p className="mt-2 font-serif text-xl text-[#F4E2B8]">
                  Johann
                </p>
              </Link>

              <Link
                href="/stories/the-veil-chronicles/characters/elise-schexnaydre"
                className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6 text-center transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >
                <p className="text-sm text-[#E8D6A8]">
                  Mother
                </p>

                <p className="mt-2 font-serif text-xl text-[#F4E2B8]">
                  Elise
                </p>
              </Link>

              <Link
                href="/stories/the-veil-chronicles/characters/rein-schexnaydre"
                className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6 text-center transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >
                <p className="text-sm text-[#E8D6A8]">
                  Older Brother
                </p>

                <p className="mt-2 font-serif text-xl text-[#F4E2B8]">
                  Reinhard
                </p>
              </Link>

            </div>

          </section>

          {/* Heirloom */}

          <section className="mx-auto mt-24 max-w-5xl">

            <div className="grid items-center gap-10 md:grid-cols-2">

              <div>

                <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
                  Family Heirloom
                </p>

                <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
                  The Wooden Woman
                </h2>

                <p className="mt-6 text-lg leading-9 text-gray-300">
                  Among the family's treasured possessions is the mysterious
                  Wooden Woman, one of the important heirlooms carried through
                  the family's journey.
                </p>

                <p className="mt-6 text-lg leading-9 text-gray-300">
                  What appears to be an old family object carries a history
                  that reaches beyond what Lena initially understands.
                </p>

                <Link
                  href="/stories/the-veil-chronicles/archive/heirlooms/carved-wooden-woman"
                  className="mt-8 inline-flex rounded-full border border-[#E8D6A8] px-7 py-3 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
                >
                  Examine the Wooden Woman →
                </Link>

              </div>

              <div className="rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-8 text-center">

                <p className="font-serif text-3xl text-[#F4E2B8]">
                  The Past Whispers
                </p>

                <p className="mt-5 text-lg italic leading-8 text-gray-300">
                  Some things cross the water with you.
                  <br />
                  Some things are waiting on the other side.
                </p>

              </div>

            </div>

          </section>

          {/* Series Connection */}

          <section className="mx-auto mt-24 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10 text-center">

            <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
              The Beginning of a Legacy
            </p>

            <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
              Lena's Story Does Not End Here
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-300">
              The choices made by the Schexnaydre family in the early 1800s
              will echo through generations. What begins with Lena's journey
              across the Atlantic becomes part of the larger legacy that
              eventually leads to the world of Bayou Veil.
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
              href="/stories/the-veil-chronicles/beneath-the-black-water"
              className="rounded-full bg-[#E8D6A8] px-8 py-4 font-semibold text-[#07161D] transition hover:scale-105"
            >
              Beneath the Black Water →
            </Link>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}