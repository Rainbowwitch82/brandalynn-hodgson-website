"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const heirlooms = [
  {
    title: "The Carved Wooden Woman",
    image: "/images/stories/heirlooms/carved-wooden-woman.png",
    href: "/stories/the-veil-chronicles/the-archive/heirlooms/carved-wooden-woman",
    description:
      "A hand-carved guardian passed through generations, believed to watch over the family during times of uncertainty.",
  },
  {
    title: "Grandmother's Herb Pouch",
    image: "/images/stories/heirlooms/herb-pouch.png",
    href: "/stories/the-veil-chronicles/the-archive/heirlooms/herb-pouch",
    description:
      "A small pouch filled with herbs gathered in Germany and carried across the Atlantic, preserving generations of healing traditions.",
  },
  {
    title: "The Family Rosary",
    image: "/images/stories/heirlooms/family-rosary.png",
    href: "/stories/the-veil-chronicles/the-archive/heirlooms/family-rosary",
    description:
      "A treasured rosary carried by the Schexnaydre family through hardship, faith, and new beginnings.",
  },
  {
    title: "The Family Bible",
    image: "/images/stories/heirlooms/family-bible.png",
    href: "/stories/the-veil-chronicles/the-archive/heirlooms/family-bible",
    description:
      "Containing births, marriages, deaths, and handwritten notes that preserve the family's history.",
  },
  {
    title: "The Silver Key",
    image: "/images/stories/heirlooms/silver-key.png",
    href: "/stories/the-veil-chronicles/the-archive/heirlooms/silver-key",
    description:
      "An old silver key whose original lock has long since been forgotten, yet it remains one of the family's greatest treasures.",
  },
  {
    title: "The Hope Chest",
    image: "/images/stories/heirlooms/hope-chest.png",
    href: "/stories/the-veil-chronicles/the-archive/heirlooms/hope-chest",
    description:
      "Filled with treasured belongings that made the voyage from Germany to Louisiana.",
  },
  {
    title: "The Brass Candle Holder",
    image: "/images/stories/heirlooms/brass-candle-holder.png",
    href: "/stories/the-veil-chronicles/the-archive/heirlooms/brass-candle-holder",
    description:
      "Used during evenings of prayer, storytelling, and remembrance.",
  },
  {
    title: "The Embroidered Sampler",
    image: "/images/stories/heirlooms/embroidered-sampler.png",
    href: "/stories/the-veil-chronicles/the-archive/heirlooms/embroidered-sampler",
    description:
      "A beautifully stitched reminder that every generation leaves a piece of itself behind.",
  },
  {
    title: "Pressed Wildflowers",
    image: "/images/stories/heirlooms/pressed-wildflowers.png",
    href: "/stories/the-veil-chronicles/the-archive/heirlooms/pressed-wildflowers",
    description:
      "Flowers carefully preserved from home and later from Louisiana, bridging two worlds.",
  },
  {
    title: "Immigration Papers",
    image: "/images/stories/heirlooms/immigration-papers.png",
    href: "/stories/the-veil-chronicles/the-archive/heirlooms/immigration-papers",
    description:
      "The fragile documents that recorded the Schexnaydre family's journey to a new beginning.",
  },
  {
    title: "The Schexnaydre Silver Locket",
    image: "/images/stories/heirlooms/silver-locket.png",
    href: "/stories/the-archive/heirlooms/silver-locket",
    description:
      "A sterling silver family locket passed from generation to generation. Its story continues through The Veil Chronicles, Bayou Veil, and Bayou Heir.",
  },
];

export default function HeirloomsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">

          {/* Hero */}

          <div className="text-center">

            <p className="uppercase tracking-[0.45em] text-[#E8D6A8] text-sm">
              The Archive
            </p>

            <h1 className="mt-6 font-serif text-6xl text-[#F8F4EA]">
              Family Heirlooms
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-300">
              Every object tells a story. These treasured heirlooms crossed an
              ocean, survived generations, and became silent witnesses to the
              history of the Schexnaydre family.
            </p>

          </div>

          {/* Heirloom Grid */}

          <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {heirlooms.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] transition duration-300 hover:-translate-y-2 hover:border-[#E8D6A8]"
              >
                <div className="relative h-80 overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="p-8">

                  <h2 className="font-serif text-2xl text-[#F4E2B8]">
                    {item.title}
                  </h2>

                  <p className="mt-4 leading-7 text-gray-300">
                    {item.description}
                  </p>

                  <div className="mt-6 text-[#E8D6A8] font-semibold">
                    View Archive →
                  </div>

                </div>

              </Link>
            ))}

          </div>
                    {/* Bottom Navigation */}

          <div className="mt-20 rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-12 text-center">

            <p className="text-sm uppercase tracking-[0.45em] text-[#E8D6A8]">
              The Archive
            </p>

            <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
              More Than Objects
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-300">
              Every heirloom preserved here has traveled through generations of
              the Schexnaydre family. Some are symbols of faith, others of home,
              memory, sacrifice, and love. Together they tell the story of a
              family whose legacy stretches from Germany to Louisiana and
              continues throughout the Bayou Universe.
            </p>

          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-6">

            <Link
              href="/stories/the-archive"
              className="rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
            >
              ← Back to The Archive
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