"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const archiveSections = [
  {
    title: "Heirlooms",
    description:
      "Discover treasured objects passed through generations of the Schexnaydre family, each carrying memories, promises, and forgotten magic.",
    image: "/images/stories/heirlooms/hope-chest.png",
    href: "/stories/the-veil-chronicles/the-archive/heirlooms",
  },
  {
    title: "Characters",
    description:
      "Meet the family members whose choices shaped the Schexnaydre legacy from Germany to the Louisiana bayous.",
    image: "/images/stories/characters/johann-schexnaydre.png",
    href: "/stories/the-veil-chronicles/characters",
  },
  {
    title: "Historical Maps",
    description:
      "Journey through centuries of history with antique maps documenting the Schexnaydre family's voyage from Germany across the Atlantic to the bayous of Louisiana.",
    image: "/images/stories/maps/maps.png",
    href: "/stories/the-veil-chronicles/the-archive/maps",
  },
  {
    title: "Timeline",
    description:
      "Trace the Schexnaydre family's journey across generations, from Germany to Louisiana, through the defining events that shaped The Veil Chronicles.",
    image: "/images/stories/timeline/timeline.png",
    href: "/stories/the-veil-chronicles/the-archive/timeline",
  },
  {
    title: "Traditions",
    description:
      "Learn about the customs, folklore, and family rituals carried across the Atlantic and preserved for generations.",
    image: "/images/stories/traditions/traditions.png",
    href: "/stories/the-veil-chronicles/the-archive/traditions",
  },
  {
    title: "Journals",
    description:
      "Read letters, journal entries, and personal writings that reveal the private lives of the Schexnaydre family.",
    image: "/images/stories/journals/journals-cover.png",
    href: "/stories/the-veil-chronicles/the-archive/journals",
  },
];

export default function ArchivePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <section className="text-center mb-20">
            <p className="uppercase tracking-[0.45em] text-[#E8D6A8] text-sm">
              The Veil Chronicles
            </p>

            <h1 className="mt-6 font-serif text-6xl text-[#F8F4EA]">
              The Archive
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-300">
              Welcome to the Schexnaydre Family Archive. Explore the people,
              heirlooms, maps, journals, traditions, and history that connect
              <span className="italic"> The Veil Chronicles</span> to the world
              of <span className="italic">Bayou Veil</span>.
            </p>
          </section>

          <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {archiveSections.map((section) => (
              <Link
                key={section.title}
                href={section.href}
                className="group overflow-hidden rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] transition duration-300 hover:-translate-y-2 hover:border-[#E8D6A8] hover:shadow-2xl hover:shadow-[#E8D6A8]/10"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                <div className="p-8">
                  <h2 className="font-serif text-3xl text-[#F4E2B8]">
                    {section.title}
                  </h2>

                  <p className="mt-4 leading-8 text-gray-300">
                    {section.description}
                  </p>

                  <span className="mt-6 inline-flex items-center font-semibold text-[#E8D6A8]">
                    Explore
                    <span className="ml-2 transition-transform group-hover:translate-x-2">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </section>

          <section className="mt-24 text-center">
            <Link
              href="/stories/the-veil-chronicles"
              className="inline-flex rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
            >
              ← Back to The Veil Chronicles
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}