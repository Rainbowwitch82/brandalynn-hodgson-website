"use client";

import Image from "next/image";
import Link from "next/link";

interface Tradition {
  title: string;
  period: string;
  location: string;
  image: string;
  description: string;
}

interface TraditionLightboxProps {
  traditions: Tradition[];
  selectedIndex: number;
  setSelectedIndex: (index: number | null) => void;
}

export default function TraditionLightbox({
  traditions,
  selectedIndex,
  setSelectedIndex,
}: TraditionLightboxProps) {
  const tradition = traditions[selectedIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
      onClick={() => setSelectedIndex(null)}
    >
      <div
        className="relative w-full max-w-7xl overflow-hidden rounded-3xl bg-[#07161D] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedIndex(null)}
          className="absolute right-4 top-4 z-20 rounded-full bg-black/70 px-4 py-2 text-white transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
        >
          ✕
        </button>

        <div className="relative h-[70vh] w-full">
          <Image
            src={tradition.image}
            alt={tradition.title}
            fill
            className="object-contain"
          />
        </div>

        <div className="border-t border-[#E8D6A8]/20 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[#E8D6A8]">
            {tradition.period} • {tradition.location}
          </p>

          <h2 className="mt-3 font-serif text-4xl text-[#F4E2B8]">
            {tradition.title}
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-gray-300">
            {tradition.description}
          </p>

          <div className="mt-10 flex flex-wrap justify-between gap-4">
            <button
              onClick={() =>
                setSelectedIndex(
                  (selectedIndex - 1 + traditions.length) % traditions.length
                )
              }
              className="rounded-full border border-[#E8D6A8] px-6 py-3 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
            >
              ← Previous
            </button>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/stories/the-veil-chronicles/the-archive"
                className="rounded-full border border-[#E8D6A8] px-6 py-3 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
              >
                📜 Return to Archive
              </Link>

              <Link
                href="/stories/the-veil-chronicles"
                className="rounded-full border border-[#E8D6A8] px-6 py-3 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
              >
                🏛 Return to The Veil Chronicles
              </Link>
            </div>

            <button
              onClick={() =>
                setSelectedIndex(
                  (selectedIndex + 1) % traditions.length
                )
              }
              className="rounded-full border border-[#E8D6A8] px-6 py-3 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}