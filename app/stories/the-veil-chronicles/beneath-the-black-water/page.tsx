"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BeneathTheBlackWaterPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">

          {/* Hero */}
          <section className="grid items-center gap-16 lg:grid-cols-2">

            <div className="relative mx-auto h-[700px] w-full max-w-md overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/stories/beneath-the-black-water.png"
                alt="Beneath the Black Water"
                fill
                className="object-cover"
              />
            </div>

            <div>

              <p className="uppercase tracking-[0.4em] text-[#E8D6A8] text-sm">
                The Veil Chronicles
              </p>

              <h1 className="mt-5 font-serif text-6xl text-[#F8F4EA]">
                Beneath the Black Water
              </h1>

              <p className="mt-4 text-xl text-[#E8D6A8]">
                Book One
              </p>

              <blockquote className="mt-10 border-l-4 border-[#E8D6A8] pl-6 italic text-xl leading-9 text-gray-300">
                "Every family carries stories.
                <br />
                Some become legends.
                <br />
                Others are waiting to be remembered."
              </blockquote>

              <div className="mt-12 flex flex-wrap gap-4">

                <button
                  disabled
                  className="cursor-not-allowed rounded-full bg-[#E8D6A8]/40 px-8 py-4 font-semibold text-[#07161D]"
                >
                  Coming Soon
                </button>

                <Link
                  href="/stories/the-veil-chronicles"
                  className="rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
                >
                  ← Back to Series
                </Link>

              </div>

            </div>

          </section>

          {/* Synopsis */}

          <section className="mx-auto mt-28 max-w-5xl">

            <p className="uppercase tracking-[0.4em] text-[#E8D6A8] text-sm">
              Synopsis
            </p>

            <h2 className="mt-6 font-serif text-5xl text-[#F4E2B8]">
              A Journey Begins
            </h2>

            <div className="mt-10 space-y-8 text-xl leading-10 text-gray-300">

              <p>
                In 1810, eleven-year-old <strong>Magdalena "Lena"
                Schexnaydre</strong> leaves her home in Germany with her
                parents and brother, bound for an unfamiliar future in the
                Louisiana Territory. Their journey promises fertile land,
                fresh beginnings, and the hope of a better life. But before
                Lena departs, her grandmother places a small carved wooden
                woman into her hands along with a simple warning:
              </p>

              <p className="text-center font-serif text-3xl italic text-[#E8D6A8]">
                "Mind your manners in the new place."
              </p>

              <p>
                As the Schexnaydre family crosses Europe and sails across the
                Atlantic, Lena begins to realize her grandmother's words were
                never meant for strangers. Ancient stories echo among the
                immigrants, old rules are whispered in the darkness below
                deck, and the line between folklore and truth grows thinner
                with every mile.
              </p>

              <p>
                When the family finally reaches the mysterious waterways of
                Louisiana, they discover that some promises survive oceans,
                some traditions refuse to be forgotten, and some neighbors
                have been waiting for them far longer than anyone could
                imagine.
              </p>

              <p>
                Rich with history, family, folklore, and quiet magic,
                <strong> Beneath the Black Water</strong> is the opening novel
                of <strong>The Veil Chronicles</strong>, the historical
                fantasy trilogy that reveals the origins of the Bayou
                Universe and the centuries-old legacy that will one day shape
                the events of <strong>Bayou Veil</strong>.
              </p>

            </div>

          </section>

          {/* Family */}

          <section className="mx-auto mt-28 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-12 text-center">

            <p className="uppercase tracking-[0.4em] text-[#E8D6A8] text-sm">
              Character Archive
            </p>

            <h2 className="mt-5 font-serif text-5xl text-[#F4E2B8]">
              Meet the Schexnaydres
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              Before the Bayou had its legends, there was a family searching
              for a new beginning. Discover the people whose courage,
              traditions, and choices shaped the Bayou Universe.
            </p>

            <Link
              href="/stories/the-veil-chronicles/characters"
              className="mt-10 inline-flex rounded-full bg-[#E8D6A8] px-10 py-5 font-semibold text-[#07161D] transition duration-300 hover:scale-105"
            >
              Explore the Family Archives →
            </Link>

          </section>

          {/* Journey */}

          <section className="mx-auto mt-28 max-w-5xl text-center">

            <p className="uppercase tracking-[0.4em] text-[#E8D6A8] text-sm">
              The Journey
            </p>

            <h2 className="mt-6 font-serif text-5xl text-[#F4E2B8]">
              Across an Ocean
            </h2>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-xl text-[#E8D6A8]">

              <span>🇩🇪 Germany</span>

              <span>→</span>

              <span>🇫🇷 France</span>

              <span>→</span>

              <span>🌊 Atlantic Ocean</span>

              <span>→</span>

              <span>⚜️ Louisiana</span>

            </div>

          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}