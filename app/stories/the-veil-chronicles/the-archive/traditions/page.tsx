"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import TraditionCard from "./TraditionCard";
import TraditionLightbox from "./TraditionLightbox";

const traditions = [
  {
    title: "The Family Table",
    period: "Since 1810",
    location: "Germany & Louisiana",
    image: "/images/stories/traditions/the-family-table.png",
    description:
      "Meals were never rushed. Bread, conversation, and gratitude united each generation around the family table.",
  },
  {
    title: "Candlelit Nights",
    period: "Generational Tradition",
    location: "Family Home",
    image: "/images/stories/traditions/candlelit-nights.png",
    description:
      "Each evening a candle was lit in remembrance of those who came before, filling the home with warmth and reflection.",
  },
  {
    title: "Moonlit Walks",
    period: "Louisiana Years",
    location: "Bayou Country",
    image: "/images/stories/traditions/moonlit-walk.png",
    description:
      "Quiet walks beneath the full moon became a cherished family tradition, offering peace, stories, and moments of wonder.",
  },
  {
    title: "Healing Garden",
    period: "19th Century",
    location: "Louisiana",
    image: "/images/stories/traditions/healing-garden.png",
    description:
      "The family cultivated herbs and medicinal plants, preserving generations of practical knowledge and natural remedies.",
  },
  {
    title: "Storytime by the Hearth",
    period: "Every Winter",
    location: "Family Hearth",
    image: "/images/stories/traditions/storytime-by-the-hearth.png",
    description:
      "Evenings around the fireplace were filled with family history, legends, laughter, and lessons passed from one generation to the next.",
  },
  {
    title: "German Roots",
    period: "Before 1810",
    location: "German States",
    image: "/images/stories/traditions/german-roots.png",
    description:
      "Long before Louisiana, the Schexnaydre family carried traditions, recipes, music, and customs from their homeland that remained part of their identity.",
  },
];

export default function TraditionsPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        setSelectedIndex(null);
      }

      if (e.key === "ArrowRight") {
        setSelectedIndex((selectedIndex + 1) % traditions.length);
      }

      if (e.key === "ArrowLeft") {
        setSelectedIndex(
          (selectedIndex - 1 + traditions.length) % traditions.length
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">

          <section className="text-center">

            <div className="relative mx-auto mb-12 h-[320px] max-w-5xl overflow-hidden rounded-3xl">
              <Image
                src="/images/stories/traditions/traditions.png"
                alt="Traditions"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07161D] via-[#07161D]/30 to-transparent" />
            </div>

            <p className="uppercase tracking-[0.45em] text-sm text-[#E8D6A8]">
              The Veil Chronicles Archive
            </p>

            <h1 className="mt-6 font-serif text-6xl text-[#F8F4EA]">
              Family Traditions
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-300">
              From Germany to the Louisiana bayous, generations of the
              Schexnaydre family carried their customs, stories, recipes,
              celebrations, and quiet rituals across centuries.
            </p>

          </section>

          <section className="mt-24 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {traditions.map((tradition, index) => (
              <TraditionCard
                key={tradition.title}
                tradition={tradition}
                onClick={() => setSelectedIndex(index)}
              />
            ))}

          </section>
                    {selectedIndex !== null && (
            <TraditionLightbox
              traditions={traditions}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          )}

          <section className="mt-24 text-center">
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="/stories/the-veil-chronicles/the-archive"
                className="rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
              >
                📜 Return to Archive
              </a>

              <a
                href="/stories/the-veil-chronicles"
                className="rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
              >
                🏛 Return to The Veil Chronicles
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}