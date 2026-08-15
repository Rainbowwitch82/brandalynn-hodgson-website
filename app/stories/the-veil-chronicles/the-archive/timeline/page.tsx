"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const timelineEvents = [
  {
    year: "1809",
    title: "A Difficult Decision",
    description:
      "Johann and Elise Schexnaydre begin considering a new life in Louisiana after hearing stories of opportunity across the Atlantic.",
  },
  {
    year: "1810",
    title: "Beneath the Black Water",
    description:
      "The Schexnaydre family departs Germany. Eleven-year-old Lena receives a mysterious heirloom from Großmutter Adelheid before beginning the long voyage to Louisiana.",
  },
  {
    year: "1811",
    title: "The Bones of the Bayou",
    description:
      "The family settles into Louisiana, where unfamiliar landscapes and ancient folklore reveal that their new home carries secrets older than memory.",
  },
  {
    year: "1812",
    title: "The Veil Remembers",
    description:
      "Long-buried truths begin to emerge as the family's legacy becomes intertwined with the mysterious Veil itself.",
  },
  {
    year: "Generations Later",
    title: "Bayou Veil",
    description:
      "The legacy of the Schexnaydre family continues, eventually leading to the events of the Bayou Veil series.",
  },
  {
    year: "Future",
    title: "Bayou Heir",
    description:
      "A new generation awakens to a legacy centuries in the making.",
  },
];

export default function TimelinePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">
        <div className="mx-auto max-w-5xl px-6">

          {/* Hero */}

          <section className="text-center">

            <p className="uppercase tracking-[0.45em] text-sm text-[#E8D6A8]">
              The Veil Chronicles Archive
            </p>

            <h1 className="mt-6 font-serif text-6xl text-[#F8F4EA]">
              Historical Timeline
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
              Follow the journey of the Schexnaydre family across generations,
              from their homeland in Germany to the beginning of the Bayou
              Universe.
            </p>

          </section>

          {/* Timeline */}

          <section className="relative mt-24">

            {/* Vertical Line */}

            <div className="absolute left-6 top-0 bottom-0 w-1 rounded-full bg-[#E8D6A8]/30" />

            <div className="space-y-16">

              {timelineEvents.map((event) => (
                <div key={event.year} className="relative pl-20">

                  {/* Circle */}

                  <div className="absolute left-2 top-2 h-8 w-8 rounded-full border-4 border-[#E8D6A8] bg-[#07161D]" />

                  <div className="rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-8">

                    <p className="text-sm uppercase tracking-widest text-[#E8D6A8]">
                      {event.year}
                    </p>

                    <h2 className="mt-3 font-serif text-3xl text-[#F4E2B8]">
                      {event.title}
                    </h2>

                    <p className="mt-5 leading-8 text-gray-300">
                      {event.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </section>

          {/* Quote */}

          <section className="mx-auto mt-28 max-w-4xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-12 text-center">

            <h2 className="font-serif text-4xl text-[#F4E2B8]">
              Time Leaves Its Mark
            </h2>

            <p className="mt-8 text-xl italic leading-9 text-gray-300">
              "Every promise echoes through time.
              <br />
              Every generation adds another page
              <br />
              to the story."
            </p>

          </section>

          {/* Navigation */}

  <div className="mt-20 flex flex-wrap justify-center gap-6">

      <Link
        href="/stories/the-veil-chronicles/the-archive"
        className="rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
      >
        📜 Return to Archive
      </Link>

      <Link
        href="/stories/the-veil-chronicles"
        className="rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
      >
        🏛 Return to The Veil Chronicles
      </Link>

      <Link
        href="/stories/the-veil-chronicles/the-archive/heirlooms"
        className="rounded-full bg-[#E8D6A8] px-8 py-4 font-semibold text-[#07161D] transition hover:scale-105"
      >
        Explore Heirlooms →
      </Link>

    </div>

        </div>
      </main>

      <Footer />
    </>
  );
}