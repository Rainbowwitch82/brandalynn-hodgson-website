"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MapCard, { MapData } from "@/components/MapCard";
import MapLightbox from "@/components/MapLightbox";

const maps: MapData[] = [
  {
    title: "Germany",
    period: "1810",
    location: "German States",
    image: "/images/stories/maps/1810-germany.jpg",
    description:
      "Before crossing the Atlantic, the Schexnaydre family called the German states home. This map illustrates the homeland they left behind before beginning their journey to Louisiana.",
  },
  {
    title: "Atlantic Crossing",
    period: "Early 1800s",
    location: "North Atlantic Ocean",
    image: "/images/stories/maps/atlantic-crossing.jpg",
    description:
      "Families sailed across the Atlantic aboard merchant vessels, relying on seasonal winds and ocean currents to reach New Orleans.",
  },
  {
    title: "Louisiana",
    period: "1823",
    location: "State of Louisiana",
    image: "/images/stories/maps/louisiana-1823.jpg",
    description:
      "One of the earliest detailed maps of Louisiana after statehood.",
  },
  {
    title: "Louisiana",
    period: "1834",
    location: "State of Louisiana",
    image: "/images/stories/maps/louisiana-1834.jpg",
    description:
      "A more detailed view of Louisiana during a period of rapid growth.",
  },
  {
    title: "German Coast",
    period: "19th Century",
    location: "Louisiana",
    image: "/images/stories/maps/german-coast-louisiana.jpg",
    description:
      "Known as La Côte des Allemands, this settlement became home to many German immigrants.",
  },
  {
    title: "Les Allemands",
    period: "19th Century",
    location: "South Louisiana",
    image: "/images/stories/maps/les-allemands.jpg",
    description:
      "The historic settlement of Les Allemands remains an important part of Louisiana's German heritage.",
  },
  {
    title: "New Orleans",
    period: "1728",
    location: "French Louisiana",
    image: "/images/stories/maps/1728-new-orleans.jpg",
    description:
      "An early French plan showing New Orleans shortly after its founding.",
  },
  {
    title: "New Orleans",
    period: "1816",
    location: "Louisiana",
    image: "/images/stories/maps/new-orleans-1816.jpg",
    description:
      "Benjamin Henry Latrobe's celebrated plan of New Orleans.",
  },
  {
    title: "Bayou Country",
    period: "1820s",
    location: "South Louisiana",
    image: "/images/stories/maps/bayou-country-1820.jpg",
    description:
      "The winding bayous and wetlands that would become home to the Schexnaydre family.",
  },
];

export default function MapsPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (selectedIndex === null) return;

      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight")
        setSelectedIndex((selectedIndex + 1) % maps.length);
      if (e.key === "ArrowLeft")
        setSelectedIndex((selectedIndex - 1 + maps.length) % maps.length);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24 text-[#F8F4EA]">
        <div className="mx-auto max-w-7xl px-6">
          <section className="text-center">
            <p className="text-sm uppercase tracking-[0.45em] text-[#E8D6A8]">
              The Veil Chronicles Archive
            </p>

            <h1 className="mt-6 font-serif text-6xl">
              Historical Maps
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-300">
              Explore the journey from Germany to Louisiana through historical
              maps that inspired The Veil Chronicles.
            </p>
          </section>

          <section className="mx-auto mt-20 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10">
            <h2 className="text-center font-serif text-3xl text-[#F4E2B8]">
              Journey Through Time
            </h2>

            <div className="mt-10 flex flex-wrap justify-center gap-4 text-center">
              <div className="rounded-full border border-[#E8D6A8]/30 px-5 py-3">🇩🇪 Germany</div>
              <span>→</span>
              <div className="rounded-full border border-[#E8D6A8]/30 px-5 py-3">🌊 Atlantic</div>
              <span>→</span>
              <div className="rounded-full border border-[#E8D6A8]/30 px-5 py-3">⚜ Louisiana</div>
              <span>→</span>
              <div className="rounded-full border border-[#E8D6A8]/30 px-5 py-3">🌿 Bayou Country</div>
            </div>
          </section>

          <section className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {maps.map((map, index) => (
              <MapCard
                key={`${map.title}-${map.period}`}
                map={map}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </section>
        </div>
      </main>

      <MapLightbox
        map={selectedIndex !== null ? maps[selectedIndex] : null}
        onClose={() => setSelectedIndex(null)}
        onPrevious={() =>
          setSelectedIndex((selectedIndex! - 1 + maps.length) % maps.length)
        }
        onNext={() =>
          setSelectedIndex((selectedIndex! + 1) % maps.length)
        }
      />
        <div className="mt-20 flex flex-wrap justify-center gap-5">
          <a
            href="/stories/the-veil-chronicles/the-archive"
            className="rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
        >
            ← Return to the Archive
          </a>

          <a
            href="/stories/the-veil-chronicles"
            className="rounded-full bg-[#E8D6A8] px-8 py-4 font-semibold text-[#07161D] transition hover:scale-105"
          >
            Return to The Veil Chronicles →
          </a>
        </div>
        
      <Footer />
    </>
  );
}