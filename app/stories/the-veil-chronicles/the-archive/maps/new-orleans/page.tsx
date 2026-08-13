"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const archiveSections = [
  {
    title: "Family Tree",
    icon: "🌳",
    description:
      "Trace the Schexnaydre family across generations and discover how one family's journey shaped the Bayou Universe.",
    href: "/stories/the-veil-chronicles/archive/family-tree",
  },
  {
    title: "Timeline",
    icon: "📜",
    description:
      "Follow the family's journey from Germany to Louisiana and explore the historical events that shaped their lives.",
    href: "/stories/the-veil-chronicles/archive/timeline",
  },
  {
    title: "Heirlooms",
    icon: "🪵",
    description:
      "Discover treasured objects passed from one generation to the next, each carrying stories of its own.",
    href: "/stories/the-veil-chronicles/archive/heirlooms",
  },
  {
    title: "Maps",
    icon: "🗺️",
    description:
      "Explore Germany, the Atlantic crossing, New Orleans, and the Louisiana frontier through beautifully illustrated maps.",
    href: "/stories/the-veil-chronicles/archive/maps",
  },
  {
    title: "Folklore",
    icon: "🌿",
    description:
      "Learn about the legends, beliefs, and whispered tales that inspired the Bayou Universe.",
    href: "/stories/the-veil-chronicles/archive/folklore",
  },
  {
    title: "Traditions",
    icon: "🇩🇪",
    description:
      "Discover the customs, language, recipes, and traditions the Schexnaydre family carried from Germany.",
    href: "/stories/the-veil-chronicles/archive/traditions",
  },
  {
    title: "Journals & Letters",
    icon: "📖",
    description:
      "Read journal excerpts, letters, and historical records that bring the family's story to life.",
    href: "/stories/the-veil-chronicles/archive/journals",
  },
];

export default function ArchivePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">

          {/* Hero */}

          <section className="text-center">

            <p className="text-sm uppercase tracking-[0.45em] text-[#E8D6A8]">
              The Veil Chronicles
            </p>

            <h1 className="mt-6 font-serif text-6xl text-[#F8F4EA]">
              The Archive
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-300">
              Preserved through journals, maps, family records, heirlooms, and
              generations of memory, the Archive offers a deeper look into the
              people, places, and traditions that shaped the Bayou Universe.
            </p>

          </section>

          {/* Archive Cards */}

          <section className="mt-24 grid gap-10 md:grid-cols-2 xl:grid-cols-3">

            {archiveSections.map((section) => (
              <Link
                key={section.title}
                href={section.href}
                className="group rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10 transition duration-300 hover:-translate-y-2 hover:border-[#E8D6A8] hover:shadow-2xl"
              >
                <div className="text-5xl">{section.icon}</div>

                <h2 className="mt-8 font-serif text-3xl text-[#F4E2B8]">
                  {section.title}
                </h2>

                <p className="mt-6 leading-8 text-gray-300">
                  {section.description}
                </p>

                <div className="mt-8 font-semibold text-[#E8D6A8]">
                  Explore →
                </div>
              </Link>
            ))}

          </section>

          {/* Quote */}

          <section className="mx-auto mt-28 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-12 text-center">

            <h2 className="font-serif text-4xl text-[#F4E2B8]">
              Every Family Leaves Something Behind
            </h2>

            <p className="mt-8 text-xl italic leading-9 text-gray-300">
              "Some inherit land.
              <br />
              Some inherit stories.
              <br />
              The Schexnaydres inherited both."
            </p>

          </section>

          {/* Navigation */}

          <div className="mt-20 flex justify-center">

            <Link
              href="/stories/the-veil-chronicles"
              className="rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
            >
              ← Back to The Veil Chronicles
            </Link>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}