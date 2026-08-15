"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import JournalCard from "./components/JournalCard";
import JournalLightbox from "./components/JournalLightbox";

const journals = [
  {
    archive: "J-001",
    title: "Johann's Journal",
    type: "Leather Bound Journal",
    period: "1810",
    location: "Germany",
    image: "/images/stories/journals/johann-journal.png",
    description:
      "Johann's private journal chronicles the difficult decision to leave Germany, his hopes for the future, and the fears that accompanied the family's journey to Louisiana.",
  },
  {
    archive: "L-002",
    title: "Elise's Letters",
    type: "Wax-Sealed Correspondence",
    period: "1810–1811",
    location: "Atlantic Crossing",
    image: "/images/stories/journals/elise-letters.png",
    description:
      "Heartfelt letters written by Elise to family members left behind, preserving memories and hope across the Atlantic Ocean.",
  },
  {
    archive: "J-003",
    title: "Lena's Journal",
    type: "Illustrated Field Journal",
    period: "1811",
    location: "Louisiana",
    image: "/images/stories/journals/lena-journal.png",
    description:
      "The observations of eleven-year-old Lena as she discovers the strange beauty of Louisiana's bayous and begins recording everything she sees.",
  },
  {
    archive: "C-004",
    title: "Captain's Log",
    type: "Official Ship Record",
    period: "1810–1811",
    location: "Atlantic Ocean",
    image: "/images/stories/journals/captains-log.png",
    description:
      "The official log of the merchant vessel documenting weather, navigation, storms, cargo, and daily life during the family's Atlantic voyage.",
  },
  {
    archive: "R-005",
    title: "Family Recipe Book",
    type: "Kitchen Ledger",
    period: "1810–Present",
    location: "Germany & Louisiana",
    image: "/images/stories/journals/family-recipe-book.png",
    description:
      "Recipes carried from Germany and adapted with Louisiana ingredients, preserving generations of family traditions around the table.",
  },
  {
    archive: "A-006",
    title: "Adelheid's Book of Wisdom",
    type: "Household Book",
    period: "Before 1810",
    location: "Germany",
    image: "/images/stories/journals/adelheid-book.png",
    description:
      "An aged notebook filled with blessings, herbal remedies, sayings, family traditions, and practical wisdom entrusted to future generations.",
  },
];

export default function JournalsPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        setSelectedIndex(null);
      }

      if (e.key === "ArrowRight") {
        setSelectedIndex((selectedIndex + 1) % journals.length);
      }

      if (e.key === "ArrowLeft") {
        setSelectedIndex(
          (selectedIndex - 1 + journals.length) % journals.length
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">

        <div className="mx-auto max-w-7xl px-6">

          <section className="text-center">

            <div className="relative mx-auto mb-12 h-[320px] max-w-5xl overflow-hidden rounded-3xl">
              <Image
                src="/images/stories/journals/journals-cover.png"
                alt="The Schexnaydre Family Journals"
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
              Family Journals
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-300">
              Preserved within these pages are journals, letters, ship logs,
              recipes, and handwritten wisdom passed from one generation of the
              Schexnaydre family to the next.
            </p>

          </section>

          <section className="mx-auto mt-20 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10">

            <h2 className="text-center font-serif text-3xl text-[#F4E2B8]">
              Archive Collection
            </h2>

            <p className="mt-5 text-center text-gray-300">
              Each document has been carefully preserved as part of the
              Schexnaydre Family Archive.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 text-center">

              <div className="rounded-full border border-[#E8D6A8]/30 px-5 py-3">
                📖 Johann
              </div>

              <span className="text-2xl text-[#E8D6A8]">→</span>

              <div className="rounded-full border border-[#E8D6A8]/30 px-5 py-3">
                💌 Elise
              </div>

              <span className="text-2xl text-[#E8D6A8]">→</span>

              <div className="rounded-full border border-[#E8D6A8]/30 px-5 py-3">
                🌿 Lena
              </div>

              <span className="text-2xl text-[#E8D6A8]">→</span>

              <div className="rounded-full border border-[#E8D6A8]/30 px-5 py-3">
                ⚓ Captain
              </div>

              <span className="text-2xl text-[#E8D6A8]">→</span>

              <div className="rounded-full border border-[#E8D6A8]/30 px-5 py-3">
                🍞 Recipes
              </div>

              <span className="text-2xl text-[#E8D6A8]">→</span>

              <div className="rounded-full border border-[#E8D6A8]/30 px-5 py-3">
                🕯 Adelheid
              </div>

            </div>

          </section>

          <section className="mt-24 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {journals.map((journal, index) => (
              <JournalCard
                key={journal.archive}
                journal={journal}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </section>
                    {selectedIndex !== null && (
            <JournalLightbox
              journals={journals}
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