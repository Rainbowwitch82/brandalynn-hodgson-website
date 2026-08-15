"use client";

import Image from "next/image";
import Link from "next/link";

interface Journal {
  archive: string;
  title: string;
  type: string;
  period: string;
  location: string;
  image: string;
  description: string;
}

interface JournalLightboxProps {
  journals: Journal[];
  selectedIndex: number;
  setSelectedIndex: (index: number | null) => void;
}

export default function JournalLightbox({
  journals,
  selectedIndex,
  setSelectedIndex,
}: JournalLightboxProps) {
  const journal = journals[selectedIndex];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 p-6"
      onClick={() => setSelectedIndex(null)}
    >
      <div
        className="relative mx-auto my-10 w-full max-w-7xl rounded-3xl bg-[#07161D] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedIndex(null)}
          className="absolute right-4 top-4 z-20 rounded-full bg-black/70 px-4 py-2 text-white transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
        >
          ✕
        </button>

        {/* Journal Cover */}
        <div className="relative h-[55vh] w-full">
          <Image
            src={journal.image}
            alt={journal.title}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Information */}
        <div className="border-t border-[#E8D6A8]/20 p-8">
          <p className="text-xs uppercase tracking-[0.45em] text-[#E8D6A8]">
            Archive No. {journal.archive}
          </p>

          <h2 className="mt-3 font-serif text-4xl text-[#F4E2B8]">
            {journal.title}
          </h2>

          <p className="mt-2 text-lg italic text-[#D7C8A0]">
            {journal.type}
          </p>

          <p className="mt-4 uppercase tracking-[0.3em] text-sm text-[#E8D6A8]">
            {journal.period} • {journal.location}
          </p>

          <p className="mt-6 max-w-4xl leading-8 text-gray-300">
            {journal.description}
          </p>

          {/* Future Placeholder */}
          <div className="mt-10 rounded-2xl border border-dashed border-[#E8D6A8]/30 bg-[#0B1F29] p-8">
            <h3 className="font-serif text-2xl text-[#F4E2B8]">
              Archived Pages
            </h3>

            <p className="mt-4 leading-8 text-gray-300">
              The digitized pages of this document will appear here. Future
              updates will include handwritten journal entries, translated
              German passages, scanned letters, recipes, sketches, pressed
              flowers, and other preserved family records.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            {/* Previous */}
            <button
              onClick={() =>
                setSelectedIndex(
                  (selectedIndex - 1 + journals.length) % journals.length
                )
              }
              className="rounded-full border border-[#E8D6A8] px-6 py-3 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
            >
              ← Previous
            </button>

            {/* Center Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setSelectedIndex(null)}
                className="rounded-full border border-[#E8D6A8] px-6 py-3 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
              >
                📚 Back to Journals
              </button>

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

            {/* Next */}
            <button
              onClick={() =>
                setSelectedIndex(
                  (selectedIndex + 1) % journals.length
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